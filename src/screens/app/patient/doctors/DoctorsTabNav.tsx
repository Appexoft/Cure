import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { Color } from '../../../../utils/GlobalStyles';
import FONTS from '../../../../utils/fonts';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import ROUTES from '../../../../utils/routes';
import Nearby from '@screens/app/patient/doctors/Nearby';
import ListAll from '@screens/app/patient/doctors/ListAll';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const Tab = createBottomTabNavigator();

const DoctorsTabNav = memo(() => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.ListAll}
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
          fontWeight: '500',
          fontSize: scaleHeight(13),
        },
        style: {
          marginHorizontal: scaleWidth(24),
          marginTop:
            Platform.OS === 'ios'
              ? getStatusBarHeight() + scaleHeight(74)
              : scaleHeight(74),
          position: 'absolute',
          top: 0,
          borderTopWidth: 0,
          borderRadius: scaleHeight(40),
          height: scaleHeight(40),
          backgroundColor: Color.main,
        },
        safeAreaInsets: {
          bottom: 0,
          top: 0,
        },
      }}>
      <Tab.Screen
        name={ROUTES.Nearby}
        component={Nearby}
        options={{ title: 'Nearby' }}
      />
      <Tab.Screen
        name={ROUTES.ListAll}
        component={ListAll}
        options={{ title: 'List All' }}
      />
    </Tab.Navigator>
  );
});
export default DoctorsTabNav;
