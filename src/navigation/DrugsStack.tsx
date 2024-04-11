import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '../utils/routes';
import HeaderTitle from '@components/HeaderTittle';
import ButtonHeader from '@components/btns/ButtonHeader';
import PatientHeaderBackground from '@screens/app/patient/navigation/PatientHeaderBackground';
import SvgMenu from '@assets/svgs/SvgMenu';
import SvgNotification from '@assets/svgs/SvgNotification';
import Drugs from '@screens/app/others/Drugs';

const Stack = createStackNavigator();

const DrugsStack = memo(() => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true }}>
      <Stack.Screen
        name={ROUTES.Drugs}
        component={Drugs}
        options={({ navigation }) => ({
          headerTitle: () => <HeaderTitle title={'Drugs'} />,
          headerLeft: () => (
            <ButtonHeader
              onPress={() => navigation.openDrawer()}
              children={<SvgMenu />}
            />
          ),
          headerRight: () => (
            <ButtonHeader
              children={<SvgNotification />}
              onPress={() => {
                navigation.navigate(ROUTES.Notification);
              }}
            />
          ),
          headerBackground: () => <PatientHeaderBackground />,
        })}
      />
    </Stack.Navigator>
  );
});

export default DrugsStack;
