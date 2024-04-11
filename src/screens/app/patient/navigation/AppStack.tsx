import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '../../../../utils/routes';
import HeaderTitle from '@components/HeaderTittle';
import ButtonHeader from '@components/btns/ButtonHeader';
import PatientHeaderBackground from '@screens/app/patient/navigation/PatientHeaderBackground';
import HomePage from '@screens/app/patient/home';
import DoctorDetailComponent from '@screens/app/patient/detail/doctor/index';
import SvgHealing from '@assets/svgs/SvgHealing';
import Loading from '@screens/app/common/loading';
import PatientBottomTabNav from '@screens/app/patient/navigation/PatientBottomTabNav';
import AddReviewScreen from '@screens/app/common/review/addReviewScreen/AddReviewScreen';

import ApplyAsOrg_Intro from '@screens/app/hospital/apply';
import ApplyAsOrg_Wizzard from '@screens/app/hospital/apply/wizzard';
import ApplyAsOrg_Details from '@screens/app/hospital/apply/2_OrgDetails';
import ApplyAsOrg_Address from '@screens/app/hospital/apply/3_Address';
import ApplyAsOrg_Services from '@screens/app/hospital/apply/4_Services';
import ApplyAsOrg_InviteOthers from '@screens/app/hospital/apply/5_InviteOthers';
import { useTranslation } from 'react-i18next';
import SearchFiltersComponent from '@screens/app/patient/search/filters/index';
import { Color } from '../../../../utils/GlobalStyles';
import CreateAppointment from '@screens/app/patient/appointments/createAppointment';
import ChangePassword from '../account/ChangePassword';
import FaqInfo from '../account/FaqInfo';
import About from '../account/About';
import DoctorBottomTabNav from '@screens/app/doctor/navigation/DoctorBottomTabNav';
import HospitalBottomTabNav from '@screens/app/hospital/navigation/HospitalBottomTabNav';
import HospitalHeaderBackground from '@screens/app/hospital/navigation/HospitalHeaderBackground';
import Settings from '../account/Settings';
import PersonalInformation from '../account/PersonalInformation';
import EditPersonalInformation from '../account/PersonalInformation/EditPersonalInformation';
import EditAdressInformation from '../account/PersonalInformation/EditAdressInformation';
import CreateDoctorAccount from '@screens/app/doctor/onboarding/createAccount';
import DoctorServiceWizzard from '@screens/app/doctor/services/tabs/services/create';
import CreateHospitalComponent from '@screens/app/doctor/services/tabs/hospitals/create/index';
import useAuth from '@screens/auth/authContext/useAuth';
import { InterfaceType } from '../../../../utils/entityUtils';

const Stack = createStackNavigator();

const AppStack = memo(() => {
  const { crtInterface, setCrtInterface } = useAuth();
  const { t } = useTranslation();
  const getRouteForCrtInterface = () => {
    console.log('Redirecting to correct stack:', crtInterface);
    if (crtInterface === InterfaceType.PATIENT) {
      return ROUTES.Patient_BottomTab;
    }
    if (crtInterface === InterfaceType.DOCTOR) {
      return ROUTES.Doctor_BottomTab;
    }
    if (crtInterface === InterfaceType.HOSPITAL) {
      return ROUTES.Hospital_BottomTab;
    }
    // default one
    setCrtInterface(InterfaceType.PATIENT);
    return ROUTES.Patient_BottomTab;
  };

  return (
    <Stack.Navigator initialRouteName={getRouteForCrtInterface()}>
      {/* Common section */}
      <Stack.Screen
        name={ROUTES.Loading}
        component={Loading}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.AddReview}
        component={AddReviewScreen}
        options={({}) => ({
          headerShown: true,
          headerTitle: () => <HeaderTitle title={t('common:addReview')} />,
          headerLeft: () => <ButtonHeader left={true} />,
          headerBackground: () => <PatientHeaderBackground />,
        })}
      />

      {/* Patient section */}
      <Stack.Screen
        name={ROUTES.Patient_BottomTab}
        component={PatientBottomTabNav}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={ROUTES.Patient_HomePage}
        component={HomePage}
        options={({}) => ({
          headerTitle: () => (
            <HeaderTitle children={<SvgHealing color={Color.white} />} />
          ),
          headerBackground: () => <PatientHeaderBackground />,
        })}
      />
      <Stack.Screen
        name={ROUTES.Patient_Personal_Information}
        component={PersonalInformation}
        options={({ navigation }) => ({
          headerTitle: () => (
            <HeaderTitle title={t('auth:personalInformationLabel')} />
          ),
          headerLeft: () => <ButtonHeader left={true} />,
          headerBackground: () => <PatientHeaderBackground />,
        })}
      />
      <Stack.Screen
        name={ROUTES.Patient_Personal_Information_Edit}
        component={EditPersonalInformation}
        options={({ navigation }) => ({
          headerTitle: () => (
            <HeaderTitle title={t('auth:personalInformationLabelEdit')} />
          ),
          headerLeft: () => <ButtonHeader left={true} />,
          headerBackground: () => <PatientHeaderBackground />,
        })}
      />
      <Stack.Screen
        name={ROUTES.Doctor_Onboarding}
        component={CreateDoctorAccount}
        options={({ navigation }) => {
          console.log(navigation);
          return {
            headerTitle: () => (
              <HeaderTitle title={t('account:doctor:onboardAsDoctor')} />
            ),
            headerLeft: () => <ButtonHeader left={true} />,
            headerBackground: () => <PatientHeaderBackground />,
          };
        }}
      />
      <Stack.Screen
        name={ROUTES.Patient_Address_Information_Edit}
        component={EditAdressInformation}
        options={({ navigation }) => ({
          headerTitle: () => (
            <HeaderTitle title={t('auth:personalInformationLabelEdit')} />
          ),
          headerLeft: () => <ButtonHeader left={true} />,
          headerBackground: () => <PatientHeaderBackground />,
        })}
      />
      <Stack.Screen
        name={ROUTES.Patient_Settings}
        component={Settings}
        options={({ navigation }) => ({
          headerTitle: () => <HeaderTitle title={t('auth:settings')} />,
          headerLeft: () => <ButtonHeader left={true} />,
          headerBackground: () => <PatientHeaderBackground />,
        })}
      />
      <Stack.Screen
        name={ROUTES.Patient_Change_Password}
        component={ChangePassword}
        options={({ navigation }) => ({
          headerTitle: () => (
            <HeaderTitle title={t('auth:changePasswordLabel')} />
          ),
          headerLeft: () => <ButtonHeader left={true} />,
          headerBackground: () => <PatientHeaderBackground />,
        })}
      />
      <Stack.Screen
        name={ROUTES.Faq_Info}
        component={FaqInfo}
        options={({ navigation }) => ({
          headerTitle: () => (
            <HeaderTitle
              textStyle={{ textTransform: 'uppercase' }}
              title={t('account:menu:faq')}
            />
          ),
          headerLeft: () => <ButtonHeader left={true} />,
          headerBackground: () => <PatientHeaderBackground />,
        })}
      />
      <Stack.Screen
        name={ROUTES.About}
        component={About}
        options={({ navigation }) => ({
          headerTitle: () => <HeaderTitle title={t('account:menu:about')} />,
          headerLeft: () => <ButtonHeader left={true} />,
          headerBackground: () => <PatientHeaderBackground />,
        })}
      />

      <Stack.Screen
        name={ROUTES.Patient_SearchFilters}
        component={SearchFiltersComponent}
        options={() => ({
          headerShown: true,
          headerTitle: () => <HeaderTitle title={t('search:filters:title')} />,
          headerLeft: () => <ButtonHeader left={true} />,
          headerBackground: () => <PatientHeaderBackground />,
        })}
      />

      <Stack.Screen
        name={ROUTES.Patient_Appointments_Create}
        component={CreateAppointment}
        options={{
          headerTitle: () => (
            <HeaderTitle title={t('patient:appointments:create')} />
          ),
          headerLeft: () => <ButtonHeader />,
          headerBackground: () => <PatientHeaderBackground />,
        }}
      />

      {/* Detail section */}

      <Stack.Screen
        name={ROUTES.Patient_Detail_Doctor}
        component={DoctorDetailComponent}
        options={({}) => ({
          headerTitle: () => <HeaderTitle title={t('detail:doctor')} />,
          headerLeft: () => <ButtonHeader left={true} />,
          headerBackground: () => <PatientHeaderBackground />,
        })}
      />

      {/* Doctor section */}

      <Stack.Screen
        name={ROUTES.Doctor_BottomTab}
        component={DoctorBottomTabNav}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={ROUTES.Doctor_Services_Wizzard}
        component={DoctorServiceWizzard}
        options={({ navigation }) => ({
          headerTitle: () => (
            <HeaderTitle title={t('account:menu:createDoctorService')} />
          ),
          headerLeft: () => <ButtonHeader left={true} />,
        })}
      />
      <Stack.Screen
        name={ROUTES.Doctor_Services_Create_Work_Location}
        component={CreateHospitalComponent}
        options={{
          headerTitle: () => (
            <HeaderTitle title={t('common:createWorkLocation')} />
          ),
          headerLeft: () => <ButtonHeader left={true} />,
          headerBackground: () => <PatientHeaderBackground />,
        }}
      />

      {/*  Hospital Section */}

      <Stack.Screen
        name={ROUTES.Hospital_BottomTab}
        component={HospitalBottomTabNav}
        options={{
          headerShown: false,
          headerBackground: () => <HospitalHeaderBackground />,
        }}
      />

      {/*  Apply as organisation */}
      <Stack.Screen
        name={ROUTES.ApplyAsOrg_Intro}
        component={ApplyAsOrg_Intro}
        options={{
          headerShown: true,
          headerTitle: () => (
            <HeaderTitle title={t('header:applyAsOrg:intro')} />
          ),
          headerLeft: () => <ButtonHeader left={true} />,
          headerBackground: () => <PatientHeaderBackground />,
        }}
      />

      <Stack.Screen
        name={ROUTES.ApplyAsOrg_Wizzard}
        component={ApplyAsOrg_Wizzard}
        options={{
          headerShown: true,
          headerTitle: () => (
            <HeaderTitle title={t('header:applyAsOrg:intro')} />
          ),
          headerLeft: () => <ButtonHeader left={true} />,
          headerBackground: () => <PatientHeaderBackground />,
        }}
      />

      <Stack.Screen
        name={ROUTES.ApplyAsOrg_Details}
        component={ApplyAsOrg_Details}
        options={{
          headerTitle: () => (
            <HeaderTitle title={t('header:applyAsOrg:details')} />
          ),
          headerLeft: () => <ButtonHeader left={true} />,
          headerBackground: () => <PatientHeaderBackground />,
        }}
      />

      <Stack.Screen
        name={ROUTES.ApplyAsOrg_Address}
        component={ApplyAsOrg_Address}
        options={{
          headerTitle: () => (
            <HeaderTitle title={t('header:applyAsOrg:type')} />
          ),
          headerLeft: () => <ButtonHeader left={true} />,
          headerBackground: () => <PatientHeaderBackground />,
        }}
      />

      <Stack.Screen
        name={ROUTES.ApplyAsOrg_Services}
        component={ApplyAsOrg_Services}
        options={{
          headerTitle: () => (
            <HeaderTitle title={t('header:applyAsOrg:services')} />
          ),
          headerLeft: () => <ButtonHeader left={true} />,
          headerBackground: () => <PatientHeaderBackground />,
        }}
      />

      <Stack.Screen
        name={ROUTES.ApplyAsOrg_InviteOthers}
        component={ApplyAsOrg_InviteOthers}
        options={{
          headerTitle: () => (
            <HeaderTitle title={t('header:applyAsOrg:inviteOthers')} />
          ),
          headerLeft: () => <ButtonHeader left={true} />,
          headerBackground: () => <PatientHeaderBackground />,
        }}
      />
    </Stack.Navigator>
  );
});

export default AppStack;
