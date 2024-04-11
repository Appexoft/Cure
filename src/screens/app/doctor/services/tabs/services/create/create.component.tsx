import React, { memo, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HospitalList from './wizzardScreens/hospitals/index';
import ChooseProfessions from './wizzardScreens/professions';
import ServiceDetails from './wizzardScreens/serviceDetails/ServiceDetails';
import ServiceReview from './wizzardScreens/review/ServiceReview';
import { useNavigation } from '@react-navigation/native';
import {
  ICodeableConcept,
  IOrganization,
  IPractitioner,
  IPractitionerRole,
  WizzardScreen,
} from '../../../../../../../utils/domainEntities';
import GenericWizzard from '@screens/app/common/wizzard/genericWizzard.component';
import ROUTES from '../../../../../../../utils/routes';
import ServiceMedia from '@screens/app/doctor/services/tabs/services/create/wizzardScreens/media/ServiceMedia';

const screenTypes = [
  'personalDetails',
  'profession',
  'education',
  'certificates',
  'identity',
];

interface Props {
  practitioner: IPractitioner;
  practitionerRole: IPractitionerRole;

  fetchServicesOfPractitioner: any;
  createPractitionerRole: any;

  updateSuccess: boolean;
  loadingCrud: boolean;
  loading: boolean;
  error: string;
}

export const CreatePractitionerRole = memo((props: Props) => {
  const { t } = useTranslation();

  const {
    practitioner,
    practitionerRole,
    fetchServicesOfPractitioner,
    createPractitionerRole,
    updateSuccess,
    loadingCrud,
    loading,
    error,
  } = props;
  const navigation = useNavigation();

  const [currentScreen, setCurrentScreen] = useState<number>(0);
  const [screens, setScreens] = useState<WizzardScreen[]>([]);

  const [data, setData] = useState({
    name: null,
    description: null,
    priceValue: null,
    priceCurrency: null,
    durationInMin: 60,
    medicalField: null,
    medicalSubField: null,
    photos: [],
    certificates: [],
    identityProof: [],
    practitioner: practitioner,
    hospital: null,
  });

  useEffect(() => {
    if (practitioner && practitioner.id) {
      fetchServicesOfPractitioner(practitioner?.id);
    }
  }, [practitioner, updateSuccess]);

  console.log('CreatePractitionerRole-practitionerRole', practitionerRole);

  const fillScreens = useMemo(() => {
    if (screens && screens.length == 0) {
      let commonTitle = t('account:doctor:createService');
      // -------------- SCREEN 1 ----------------
      let screen1: WizzardScreen = {
        title: commonTitle,
        getContent: (crtData: any, setCrtData: any) => {
          return (
            <HospitalList
              selectedHospital={crtData.hospital}
              setSelectedHospital={(crt: IOrganization) => {
                setCrtData({
                  ...crtData,
                  hospital: crt,
                });
              }}
              currentStep={0}
              stepLength={4}
              navigation={navigation}
            />
          );
        },
        validate: (crtData: any) => {
          return crtData.hospital && crtData.hospital?.id;
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
            <ChooseProfessions
              selectedCategory={crtData.medicalField}
              setSelectedCategory={(crt: ICodeableConcept) => {
                setCrtData({
                  ...crtData,
                  medicalField: crt,
                });
              }}
              selectedSubCategory={crtData.medicalSubField}
              setSelectedSubCategory={(crt: ICodeableConcept) => {
                setCrtData({
                  ...crtData,
                  medicalSubField: crt,
                  name: crt?.obj?.display1,
                });
              }}
              currentStep={1}
              stepLength={4}
            />
          );
        },
        validate: (crtData: any) => {
          return !!crtData?.medicalField && !!crtData?.medicalSubField;
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
            <ServiceDetails
              data={crtData}
              setData={setCrtData}
              stepLength={screenTypes.length}
              currentStep={2}
            />
          );
        },
        validate: (crtData: any) => {
          return (
            crtData?.name &&
            crtData?.description &&
            crtData?.priceValue &&
            crtData?.priceCurrency &&
            crtData?.durationInMin
          );
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
            <ServiceMedia
              data={crtData}
              setData={setCrtData}
              stepLength={screenTypes.length}
              currentStep={3}
            />
          );
        },
        validate: (crtData: any) => {
          return crtData.photos && crtData.photos.length > 0;
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
            <ServiceReview
              data={crtData}
              setData={setCrtData}
              stepLength={screenTypes.length}
              currentStep={4}
            />
          );
        },
        validate: (crtData: any) => {
          return true; // todo fix this!!
        },
        onSave: (crtData: any) => {
          console.log('Final save!!');
          createPractitionerRole({
            name: crtData?.name,
            active: true,
            description: crtData?.description,
            priceValue: crtData?.priceValue,
            priceCurrency: crtData?.priceCurrency,
            durationInMin: crtData?.durationInMin,
            medicalField: crtData?.medicalField?.obj,
            medicalSubField: crtData?.medicalSubField?.obj,
            medicalSubSubField: null,
            photos: crtData?.photos,
            // startPeriod: data?.startPeriod,
            // endPeriod: data?.endPeriod,
            practitionerId: crtData?.practitioner?.id,
            organisationId: crtData?.hospital?.id,
          });
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
      wizzardIdentifier={'CreatePractitionerRole'}
      screens={screens}
      onEndWizzardSave={() => {
        console.log('Time to save now');
      }}
      onEndWizzardNavigateTo={() => {
        if (practitioner && practitioner.id) {
          fetchServicesOfPractitioner(practitioner?.id);
        }
        navigation.navigate(ROUTES.Doctor_Services);
      }}
      loading={loadingCrud}
      updateSuccess={
        updateSuccess && !!practitionerRole && !!practitionerRole.id
      }
      error={error}
    />
  );
});

export default CreatePractitionerRole;
