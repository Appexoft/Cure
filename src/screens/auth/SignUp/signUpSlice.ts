import { apiService, storageManagerService } from '../../../services';
import ROUTES from '../../../utils/routes';
import { Auth } from '@aws-amplify/auth';
import {
  AUTH_ERROR_NEW_PASSWORD_REQUIRED,
  AUTH_ERROR_NOT_CONFIRMED_EXCEPTION,
  AUTH_ERROR_PASSWORD_RESET_REQUIRED,
} from '../../../utils/error/errorHandling';
import { API_USERS } from '../../../services/api/ApiConstants';
import { createAsyncThunk, createSlice, Dispatch } from '@reduxjs/toolkit';
import { NavigationProp } from '@react-navigation/native';

export const BASE_ACTION = 'auth/signup';

export const ACTION_TYPES = {
  RESET: `${BASE_ACTION}/RESET`,
  SET_ERROR: `${BASE_ACTION}/SET_ERROR`,
  SET_LOADING: `${BASE_ACTION}/SET_LOADING`,
  SET_COGNITO_USER: `${BASE_ACTION}/SET_COGNITO_USER`,

  FETCH_CRT_USER_AUTH: `${BASE_ACTION}/FETCH_CRT_USER_AUTH`,
  FETCH_USER_DETAILED_ROLES_PERMISSIONS: `${BASE_ACTION}/FETCH_USER_DETAILED_ROLES_PERMISSIONS`,
  CREATE_ENTITY: `${BASE_ACTION}/CREATE_ENTITY`,

  USER_LOGGED_IN: `${BASE_ACTION}/USER_LOGGED_IN`,
  LOGOUT_USER: `${BASE_ACTION}/LOGOUT_USER`,
};

interface SignUpState {
  loading: boolean;
  error?: null | string;
  entity: null;
  updating: boolean;
  updateSuccess: boolean;
  redirectToMainPage: boolean;
}

const initialState: SignUpState = {
  loading: false,
  error: null,
  entity: null,
  updating: false,
  updateSuccess: false,
  redirectToMainPage: false,
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    reset(state) {
      state = initialState;
    },
    logoutUser(state) {},
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.entity = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { reset, logoutUser } = signUpSlice.actions;
export default signUpSlice.reducer;

// Actions handling

export const setUserLoggedIn = (data) => ({
  type: ACTION_TYPES.USER_LOGGED_IN,
  payload: { data },
});

export const setCognitoUser = (data) => ({
  type: ACTION_TYPES.SET_COGNITO_USER,
  payload: { data },
});

export const fetchCrtUserWithAuthorities = createAsyncThunk(
  'signUp/fetchCrtUserAuth',
  async () => {
    const response = await apiService.makeGETRequestPromise(
      `${API_USERS}/crtUser`,
    );
    return response;
  },
);

export const fetchCrtUserDetailedRolesAndPermissions = createAsyncThunk(
  'signUp/fetchUserDetailedRolesPermissions',
  async () => {
    const response = await apiService.makeGETRequestPromise(
      `${API_USERS}/crtUser/detailedPermissions`,
    );
    return response;
  },
);

export const onUserLoggedIn = createAsyncThunk(
  'signUp/onUserLoggedIn',
  async (
    { data }: { data: any; navigation: NavigationProp<any> },
    thunkAPI,
  ) => {
    const { dispatch } = thunkAPI;
    storageManagerService.setLoggedInUserAuth(data);
    storageManagerService.setAccessToken(
      data.signInUserSession.accessToken.jwtToken,
    );
    storageManagerService.setIdToken(data.signInUserSession.idToken.jwtToken);
    storageManagerService.setRefreshToken(
      data.signInUserSession.refreshToken.token,
    );
    apiService.setToken(data.signInUserSession.idToken.jwtToken);
    const promise1 = dispatch(fetchCrtUserWithAuthorities());
    const promise2 = dispatch(fetchCrtUserDetailedRolesAndPermissions());

    Promise.all([promise1, promise2]).then(() => {
      dispatch(setUserLoggedIn(data));
    });
  },
);

const loginUser = createAsyncThunk(
  'signUp/loginUser',
  async (
    {
      email,
      password,
      navigation,
      shouldUpdateUserOnBackend,
    }: {
      email: string;
      password: string;
      navigation: NavigationProp<any>;
      shouldUpdateUserOnBackend: boolean;
    },
    thunkAPI,
  ) => {
    const { dispatch } = thunkAPI;

    try {
      const response = await Auth.signIn(
        email.trim().toLowerCase(),
        password.trim(),
      );

      if (response.challengeName === AUTH_ERROR_NEW_PASSWORD_REQUIRED) {
        navigation.navigate(ROUTES.ResetPassword, {
          username: email,
          password: password,
        });
        return;
      }
      dispatch(onUserLoggedIn({ data: response, navigation }));

      if (shouldUpdateUserOnBackend && response.attributes) {
        const data = {
          firstName: response.attributes.given_name,
          lastName: response.attributes.family_name,
          email: response.attributes.email,
          phoneNumber: response.attributes.phone_number,
          markUserActivated: true,
        };
      }
    } catch (e: any) {
      if (e && e.code === AUTH_ERROR_NOT_CONFIRMED_EXCEPTION) {
        navigation.navigate(ROUTES.VerifyEmail, {
          username: email,
          password: password,
        });
      }
      if (e && e.code === AUTH_ERROR_PASSWORD_RESET_REQUIRED) {
        navigation.navigate(ROUTES.ResetPassword, {
          username: email,
          password: password,
        });
      } else {
        return e.message;
      }
    }
  },
);

export const logout = (dispatch: Dispatch, navigation: NavigationProp<any>) => {
  storageManagerService.removeLoggedInUser();
  if (navigation) {
    navigation.navigate(ROUTES.SignIn);
  }
  dispatch(logoutUser());
};
