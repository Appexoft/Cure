import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Service,
  ServiceElement,
  ServiceMockData,
  Doctor,
  DoctorCard,
  DoctorMockData,
  Hospital,
  HospitalElement,
  HospitalMockData,
} from '@components/Favorites';
import ROUTES from '../../../../../utils/routes';
import {
  SearchTabBarOptions,
  TabBarOptions,
} from '../../../../../utils/styles/TabBarOptions';
import { useTranslation } from 'react-i18next';
import { UniversalFlashList } from '@components/index';
import { Color } from '../../../../../utils/GlobalStyles';

const Tab = createBottomTabNavigator();

interface Props {
  doctorsCount: number;
  servicesCount: number;
  hospitalsCount: number;
}

export const SearchResultsNavigation = React.memo((props: Props) => {
  const { t } = useTranslation('common');
  const { doctorsCount, servicesCount, hospitalsCount } = props;

  const getCount = (value: number) => {
    if (value > 0) {
      return ' (' + value + ')';
    }
    return '';
  };

  return (
    <Tab.Navigator
      initialRouteName={ROUTES.Patient_Favorites_Doctors}
      tabBarOptions={SearchTabBarOptions}>
      <Tab.Screen
        options={{ title: t('services') + getCount(servicesCount), tabBarBadge: servicesCount }}
        name={ROUTES.Patient_Favorites_Services}
        component={() => (
          <UniversalFlashList<Service>
            data={ServiceMockData}
            renderItem={({ item, index }) => (
              <ServiceElement service={item} isFirstElement={index === 0} />
            )}
          />
        )}
      />
      <Tab.Screen
        options={{ title: t('doctors') + getCount(doctorsCount), tabBarBadge: doctorsCount }}
        name={ROUTES.Patient_Favorites_Doctors}
        component={() => (
          <UniversalFlashList<Doctor>
            data={DoctorMockData}
            renderItem={({ item, index }) => (
              <DoctorCard practitioner={item} isFirstElement={index === 0} />
            )}
          />
        )}
      />
      <Tab.Screen
        options={{ title: t('hospitals') + getCount(hospitalsCount), tabBarBadge: hospitalsCount }}
        name={ROUTES.Patient_Favorites_Hospitals}
        component={() => (
          <UniversalFlashList<Hospital>
            data={HospitalMockData}
            renderItem={({ item, index }) => (
              <HospitalElement hospital={item} isFirstElement={index === 0} />
            )}
          />
        )}
      />
    </Tab.Navigator>
  );
});
