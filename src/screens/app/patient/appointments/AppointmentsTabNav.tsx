import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ROUTES from '../../../../utils/routes';
import Upcoming from '@screens/app/patient/appointments/Upcoming';
import Past from '@screens/app/patient/appointments/Past';
import { TabBarOptions } from '../../../../utils/styles/TabBarOptions';

const Tab = createBottomTabNavigator();

interface Props {
  upcoming?: number;
  past?: number;
}

/**
 * TODO - translate please
 */
const AppointmentsTabNav = memo(({ past, upcoming }: Props) => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.UpComing}
      tabBarOptions={TabBarOptions}>
      <Tab.Screen
        name={ROUTES.UpComing}
        component={Upcoming}
        options={{ title: `Upcoming ${upcoming ? `(${upcoming})` : ''}` }}
      />
      <Tab.Screen
        name={ROUTES.Past}
        component={Past}
        options={{ title: `Past ${past ? `(${past})` : ''}` }}
      />
    </Tab.Navigator>
  );
});
export default AppointmentsTabNav;
