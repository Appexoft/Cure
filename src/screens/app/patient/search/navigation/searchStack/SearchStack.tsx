import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '../../../../../../utils/routes';
import Search from '../../index';

const Stack = createStackNavigator();

interface Props {
  filterObj: any;
}
export const SearchStack = memo((props: Props) => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: false }}>
      <Stack.Screen
        name={ROUTES.Patient_Search}
        component={Search}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
});
