import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '../../../../utils/routes';
import HeaderTitle from '@components/HeaderTittle';
import ButtonHeader from '@components/btns/ButtonHeader';
import PatientHeaderBackground from '@screens/app/patient/navigation/PatientHeaderBackground';
import AppointmentsTabNav from '@screens/app/patient/appointments/AppointmentsTabNav';
import Icon from 'react-native-vector-icons/Feather';
import { Sizes } from '../../../../utils/GlobalStyles';
import { useTranslation } from 'react-i18next';
import { commonStyles } from '../../../../utils/styles/commonStyles';

const Stack = createStackNavigator();

const AppointmentsStackNav = memo(() => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true }}>
      <Stack.Screen
        name={ROUTES.AppointmentList}
        component={AppointmentsTabNav}
        options={({ navigation }) => ({
          headerTitle: () => <HeaderTitle title={t('header:appointments')} />,
          headerRight: () => (
            <ButtonHeader
              children={
                <Icon
                  name="plus"
                  size={Sizes.icon_bottom_bar}
                  style={commonStyles.headerIcon}
                />
              }
            />
          ),
          headerBackground: () => <PatientHeaderBackground />,
        })}
      />
    </Stack.Navigator>
  );
});

export default AppointmentsStackNav;
