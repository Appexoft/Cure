import React, { memo } from 'react';
import { Platform, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ROUTES from '../../../../utils/routes';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import { ScaledSheet } from 'react-native-size-matters';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import AppointmentsStackNav from '@screens/app/patient/appointments/AppointmentsStackNav';
import { FavoritesStack } from '@screens/app/patient/favorites/navigation/FavoritesStack';
import { SearchStack } from '@screens/app/patient/search/navigation/searchStack/SearchStack';
import HomePage from '../home/home';
// import { SearchStack } from '@screens/app/patient/search/SearchStack';
import Icon from 'react-native-vector-icons/Feather';

import { BorderRadius, Color, Sizes } from '../../../../utils/GlobalStyles';
import AccountStack from './AccountStack';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const PatientBottomTabNav = memo(() => {
  const isActiveColor = (color: string) => {
    return color === Color.main;
  };

  return (
    <Tab.Navigator
      initialRouteName={ROUTES.Patient_BottomTab}
      tabBarOptions={{
        style: styles.tabBarOptions,
        showLabel: false,
        activeTintColor: Color.main,
        inactiveTintColor: Color.accent,
      }}>
      <Tab.Screen
        name={ROUTES.Patient_HomePage}
        component={HomePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={Sizes.icon_bottom_bar} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.Patient_Appointments}
        component={AppointmentsStackNav}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="clipboard" size={Sizes.icon_bottom_bar} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.Search}
        component={SearchStack}
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
                name="search"
                size={Sizes.icon_bottom_bar}
                color={isActiveColor(color) ? color : Color.white}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.Patient_Favorites}
        component={FavoritesStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="heart" size={Sizes.icon_bottom_bar} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.Patient_Account_Stack}
        component={AccountStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" size={Sizes.icon_bottom_bar} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
});
export default PatientBottomTabNav;

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
