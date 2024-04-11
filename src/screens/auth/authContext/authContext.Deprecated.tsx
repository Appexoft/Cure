import React, { createContext, useEffect, useState } from 'react';
import {
  apiService,
  permissionValidator,
  storageManagerService,
} from '../../../services';
import { BACKEND_URL } from '@env';
import { Auth } from '@aws-amplify/auth';
import {
  AUTH_ERROR_NEW_PASSWORD_REQUIRED,
  AUTH_ERROR_NOT_CONFIRMED_EXCEPTION,
  AUTH_ERROR_PASSWORD_RESET_REQUIRED,
} from '../../../utils/error/errorHandling';
import ROUTES from '../../../utils/routes';
import { API_USERS } from '../../../services/api/ApiConstants';
import { CognitoUserSession, CognitoUser } from 'amazon-cognito-identity-js';

const AuthContextDeprecated = createContext({});

/**
 * @deprecated
 */
const AuthProvider = ({ children }) => {
  const [isStateLoaded, setIsStateLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [idToken, setIdToken] = useState<string | null>(null);
  const [userEntity, setUserEntity] = useState(null);
  const [patient, setPatient] = useState(null);
  const [permissions, setPermissions] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Will get current state from secure storage
   * @returns {Promise<void>}
   */
  const _loadAuthState = async () => {
    try {
      setIsStateLoaded(false);
      console.log('Loading authState');
      setIsLoading(true);

      apiService.init(BACKEND_URL);
      const _crtSession = await Auth.currentSession();
      if (_crtSession instanceof CognitoUserSession) {
        const { getJwtToken } = _crtSession.getIdToken();
        const jwtToken = getJwtToken();
        await storageManagerService.setIdToken(jwtToken);
        apiService.setToken(jwtToken);
        setIdToken(jwtToken);
        await _onFetchUserDataAndRedirectToHome();
      } else {
        // logout ???
        console.log('Failed to refresh token', _crtSession);
        setIsLoading(false);
        await logout();
        setIsStateLoaded(true);
        return;
      }
      setIsLoading(false);
    } catch (err) {
      console.error('Failed to load state', err);
    }

    console.log(
      'Finished loading authState. isLoggedIn:' +
        isLoggedIn +
        ', userEntity:' +
        (userEntity != null) +
        ', idToken exists:' +
        idToken !=
        null,
    );
    setIsLoading(false);
    setIsStateLoaded(true);
  };

  /**
   * Will fetch current user
   * @returns {Promise<boolean>}
   * @private
   */
  const _fetchCrtUserWithAuthorities = async () => {
    const result = await apiService.makeGETRequestPromise(
      `${API_USERS}/crtUser`,
    );
    if (result && result.data) {
      const user = result.data.user;
      const patient = result.data.patient;
      if (user) {
        setUserEntity(user);
        await storageManagerService.setLoggedInUserEntity(user);
      }
      if (patient) {
        setPatient(patient);
        await storageManagerService.setLoggedInUserPatient(patient);
      }
      permissionValidator.refreshPermissionsMap();
      return true;
    }
    return false;
  };

  /**
   * Will fetch current user permissions
   * @returns {Promise<boolean>}
   * @private
   */
  const _fetchCrtUserDetailedRolesAndPermissions = async () => {
    const result = await apiService.makeGETRequestPromise(
      `${API_USERS}/crtUser/detailedPermissions`,
    );
    if (result && result.data) {
      await storageManagerService.setLoggedInUserPermissions(result.data);
      permissionValidator.refreshPermissionsMap();
      setPermissions(result.data);
      return true;
    }
    return false;
  };

  /**
   * Will fetch current user
   * @returns {Promise<boolean>}
   * @private
   */
  const _updateUserAttributes = async (data: any) => {
    console.log('Update user attributes', data);
    const result = await apiService.makePOSTRequestPromise(
      `${API_USERS}/update`,
      data,
    );
    if (result && result.data) {
      await _fetchCrtUserWithAuthorities();
      await _fetchCrtUserDetailedRolesAndPermissions();
      return true;
    }
    return false;
  };

  /**
   * Will create current user
   * @returns {Promise<boolean>}
   * @private
   */
  const createUser = async (
    email: string,
    cognitoSub: any,
    firstName: string,
    lastName: string,
    phoneNumber: string,
  ) => {
    setIsLoading(true);
    const patientData = {
      username: email,
      sub: cognitoSub,
      firstName: firstName,
      lastName: lastName,
      email: email,
      activated: true,
    };
    const result = await apiService.makePOSTRequest(
      `${API_USERS}/create`,
      patientData,
    );
    if (result && result.data) {
      console.log('received', result);
      const user = result.data.user;
      const patient = result.data.patient;
      if (user) {
        setUserEntity(user);
        await storageManagerService.setLoggedInUserEntity(user);
      }
      if (patient) {
        setPatient(patient);
        await storageManagerService.setLoggedInUserPatient(patient);
      }
      permissionValidator.refreshPermissionsMap();
      await _fetchCrtUserWithAuthorities();
      await _fetchCrtUserDetailedRolesAndPermissions();
      return true;
    }
    return false;
  };

  /**
   * Will fetch user data before login
   * @returns {Promise<void>}
   * @private
   */
  const _onFetchUserDataAndRedirectToHome = async () => {
    const result1 = await _fetchCrtUserWithAuthorities();
    const result2 = await _fetchCrtUserDetailedRolesAndPermissions();
    // todo handle errors calling the backend ??
    if (result1 && result2) {
      setIsLoggedIn(true); // as soon as we set this, React Navigator will automatically redirect to Main page
      setIsLoading(false);
    } else {
      const _userEntity = await storageManagerService.getLoggedInUserEntity();
      const _permissions =
        await storageManagerService.getLoggedInUserPermissions();
      const _patient = await storageManagerService.getLoggedInUserPatient();
      setUserEntity(_userEntity);
      setPermissions(_permissions);
      setPatient(_patient);
    }
  };

  /**
   * Will configure the loggedin user
   * @param data
   * @returns {Promise<{payload: {data}, type: string}>}
   */
  const _configureLoggedInData = async (data: any) => {
    console.log('onUserLoggedIn');
    await storageManagerService.setLoggedInUserAuth(data);
    // We are using the idToken to authenticate to backend
    await storageManagerService.setAccessToken(
      data.signInUserSession.accessToken.jwtToken,
    );
    await storageManagerService.setIdToken(
      data.signInUserSession.idToken.jwtToken,
    );
    await storageManagerService.setRefreshToken(
      data.signInUserSession.refreshToken.token,
    );
    setIdToken(data.signInUserSession.idToken.jwtToken);
    apiService.setToken(data.signInUserSession.idToken.jwtToken);
    console.log('Finished configuring current session. Making http calls now');
  };

  /**
   * Will check the reason for failure and redirect accordingly
   * @param email
   * @param password
   * @param response
   * @param navigation
   * @returns {Promise<void>}
   */
  const _onFailedLogin = async (
    email: string,
    password: string,
    response: any,
    navigation: any,
  ) => {
    console.log('Failed to login', response);
    setIsLoading(false);
    if (response && response.code === AUTH_ERROR_NOT_CONFIRMED_EXCEPTION) {
      navigation.navigate(ROUTES.VerifyEmail, {
        username: email,
        password: password,
      });
    }
    if (response && response.code === AUTH_ERROR_PASSWORD_RESET_REQUIRED) {
      navigation.navigate(ROUTES.ResetPassword, {
        username: email,
        password: password,
      });
    } else {
      setError(response.message);
    }
  };

  /**
   * Will login the user
   * @param email         - must not be null
   * @param password      - must not be null
   * @param navigation    - must not be null
   * @param shouldUpdateUserOnBackend - must not be null
   * @returns {Promise<void>}
   */
  const login = async (
    email,
    password,
    navigation,
    shouldUpdateUserOnBackend,
    shouldCreateUserOnBackend,
  ) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await Auth.signIn(
        email.trim().toLowerCase(),
        password.trim(),
      );
      if (response instanceof CognitoUser) {
        console.log('User logged in successfully ', response);

        if (response.challengeName === AUTH_ERROR_NEW_PASSWORD_REQUIRED) {
          navigation.navigate(ROUTES.ResetPassword, {
            username: email,
            password: password,
          });
          return;
        }
        await _configureLoggedInData(response);
        if (shouldCreateUserOnBackend && response.attributes) {
          await createUser(
            response.attributes.email,
            response.attributes.sub,
            response.attributes.given_name,
            response.attributes.family_name,
            response.attributes.phone_number,
          );
        }
        if (shouldUpdateUserOnBackend && response.attributes) {
          const data = {
            firstName: response.attributes.given_name,
            lastName: response.attributes.family_name,
            email: response.attributes.email,
            newEmail: response.attributes.email,
            phoneNumber: response.attributes.phone_number,
            newPhoneNumber: response.attributes.phone_number,
            markUserActivated: true,
          };
          await _updateUserAttributes(data);
        }
        await _onFetchUserDataAndRedirectToHome();
      } else {
        await _onFailedLogin(email, password, response, navigation);
      }
    } catch (err) {
      console.error('Failed to login', err);
      setError(err.message);
      setIsLoading(false);
    }
  };

  const logout = async () => {
    console.log('Will logout user');
    await storageManagerService.removeLoggedInUser();
    setIsLoggedIn(false);
    setPermissions(null);
    setIdToken(null);
    setUserEntity(null);
    await Auth.signOut({ global: false });
    console.log('Finished logout');
  };

  useEffect(() => {
    _loadAuthState();
  }, []);

  return (
    <AuthContextDeprecated.Provider
      value={{
        isStateLoaded,
        idToken,
        isLoading,
        setIsLoading,
        error,
        isLoggedIn,
        userEntity,
        setUserEntity,
        patient,
        setPatient,
        permissions,
        setPermissions,
        createUser,
        login,
        logout,
      }}>
      {children}
    </AuthContextDeprecated.Provider>
  );
};

export { AuthContextDeprecated, AuthProvider };
