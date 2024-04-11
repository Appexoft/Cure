import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '../../../../../utils/routes';
import HeaderTitle from '@components/HeaderTittle';
import PatientHeaderBackground from '@screens/app/patient/navigation/PatientHeaderBackground';
import { useTranslation } from 'react-i18next';
import FavoritesTabsComponent from '@screens/app/patient/favorites';

const Stack = createStackNavigator();

export const FavoritesStack = React.memo(() => {
  const { t } = useTranslation('header');
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true }}>
      <Stack.Screen
        name={ROUTES.Patient_Favorites}
        component={FavoritesTabsComponent}
        options={({ navigation }) => ({
          headerTitle: () => <HeaderTitle title={t('favorites')} />,
          headerBackground: () => <PatientHeaderBackground />,
        })}
      />
    </Stack.Navigator>
  );
});
