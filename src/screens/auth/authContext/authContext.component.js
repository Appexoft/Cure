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
import { CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js';
import {
  API_CODEABLE_CONCEPTS,
  API_PRACTITIONER,
  API_USERS,
} from '../../../services/api/ApiConstants';
import { toUser, InterfaceType } from '../../../utils/entityUtils';
import { DEBUG } from '../../../services/api/api.service';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isStateLoaded, setIsStateLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [idToken, setIdToken] = useState(null);
  const [userEntity, setUserEntity] = useState(undefined); // <IUser| undefined>
  const [patient, setPatient] = useState(undefined);
  const [practitioner, setPractitioner] = useState(undefined);
  const [permissions, setPermissions] = useState(null);
  const [crtInterface, setCurrentInterface] = useState(InterfaceType.PATIENT);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const setCrtInterface = (interf) => {
    setCurrentInterface(interf);
    storageManagerService.setCrtInterface(interf);
  };

  /**
   * Will get current state from secure storage
   * @returns {Promise<void>}
   */
  const _loadAuthState = async () => {
    try {
      setIsStateLoaded(false);
      setIsLoading(true);

      // 1, Load Data
      apiService.init(BACKEND_URL);
      const _crtInterface = await storageManagerService.getCrtInterface();
      setCrtInterface(
        _crtInterface !== undefined ? _crtInterface : InterfaceType.PATIENT,
      );
      const _crtSession = await Auth.currentSession();
      if (_crtSession instanceof CognitoUserSession) {
        const { jwtToken } = _crtSession.idToken;
        await storageManagerService.setIdToken(jwtToken);
        if (DEBUG) {
          console.log('jwtToken', jwtToken);
        }
        apiService.setToken(jwtToken);
        setIdToken(jwtToken);
        await _onFetchUserDataAndRedirectToHome(
          _crtSession?.getIdToken()?.payload?.email,
        );
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
      const practitioner = result.data.practitioner;
      if (DEBUG) {
        console.log('_fetchCrtUserWithAuthorities', result.data);
      }
      if (user) {
        setUserEntity(toUser(user));
        await storageManagerService.setLoggedInUserEntity(user);
      }
      if (patient) {
        setPatient(patient);
        await storageManagerService.setLoggedInUserPatient(patient);
      }
      setPractitioner(practitioner);
      await storageManagerService.setLoggedInUserPractitioner(practitioner);
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
    console.log('_fetchCrtUserDetailedRolesAndPermissions');
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
    email,
    cognitoSub,
    firstName,
    lastName,
    phoneNumber,
  ) => {
    setIsLoading(true);
    const userData = {
      username: email,
      firstName: firstName,
      lastName: lastName,
      email: email,
      privateEmail: email,
      phoneNumber: phoneNumber || null,
      activated: false,
      langKey: 'en_US',
    };
    console.log('Creating the user', userData);
    const result = await apiService.makePOSTRequest(
      `${API_USERS}/create`,
      userData,
    );
    if (result && result.data) {
      console.log('received', result);
      const user = result.data.user;
      const patient = result.data.patient;
      if (user) {
        setUserEntity(toUser(user));
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
  const _onFetchUserDataAndRedirectToHome = async (email: string) => {
    console.log('_onFetchUserDataAndRedirectToHome');
    const result1 = await _fetchCrtUserWithAuthorities();
    const result2 = await _fetchCrtUserDetailedRolesAndPermissions();
    console.log('Fetched current user', result1);
    console.log('Fetched current detailed roles', result2);
    // todo handle errors calling the backend ??
    if (result1 && result2) {
      setIsLoggedIn(true); // as soon as we set this, React Navigator will automatically redirect to Main page
      setIsLoading(false);
    } else {
      const _userEntity = await storageManagerService.getLoggedInUserEntity();
      console.log(
        'Not able to fetch current user, hence use existing data',
        _userEntity,
      );
      const _permissions =
        await storageManagerService.getLoggedInUserPermissions();
      const _patient = await storageManagerService.getLoggedInUserPatient();
      const _practitioner =
        await storageManagerService.getLoggedInUserPractitioner();
      const user = toUser(_userEntity);
      setUserEntity(user);
      setPermissions(_permissions);
      setPatient(_patient);
      setPractitioner(_practitioner);
      setCrtInterface(InterfaceType.PATIENT);
    }
  };

  /**
   * Will configure the loggedin user
   * @param data
   * @returns {Promise<{payload: {data}, type: string}>}
   */
  const _configureLoggedInData = async (data) => {
    console.log('onUserLoggedIn');
    await storageManagerService.removeLoggedInUser();
    await storageManagerService.setLoggedInUserAuth(data);
    // We are using the idToken to authenticate to backend
    await storageManagerService.setAccessToken(
      data.signInUserSession.accessToken.jwtToken,
    );
    // todo comment in prod
    console.log('TOKEN FOR API:', data.signInUserSession.accessToken.jwtToken);
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
  const _onFailedLogin = async (email, password, response, navigation) => {
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

  const loginFederated = async (
    userData,
    navigation,
    shouldUpdateUserOnBackend,
    shouldCreateUserOnBackend,
  ) => {
    console.log('loginFederated', userData);
    setIsLoading(true);
    setError(null);
    try {
      const response = await Auth.currentAuthenticatedUser();
      if (response instanceof CognitoUser) {
        console.log('User logged in successfully federated ', response);
        await _configureLoggedInData(response);

        if (response.challengeName === AUTH_ERROR_NEW_PASSWORD_REQUIRED) {
          navigation.navigate(ROUTES.ResetPassword, {
            username: email,
            password: password,
          });
          return;
        }
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
        setCrtInterface(InterfaceType.PATIENT);
        await _onFetchUserDataAndRedirectToHome(response?.attributes?.email);
      } else {
        await _onFailedLogin(email, password, response, navigation);
      }
    } catch (err) {
      console.error('Failed to login', err);
      setError(err.message);
      setIsLoading(false);
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
    console.log('login');
    setIsLoading(true);
    setError(null);
    try {
      const response = await Auth.signIn(
        email.trim().toLowerCase(),
        password.trim(),
      );
      if (response instanceof CognitoUser) {
        console.log('User logged in successfully ', response);
        await _configureLoggedInData(response);

        if (response.challengeName === AUTH_ERROR_NEW_PASSWORD_REQUIRED) {
          navigation.navigate(ROUTES.ResetPassword, {
            username: email,
            password: password,
          });
          return;
        }
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
        setCrtInterface(InterfaceType.PATIENT);
        await _onFetchUserDataAndRedirectToHome(response?.attributes?.email);
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
    let crtUser = await storageManagerService.getAccessToken();
    if (crtUser || isLoggedIn) {
      console.log('Will logout user');
      await storageManagerService.removeLoggedInUser();
      setIsLoggedIn(false);
      setPermissions(null);
      setIdToken(null);
      setUserEntity(null);
      setCrtInterface(InterfaceType.PATIENT);
      await Auth.signOut({ global: false });
      console.log('Finished logout');
    }
  };

  const handleChangeAppLanguage = async (language) => {
    try {
      const { data } = await apiService.makePOSTRequestPromise(
        `${API_USERS}/updateLanguage`,
        {
          userId: userEntity.id,
          email: userEntity.email,
          locale: language,
        },
      );
      setUserEntity({ ...userEntity, locale: data.langKey });
    } catch (e) {
      console.log('error', e);
    }
  };

  const handleUpdatePersonalInfo = async (
    firstName,
    lastName,
    gender,
    birthday,
  ) => {
    try {
      console.log('gender', gender);
      await apiService
        .makePOSTRequestPromise(`${API_USERS}/updatePersonalInfo`, {
          firstName,
          lastName,
          gender: gender.toUpperCase(),
          birthDate: birthday,
        })
        .then(async (res) => {
          await _fetchCrtUserWithAuthorities(),
            await _fetchCrtUserDetailedRolesAndPermissions();
        })
        .finally(
          () =>
            setUserEntity({
              ...userEntity,
              firstName: firstName,
              lastName: lastName,
              gender: gender.toUpperCase(),
              birthDate: Math.floor(new Date(reversedDate).getTime() / 1000),
            }),
          setPatient({
            ...patient,
            gender: gender.toUpperCase(),
          }),
        );
    } catch (e) {
      console.log('eeerereorror', e);
    }
  };

  const handleUpdatePhone = async (firstName, lastName, email, phoneNumber) => {
    try {
      const data = {
        firstName,
        lastName,
        email,
        newEmail: email,
        phoneNumber,
        newPhoneNumber: phoneNumber,
      };
      await _updateUserAttributes(data).then(
        (res) =>
          res && setUserEntity({ ...userEntity, phoneNumber: phoneNumber }),
      );
    } catch (e) {
      console.log('error', e);
    }
  };

  const handleUpdateEmail = async (firstName, lastName, email) => {
    try {
      const data = {
        firstName,
        lastName,
        email,
        newEmail: email,
      };
      await _updateUserAttributes(data).then(
        (res) => res && console.log('res', res),
      );
    } catch (e) {
      console.log('error', e);
    }
  };

  const handleUpdateAddress = async (data) => {
    try {
      await apiService
        .makePOSTRequestPromise(`${API_USERS}/updateAddress`, data)
        .then((res) => console.log('resAddress', res));
    } catch (e) {
      console.log('error', e);
    }
  };

  const handleUpdatePractitioners = async (
    userId,
    namePrefix,
    nameGiven,
    nameFamily,
    email1,
    birthDate,
    phoneNumber1,
    preferredLanguage,
    description,
  ) => {
    try {
      await apiService
        .makePOSTRequest(
          `${API_PRACTITIONER}/onboarding/updatePersonalDetails/${userId}`,
          {
            userId,
            nameGiven,
            nameFamily,
            namePrefix,
            email1,
            birthDate,
            phoneNumber1,
            description,
            preferredLanguage,
          },
        )
        .then((res) => console.log('res', res));
    } catch (err) {
      console.log('err', err);
    }
  };

  useEffect(() => {
    _loadAuthState();
  }, []);

  return (
    <AuthContext.Provider
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
        practitioner,
        permissions,
        setPermissions,
        crtInterface,
        setCrtInterface,
        createUser,
        login,
        loginFederated,
        logout,
        handleChangeAppLanguage,
        handleUpdatePersonalInfo,
        handleUpdateEmail,
        handleUpdatePhone,
        handleUpdateAddress,
        handleUpdatePractitioners,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
