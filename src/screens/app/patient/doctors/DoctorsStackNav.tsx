import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '../../../../utils/routes';
import HeaderTitle from '@components/HeaderTittle';
import ButtonHeader from '@components/btns/ButtonHeader';
import PatientHeaderBackground from '@screens/app/patient/navigation/PatientHeaderBackground';
import DoctorsTabNav from '@screens/app/patient/doctors/DoctorsTabNav';
import SvgSearch from '@assets/svgs/SvgSearch';
import SvgMenu from '@assets/svgs/SvgMenu';

const Stack = createStackNavigator();

const DoctorsStackNav = memo(() => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true }}>
      <Stack.Screen
        name={ROUTES.Doctors}
        component={DoctorsTabNav}
        options={({ navigation }) => ({
          headerTitle: () => <HeaderTitle title={'Doctors'} />,
          headerLeft: () => (
            <ButtonHeader
              onPress={() => navigation.openDrawer()}
              children={<SvgMenu />}
            />
          ),
          headerRight: () => <ButtonHeader children={<SvgSearch />} />,
          headerBackground: () => <PatientHeaderBackground />,
        })}
      />
    </Stack.Navigator>
  );
});

export default DoctorsStackNav;
