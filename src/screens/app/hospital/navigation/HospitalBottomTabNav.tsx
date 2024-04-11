import React, { memo } from 'react';
import { Platform, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ROUTES from '../../../../utils/routes';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import { ScaledSheet } from 'react-native-size-matters';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import HomePage from '../home/index';
import Icon from 'react-native-vector-icons/Feather';

import { BorderRadius, Color, Sizes } from '../../../../utils/GlobalStyles';
import AccountStack from './AccountStack';
import HospitalHeaderBackground from '@screens/app/hospital/navigation/HospitalHeaderBackground';

const Tab = createBottomTabNavigator();

const HospitalBottomTabNav = memo(() => {
  const isActiveColor = (color: string) => {
    return color === Color.main;
  };

  // @ts-ignore
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.Hospital_BottomTab}
      tabBarOptions={{
        style: styles.tabBarOptions,
        showLabel: false,
        activeTintColor: Color.main,
        inactiveTintColor: Color.accent,
      }}>
      <Tab.Screen
        name={ROUTES.Hospital_HomePage}
        component={HomePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={Sizes.icon_bottom_bar} color={color} />
          ),
          headerBackground: () => <HospitalHeaderBackground />,
        }}
      />
      <Tab.Screen
        name={ROUTES.Hospital_Services}
        component={HomePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="list" size={Sizes.icon_bottom_bar} color={color} />
          ),
          headerBackground: () => <HospitalHeaderBackground />,
        }}
      />
      <Tab.Screen
        name={ROUTES.Hospital_Calendar}
        component={HomePage}
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={[
                styles.viewTabBarIcon,
                isActiveColor(color)
                  ? styles.viewTabBarActive
                  : styles.viewTabBarInactive,
              ]}>
              <Icon
                name="calendar"
                size={Sizes.icon_bottom_bar}
                color={isActiveColor(color) ? color : Color.white}
              />
            </View>
          ),
          headerBackground: () => <HospitalHeaderBackground />,
        }}
      />
      <Tab.Screen
        name={ROUTES.Hospital_Patients}
        component={HomePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="users" size={Sizes.icon_bottom_bar} color={color} />
          ),
          headerBackground: () => <HospitalHeaderBackground />,
        }}
      />
      <Tab.Screen
        name={ROUTES.Patient_Account_Stack}
        component={AccountStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" size={Sizes.icon_bottom_bar} color={color} />
          ),
          headerBackground: () => <HospitalHeaderBackground />,
        }}
      />
    </Tab.Navigator>
  );
});
export default HospitalBottomTabNav;

const styles = ScaledSheet.create({
  viewTabBarIcon: {
    borderWidth: scaleWidth(4),
    height: scaleWidth(56),
    width: scaleWidth(56),
    borderRadius: scaleWidth(56),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:
      Platform.OS === 'ios'
        ? getBottomSpace() + scaleHeight(-30)
        : scaleHeight(-20),
  },
  viewTabBarActive: {
    backgroundColor: Color.accent,
    borderColor: Color.main,
  },
  viewTabBarInactive: {
    backgroundColor: Color.accent,
    borderColor: Color.cardStroke,
  },
  icon: {
    color: Color.accent,
  },
  tabBarOptions: {
    backgroundColor: Color.cardBackground,
    height: getBottomSpace() + scaleHeight(90),
    borderTopEndRadius: scaleWidth(BorderRadius.large),
    borderTopStartRadius: scaleWidth(BorderRadius.large),
    paddingTop: scaleHeight(10),
    borderTopWidth: 0,
    position: 'absolute',
    bottom: 0,
  },
});
