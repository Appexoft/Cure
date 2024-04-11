import React, { useEffect, useMemo, useState } from 'react';
import DoctorPersonalDetail from './personalDetails';
import DoctorProfession from './profession';
import DoctorEducation from './education';
import DoctorCertificates from './certificates';
import IdentityProof from './identity';
import useAuth from '@screens/auth/authContext/useAuth';
import { useNavigation } from '@react-navigation/native';
import {
  Gender,
  ICodeableConcept,
  IPractitioner,
  IProfileCredential,
  NAME_PREFIXES,
  UpdatePractitionerProfessionDto,
  WizzardScreen,
} from '../../../../../utils/domainEntities';
import { validatePhoneNumber } from '../../../../../utils/validations/FormValidations';
import GenericWizzard from '@screens/app/common/wizzard/genericWizzard.component';
import { useTranslation } from 'react-i18next';
import ROUTES from '../../../../../utils/routes';
import ServiceMedia from '@screens/app/doctor/onboarding/createAccount/media/ServiceMedia';

interface Props {
  practitioner: IPractitioner;

  educationItems: IProfileCredential[];
  certificatesItems: IProfileCredential[];

  updateSuccess: boolean;
  loading: boolean;
  error: string;

  updatePractitionerPersonalDetails: any;
  updatePractitionerProfession: any;
  updatePractitionerEducation: any;
}

const CreateDoctorAccount = (props: Props) => {
  const { setOptions } = useNavigation();
  const { t } = useTranslation();

  const {
    practitioner,
    updatePractitionerPersonalDetails,
    updatePractitionerProfession,
    updatePractitionerEducation,
  } = props;
  const { userEntity, handleUpdatePractitioners } = useAuth();

  const [currentScreen, setCurrentScreen] = useState(0);
  const [screens, setScreens] = useState<WizzardScreen[]>([]);

  const navigation = useNavigation();

  const [data, setData] = useState({
    personalDetails: {
      prefix: NAME_PREFIXES[0],
      firstName: userEntity?.firstName,
      middleName: null,
      lastName: userEntity?.lastName,
      gemder: userEntity?.gender || Gender.MALE,
      email: userEntity?.email,
      phoneNumber: userEntity?.phoneNumber,
      yearsOfExperience: 1,
      gender: userEntity?.gender,
      preferredLanguage: {
        value: 'en_US',
        label: 'English',
        country: 'United States ',
        description: 'US English',
      },
      description: null,
    },
    middleName: null,
    profession: {},
    education: [],
    certificates: [],
    identityProof: [],
    photos: [],
    practitioner: practitioner,
  });

  useEffect(() => {
    if (practitioner && practitioner.id && !data.practitioner && !data.practitioner?.id) {
      setData({
        ...data,
        practitioner: practitioner,
      });
    }
  }, [data, practitioner]);

  const fillScreens = useMemo(() => {
    if (screens && screens.length == 0) {
      let commonTitle = t('account:doctor:onboardAsDoctor');
      // -------------- SCREEN 1 ----------------
      let screen1: WizzardScreen = {
        title: commonTitle,
        getContent: (crtData: any, setCrtData: any) => {
          return (
            <DoctorPersonalDetail
              data={crtData}
              setData={setCrtData}
              currentStep={1}
              stepLength={5}
            />
          );
        },
        validate: (crtData: any) => {
          return (
            !!crtData &&
            !!crtData?.personalDetails.prefix &&
            !!crtData?.personalDetails.firstName &&
            !!crtData?.personalDetails.lastName &&
            !!crtData?.personalDetails.email &&
            !!crtData?.personalDetails.phoneNumber &&
            !!crtData?.personalDetails.yearsOfExperience &&
            !!crtData?.personalDetails.gender &&
            validatePhoneNumber(crtData?.personalDetails.phoneNumber, false) &&
            !!crtData?.personalDetails.description
          );
        },
        onSave: (crtData: any) => {
          console.log('Create practitioner', crtData);
          if (crtData) {
            updatePractitionerPersonalDetails({
              userId: userEntity?.id,
              nameFamily: crtData?.personalDetails?.lastName,
              nameGiven: crtData?.personalDetails?.firstName,
              namePrefix: crtData?.personalDetails?.prefix?.value,
              email1: crtData?.personalDetails?.email,
              birthDate: userEntity?.birthDate || new Date(), 
              phoneNumber1: crtData?.personalDetails.phoneNumber,
              phoneNumber2: userEntity?.phoneNumber,
              yearsExperience: crtData?.personalDetails?.yearsOfExperience,
              description: crtData?.personalDetails?.description,
              preferredLanguage:
                crtData?.personalDetails?.preferredLanguage?.value,
              languages: crtData?.personalDetails?.preferredLanguage?.value
                ? [crtData?.personalDetails?.preferredLanguage?.value]
                : [],
            });
          }
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
            <DoctorProfession
              currentStep={2}
              stepLength={5}
              selected={crtData.profession}
              setSelected={(crt: ICodeableConcept) => {
                setCrtData({
                  ...crtData,
                  profession: crt,
                });
              }}
            />
          );
        },
        validate: (crtData: any) => {
          return crtData.profession && crtData.profession.id;
        },
        onSave: (crtData: any) => {
          if (crtData.profession && crtData.profession.id) {
            let updateData: UpdatePractitionerProfessionDto = {
              userId: userEntity?.id,
              practitionerId: crtData?.practitioner?.id,
              medicalFieldId: crtData.profession.id,
              medicalSubFieldIds: [],
            };
            updatePractitionerProfession(updateData);
            return true;
          }
          return false;
        },
        headerRight: null,
      };
      screens.push(screen2);

      // -------------- SCREEN 3 ----------------
      let screen3: WizzardScreen = {
        title: commonTitle,
        getContent: (crtData: any, setCrtData: any) => {
          return (
            <DoctorEducation
              currentStep={3}
              stepLength={5}
              data={crtData}
              setData={setCrtData}
            />
          );
        },
        validate: (crtData: any) => {
          return true; // optional
        },
        onSave: (crtData: any) => {
          return true;
        },
        headerRight: null,
      };
      screens.push(screen3);

      // -------------- SCREEN 4 ----------------
      let screen4: WizzardScreen = {
        title: commonTitle,
        getContent: (crtData: any, setCrtData: any) => {
          return (
            <DoctorCertificates
              currentStep={4}
              stepLength={5}
              data={crtData}
              setData={setCrtData}
            />
          );
        },
        validate: (crtData: any) => {
          return true; // optional
        },
        onSave: (crtData: any) => {
          return true;
        },
        headerRight: null,
      };
      screens.push(screen4);

      // -------------- SCREEN 5 ----------------
      let screen5: WizzardScreen = {
        title: commonTitle,
        getContent: (crtData: any, setCrtData: any) => {
          return (
            <IdentityProof
              currentStep={5}
              stepLength={5}
              data={crtData}
              setData={(crt: ICodeableConcept) => {
                setCrtData(crt);
              }}
            />
          );
        },
        validate: (crtData: any) => {
          return crtData; // optional
        },
        onSave: (crtData: any) => {
          return true;
        },
        headerRight: null,
      };
      screens.push(screen5);
    }
  }, [currentScreen, data, screens]);

  return (
    <GenericWizzard
      data={data}
      setData={setData}
      wizzardIdentifier={'onboardPractitioner'}
      screens={screens}
      onEndWizzardSave={() => {
        console.log('Time to save now');
      }}
      onEndWizzardNavigateTo={() => {
        navigation.navigate(ROUTES.Doctor_BottomTab);
      }}
    />
  );
};

export default CreateDoctorAccount;
