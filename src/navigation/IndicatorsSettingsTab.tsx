import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Color } from '../utils/GlobalStyles';
import FONTS from '../utils/fonts/index';
import { scaleHeight, scaleWidth } from '../utils/size';
import ROUTES from '../utils/routes';
import Indicator from '@screens/app/others/Indicator';
import Devices from '@screens/app/others/Devices';

const Tab = createBottomTabNavigator();

const IndicatorsSettingsTab = memo(() => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.UpComing}
      tabBarOptions={{
        activeTintColor: Color.main,
        inactiveTintColor: Color.dimgray,
        activeBackgroundColor: Color.third,
        inactiveBackgroundColor: Color.main,
        tabStyle: {
          borderRadius: scaleHeight(40),
          justifyContent: 'center',
          alignItems: 'center',
        },
        labelStyle: {
          fontFamily: FONTS.URBANIST.Regular,
          fontSize: scaleHeight(13),
        },
        style: {
          marginHorizontal: scaleWidth(24),
          marginTop: scaleHeight(16),
          position: 'absolute',
          top: 0,
          borderTopWidth: 0,
          borderRadius: scaleHeight(40),
          height: scaleHeight(40),
          backgroundColor: Color.pageBackground,
        },
        tabBarActiveBackgroundColor: Color.third,
        tabBarInactiveBackgroundColor: Color.pageBackground,
        safeAreaInsets: {
          bottom: 0,
          top: 0,
        },
      }}>
      <Tab.Screen
        name={ROUTES.Devices}
        component={Devices}
        options={{ title: 'Device' }}
      />
      <Tab.Screen
        name={ROUTES.Indicator}
        component={Indicator}
        options={{ title: 'Indicator' }}
      />
    </Tab.Navigator>
  );
});
export default IndicatorsSettingsTab;
