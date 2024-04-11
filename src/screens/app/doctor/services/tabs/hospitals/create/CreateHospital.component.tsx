import React, { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  CreateOrganizationWithAdminDTO,
  HOSPITAL_TYPES,
  IPractitioner,
  IProfileCredential,
  ORGANISATION_SIZE,
  WizzardScreen,
} from '../../../../../../../utils/domainEntities';
import { validatePhoneNumber } from '../../../../../../../utils/validations/FormValidations';
import GenericWizzard from '@screens/app/common/wizzard/genericWizzard.component';
import { useTranslation, withTranslation } from 'react-i18next';
import ROUTES from '../../../../../../../utils/routes';
import HospitalGeneralDetails from '@screens/app/doctor/services/tabs/hospitals/create/generalDetails';
import HospitalAdministrator from '@screens/app/doctor/services/tabs/hospitals/create/administrator';
import WizzardAddressInput from '@screens/app/common/address/WizzardAddressInput';

interface Props {
  practitioner: IPractitioner;

  educationItems: IProfileCredential[];
  certificatesItems: IProfileCredential[];

  updateSuccess: boolean;
  loading: boolean;
  loadingCrud: boolean;
  error: string;

  updatePractitionerPersonalDetails: any;
  updatePractitionerProfession: any;
  updatePractitionerEducation: any;
  createOrganisation: any;
}

const CreateHospitalComponent = (props: Props) => {
  const { t } = useTranslation();
  const { practitioner, createOrganisation } = props;
  const [currentScreen, setCurrentScreen] = useState(0);
  const [screens, setScreens] = useState<WizzardScreen[]>([]);
  const navigation = useNavigation();

  const [data, setData] = useState({
    name: null,
    type: HOSPITAL_TYPES[0],
    size: ORGANISATION_SIZE[0],
    medicalField: null,
    email: '',
    phoneNumber: '',

    address: null,

    administratorFirstName: '',
    administratorLastname: '',
    administratorEmail: '',
    administratorPhoneNumber: '',

    practitioner: practitioner,
  });

  const fillScreens = useMemo(() => {
    if (screens && screens.length == 0) {
      let commonTitle = t('account:hospital:onboard');
      // -------------- SCREEN 1 ----------------
      let screen1: WizzardScreen = {
        title: commonTitle,
        getContent: (crtData: any, setCrtData: any) => {
          return (
            <HospitalGeneralDetails
              data={crtData}
              setData={setCrtData}
              currentStep={1}
              stepLength={4}
            />
          );
        },
        validate: (crtData: any) => {
          return (
            !!crtData &&
            !!crtData.name &&
            !!crtData.email &&
            !!crtData.type &&
            !!crtData.size &&
            !!crtData.medicalField?.label &&
            validatePhoneNumber(crtData.phoneNumber, false)
          );
        },
        onSave: (crtData: any) => {
          return true;
        },
        headerRight: null,
      };
      screens.push(screen1);

      // -------------- SCREEN 2 ----------------
      let screen2: WizzardScreen = {
        title: commonTitle,
        getContent: (crtData: any, setCrtData: any) => {
          return (
            <WizzardAddressInput
              data={crtData}
              setData={setCrtData}
              currentStep={2}
              stepLength={4}
            />
          );
        },
        validate: (crtData: any) => {
          return !!crtData && !!crtData.address;
        },
        onSave: (crtData: any) => {
          return true;
        },
        headerRight: null,
      };
      screens.push(screen2);

      // -------------- SCREEN 3 ----------------
      let screen3: WizzardScreen = {
        title: commonTitle,
        getContent: (crtData: any, setCrtData: any) => {
          return (
            <HospitalAdministrator
              data={crtData}
              setData={setCrtData}
              currentStep={3}
              stepLength={4}
            />
          );
        },
        validate: (crtData: any) => {
          return (
            !!crtData &&
            !!crtData.administratorFirstName &&
            !!crtData.administratorLastname &&
            !!crtData.administratorEmail &&
            validatePhoneNumber(crtData.administratorPhoneNumber, false)
          );
        },
        onSave: (crtData: any) => {
          if (crtData) {
            let toCreate: CreateOrganizationWithAdminDTO = {
              name: crtData?.name,
              type: crtData?.type?.value || crtData?.type,
              orgSize: crtData?.size?.value || crtData?.size,
              email: crtData?.email,
              phoneNumber: crtData?.phoneNumber,
              qualificationMedicalFieldId: crtData?.medicalField?.id,

              street: crtData?.address?.street,
              additionalDetails: crtData?.address?.additionalDetails,
              city: crtData?.address?.city,
              postalCode: crtData?.address?.postalCode,
              state: crtData?.address?.state,
              country: crtData?.address?.country,

              administratorFirstName: crtData?.administratorFirstName,
              administratorLastname: crtData?.administratorLastname,
              administratorEmail: crtData?.administratorEmail,
              administratorPhoneNumber: crtData?.administratorPhoneNumber,
            };
            createOrganisation(toCreate);
          }
          return true;
        },
        headerRight: null,
      };
      screens.push(screen3);
    }
  }, [currentScreen, data, screens]);

  return (
    <GenericWizzard
      data={data}
      setData={setData}
      wizzardIdentifier={'createHospitalByPractitioner'}
      screens={screens}
      onEndWizzardSave={() => {
        console.log('Time to save now');
      }}
      onEndWizzardNavigateTo={() => {
        navigation.navigate(ROUTES.Doctor_BottomTab);
      }}
      updateSuccess={props.updateSuccess}
      loading={props.loadingCrud}
      error={props.error}
    />
  );
};

export default CreateHospitalComponent;
