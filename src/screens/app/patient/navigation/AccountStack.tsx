import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '../../../../utils/routes';
import { useTranslation } from 'react-i18next';
import UserProfile from '@screens/app/patient/account/UserProfile';
import HeaderTitle from '@components/HeaderTittle';
import PatientHeaderBackground from './PatientHeaderBackground';
import ChangePassword from '../account/ChangePassword';
import ButtonHeader from '@components/btns/ButtonHeader';

const Stack = createStackNavigator();

const AccountStack = memo(() => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator initialRouteName={ROUTES.Patient_Account}>
      <Stack.Screen
        name={ROUTES.Patient_Account}
        component={UserProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
});

export default AccountStack;
