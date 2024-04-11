import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Color } from '../utils/GlobalStyles';
import FONTS from '../utils/fonts/index';
import { scaleHeight, scaleWidth } from '../utils/size';
import ROUTES from '../utils/routes';
import Exploxer from '@screens/app/others/Exploxer';
import Trends from '@screens/app/others/Trends';
import Follow from '@screens/app/others/Follow';

const Tab = createBottomTabNavigator();

const NewsTab = memo(() => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.Trends}
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
          marginTop: scaleHeight(16),
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
        name={ROUTES.Explorer}
        component={Exploxer}
        options={{ title: 'Exploxer' }}
      />
      <Tab.Screen
        name={ROUTES.Trends}
        component={Trends}
        options={{ title: 'Trends' }}
      />
      <Tab.Screen
        name={ROUTES.Follow}
        component={Follow}
        options={{ title: 'Follow' }}
      />
    </Tab.Navigator>
  );
});
export default NewsTab;
