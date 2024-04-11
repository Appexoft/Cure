import React, { memo } from 'react';
import { Color } from '../utils/GlobalStyles';
import FONTS from '../utils/fonts/index';
import { scaleHeight, scaleWidth } from '../utils/size';
import ROUTES from '../utils/routes';
import Day from '@screens/app/others/Day';
import Month from '@screens/app/others/Month';
import Year from '@screens/app/others/Year';
import Week from '@screens/app/others/Week';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const Tab = createMaterialTopTabNavigator();

const StaticsHealthTab = memo(() => {
  return (
    <Tab.Navigator
      screenOptions={{
        swipeEnabled: true,
        tabBarIndicatorContainerStyle: {
          width: scaleWidth(16),
          height: scaleHeight(4),
          alignSelf: 'center',
          marginLeft: scaleWidth(34),
          borderTopRightRadius: scaleWidth(200),
          borderTopLeftRadius: scaleWidth(200),
          backgroundColor: Color.third,
        },
        tabBarStyle: {
          marginTop:
            Platform.OS === 'ios'
              ? getStatusBarHeight() + scaleHeight(74)
              : scaleHeight(74),
          position: 'absolute',
          alignSelf: 'center',
          width: scaleWidth(343),
          borderRadius: scaleHeight(16),
          height: scaleHeight(48),
          backgroundColor: Color.main,
          shadowColor: 'transparent',
        },
        tabBarActiveTintColor: Color.semiBlack,
        tabBarInactiveTintColor: Color.silverChalice,
        tabBarLabelStyle: {
          fontFamily: FONTS.URBANIST.Regular,
          fontSize: scaleHeight(12),
          textTransform: 'uppercase',
        },
      }}>
      <Tab.Screen
        name={ROUTES.Day}
        component={Day}
        options={{ title: 'Day' }}
      />
      <Tab.Screen
        name={ROUTES.Week}
        component={Week}
        options={{ title: 'Week' }}
      />
      <Tab.Screen
        name={ROUTES.Month}
        component={Month}
        options={{ title: 'Month' }}
      />
      <Tab.Screen
        name={ROUTES.Year}
        component={Year}
        options={{ title: 'Year' }}
      />
    </Tab.Navigator>
  );
});
export default StaticsHealthTab;
