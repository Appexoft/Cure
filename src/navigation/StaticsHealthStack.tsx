import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '../utils/routes';
import HeaderTitle from '@components/HeaderTittle';
import ButtonHeader from '@components/btns/ButtonHeader';
import PatientHeaderBackground from '@screens/app/patient/navigation/PatientHeaderBackground';
import SvgMenu from '@assets/svgs/SvgMenu';
import StaticsHealthTab from '@navigation/StaticsHealthTab';
import SvgPen from '@assets/svgs/StaticHealth/SvgPen';

const Stack = createStackNavigator();

const StaticsHealthStack = memo(() => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true }}>
      <Stack.Screen
        name={ROUTES.StaticsHealth}
        component={StaticsHealthTab}
        options={({ navigation }) => ({
          headerTitle: () => <HeaderTitle title={'Test Indicators'} />,
          headerLeft: () => (
            <ButtonHeader
              onPress={() => navigation.openDrawer()}
              children={<SvgMenu />}
            />
          ),
          headerRight: () => (
            <ButtonHeader
              children={<SvgPen />}
              onPress={() => {
                navigation.navigate(ROUTES.InputTestIndicators);
              }}
            />
          ),
          headerBackground: () => <PatientHeaderBackground />,
        })}
      />
    </Stack.Navigator>
  );
});

export default StaticsHealthStack;
