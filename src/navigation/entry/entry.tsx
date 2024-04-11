import React, { memo, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from '@navigation/common/NavigationService';
import WalkThrough from '@screens/WalkThrough';
import SignIn from '@screens/auth/SignIn';
import SignUp from '@screens/auth/SignUp';
import ForgotPassword from '@screens/auth/ForgotPassword';
import ResetPassword from '@screens/auth/ResetPassword';
import ResetPasswordSuccess from '@screens/auth/ResetPasswordSuccess';
import VerifyEmail from '@screens/auth/VerifyEmail';
import VerifyMobile from '@screens/app/others/VerifyMobie';
import CreateAccount from '@screens/auth/CreateAccount';
import ROUTES from '../../utils/routes';
import useAuth from '@screens/auth/authContext/useAuth';
import Loading from '@screens/app/common/loading';
import { EntryParamList } from './entry.types';
import AppStack from '@screens/app/patient/navigation/AppStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends EntryParamList {}
  }
}

const Stack = createStackNavigator();

export const Entry = memo(
  ({ theme, setPatient, setUserEntity, setPermissions }) => {
    const { isLoggedIn, isStateLoaded, patient, userEntity, permissions } =
      useAuth();

    useEffect(() => {
      if (setPermissions) {
        setPermissions(permissions);
      }
    }, [permissions, setPermissions]);

    return (
      <NavigationContainer ref={navigationRef}>
        {!isStateLoaded ? (
          <Loading />
        ) : (
          <>
            {!isLoggedIn ? (
              <Stack.Navigator
                screenOptions={{ headerMode: 'screen' }}
                initialRouteName={ROUTES.SignIn}>
                <Stack.Screen
                  name={ROUTES.SignIn}
                  component={SignIn}
                  options={{
                    headerShown: false,
                    animationTypeForReplace: 'push',
                  }}
                />
                <Stack.Screen
                  name={ROUTES.SignUp}
                  component={SignUp}
                  options={{
                    headerShown: false,
                    headerTransparent: false,
                    headerTitle: '',
                    headerBackTitle: 'Sign up',
                  }}
                />
                <Stack.Screen
                  name={ROUTES.ForgotPassword}
                  component={ForgotPassword}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name={ROUTES.ResetPassword}
                  component={ResetPassword}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name={ROUTES.ResetPasswordSuccess}
                  component={ResetPasswordSuccess}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name={ROUTES.VerifyEmail}
                  component={VerifyEmail}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name={ROUTES.VerifyMobile}
                  component={VerifyMobile}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name={ROUTES.CreatAccount}
                  component={CreateAccount}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            ) : (
              <Stack.Navigator screenOptions={{ headerTransparent: true }}>
                <Stack.Screen
                  options={{ headerShown: false }}
                  name={ROUTES.AppStack}
                  component={AppStack}
                />
              </Stack.Navigator>
            )}
          </>
        )}
      </NavigationContainer>
    );
  },
);

export default Entry;
