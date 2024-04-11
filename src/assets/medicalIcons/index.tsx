import React, { lazy, Suspense } from 'react';
import Loading from '@screens/app/common/loading';

export const getMedicalSvg = (name: string) => {
  return getIcon(name);
};

export const getIcon = (name: string) => {
  let Comp;
  switch (name) {
    case 'BloodAP':
      Comp = React.memo(lazy(() => import('@assets/medicalIcons/svg/BloodAP')));
      break;
    case 'BloodAN':
      Comp = React.memo(lazy(() => import('@assets/medicalIcons/svg/BloodAN')));
      break;
    case 'FamilySperm':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/FamilySperm')),
      );
      break;
    case 'SymbolsAlertCircle':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsAlertCircle')),
      );
      break;
    case 'MedicationsBlisterPillsOvalX1':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/MedicationsBlisterPillsOvalX1'),
        ),
      );
      break;
    case 'SymbolsAlertTriangle':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsAlertTriangle')),
      );
      break;
    case 'BloodAbN':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BloodAbN')),
      );
      break;
    case 'MedicationsBlisterPillsOvalX14':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/MedicationsBlisterPillsOvalX14'),
        ),
      );
      break;
    case 'SymbolsAnimalChicken':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsAnimalChicken')),
      );
      break;
    case 'BloodAbP':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BloodAbP')),
      );
      break;
    case 'MedicationsBlisterPillsOvalX16':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/MedicationsBlisterPillsOvalX16'),
        ),
      );
      break;
    case 'SymbolsAnimalCow':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsAnimalCow')),
      );
      break;
    case 'BloodBN':
      Comp = React.memo(lazy(() => import('@assets/medicalIcons/svg/BloodBN')));
      break;
    case 'MedicationsBlisterPillsOvalX4':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/MedicationsBlisterPillsOvalX4'),
        ),
      );
      break;
    case 'SymbolsAnimalDonkey':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsAnimalDonkey')),
      );
      break;
    case 'BloodBP':
      Comp = React.memo(lazy(() => import('@assets/medicalIcons/svg/BloodBP')));
      break;
    case 'MedicationsBlisterPillsRoundX1':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/MedicationsBlisterPillsRoundX1'),
        ),
      );
      break;
    case 'SymbolsAnimalSpider':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsAnimalSpider')),
      );
      break;
    case 'BloodBag':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BloodBag')),
      );
      break;
    case 'MedicationsBlisterPillsRoundX14':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/MedicationsBlisterPillsRoundX14'),
        ),
      );
      break;
    case 'SymbolsAnimalTick':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsAnimalTick')),
      );
      break;
    case 'MedicationsBlisterPillsRoundX16':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/MedicationsBlisterPillsRoundX16'),
        ),
      );
      break;
    case 'SymbolsAssemblyPoint':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsAssemblyPoint')),
      );
      break;
    case 'BloodOP':
      Comp = React.memo(lazy(() => import('@assets/medicalIcons/svg/BloodOP')));
      break;
    case 'MedicationsBlisterPillsRoundX4':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/MedicationsBlisterPillsRoundX4'),
        ),
      );
      break;
    case 'SymbolsAwardRibbon':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsAwardRibbon')),
      );
      break;
    case 'BloodRhN':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BloodRhN')),
      );
      break;
    case 'MedicationsMedicines':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/MedicationsMedicines')),
      );
      break;
    case 'SymbolsAwardTrophy':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsAwardTrophy')),
      );
      break;
    case 'SymbolsBook':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsBook')),
      );
      break;
    case 'MedicationsPill1':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/MedicationsPill1')),
      );
      break;
    case 'BloodRhP':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BloodRhP')),
      );
      break;
    case 'SymbolsBreedingSites':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsBreedingSites')),
      );
      break;
    case 'MedicationsPills2':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/MedicationsPills2')),
      );
      break;
    case 'BodyArm':
      Comp = React.memo(lazy(() => import('@assets/medicalIcons/svg/BodyArm')));
      break;
    case 'MedicationsPills3':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/MedicationsPills3')),
      );
      break;
    case 'SymbolsCalendarQuarantine':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/SymbolsCalendarQuarantine'),
        ),
      );
      break;
    case 'SymbolsCalendar':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsCalendar')),
      );
      break;
    case 'BodyBacteria':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyBacteria')),
      );
      break;
    case 'MedicationsPills4':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/MedicationsPills4')),
      );
      break;
    case 'BodyBladder':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyBladder')),
      );
      break;
    case 'SymbolsCannabis':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsCannabis')),
      );
      break;
    case 'BodyBloodCells':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyBloodCells')),
      );
      break;
    case 'ObjectsBandageAdhesive':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ObjectsBandageAdhesive')),
      );
      break;
    case 'SymbolsCardiogram':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsCardiogram')),
      );
      break;
    case 'BodyBloodDrop':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyBloodDrop')),
      );
      break;
    case 'ObjectsBills':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ObjectsBills')),
      );
      break;
    case 'BodyBloodVessel':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyBloodVessel')),
      );
      break;
    case 'ObjectsCleaning':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ObjectsCleaning')),
      );
      break;
    case 'SymbolsCardiogramE':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsCardiogramE')),
      );
      break;
    case 'BodyBody':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyBody')),
      );
      break;
    case 'BodyDna':
      Comp = React.memo(lazy(() => import('@assets/medicalIcons/svg/BodyDna')));
      break;
    case 'ObjectsCoins':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ObjectsCoins')),
      );
      break;
    case 'SymbolsChartBar':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsChartBar')),
      );
      break;
    case 'BodyEar':
      Comp = React.memo(lazy(() => import('@assets/medicalIcons/svg/BodyEar')));
      break;
    case 'ObjectsConstruction':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ObjectsConstruction')),
      );
      break;
    case 'BodyEnzyme':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyEnzyme')),
      );
      break;
    case 'SymbolsChartBarStacked':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsChartBarStacked')),
      );
      break;
    case 'ObjectsCreditCard':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ObjectsCreditCard')),
      );
      break;
    case 'SymbolsChartCuredDecreasing':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/SymbolsChartCuredDecreasing'),
        ),
      );
      break;
    case 'SymbolsChartCuredIncreasing':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/SymbolsChartCuredIncreasing'),
        ),
      );
      break;
    case 'ObjectsDesktopApp':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ObjectsDesktopApp')),
      );
      break;
    case 'ObjectsHotMeal':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ObjectsHotMeal')),
      );
      break;
    case 'SymbolsChartDeathRateDecreasing':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/SymbolsChartDeathRateDecreasing'),
        ),
      );
      break;
    case 'BodyEye':
      Comp = React.memo(lazy(() => import('@assets/medicalIcons/svg/BodyEye')));
      break;
    case 'ObjectsIUtensils':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ObjectsIUtensils')),
      );
      break;
    case 'SymbolsChartDeathRateIncreasing':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/SymbolsChartDeathRateIncreasing'),
        ),
      );
      break;
    case 'BodyFemaleReproductiveSystem':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/BodyFemaleReproductiveSystem'),
        ),
      );
      break;
    case 'BodyFoot':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyFoot')),
      );
      break;
    case 'ObjectsJustice':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ObjectsJustice')),
      );
      break;
    case 'SymbolsChartDeathRateStable':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/SymbolsChartDeathRateStable'),
        ),
      );
      break;
    case 'BodyGallbladder':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyGallbladder')),
      );
      break;
    case 'ObjectsMoneyBag':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ObjectsMoneyBag')),
      );
      break;
    case 'SymbolsChartInfectedDecreasing':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/SymbolsChartInfectedDecreasing'),
        ),
      );
      break;
    case 'BodyHeart':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyHeart')),
      );
      break;
    case 'ObjectsPhone':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ObjectsPhone')),
      );
      break;
    case 'SymbolsChartInfectedIncreasing':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/SymbolsChartInfectedIncreasing'),
        ),
      );
      break;
    case 'BodyIntestine':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyIntestine')),
      );
      break;
    case 'SymbolsChartInfectedStable':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/SymbolsChartInfectedStable'),
        ),
      );
      break;
    case 'ObjectsRdtResultOutStock':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ObjectsRdtResultOutStock')),
      );
      break;
    case 'BodyJoints':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyJoints')),
      );
      break;
    case 'ObjectsRunningWater':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ObjectsRunningWater')),
      );
      break;
    case 'SymbolsChartLine':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsChartLine')),
      );
      break;
    case 'SymbolsChartLineStacked':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsChartLineStacked')),
      );
      break;
    case 'ObjectsSpreadsheets':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ObjectsSpreadsheets')),
      );
      break;
    case 'BodyKidneys':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyKidneys')),
      );
      break;
    case 'ObjectsStockOut':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ObjectsStockOut')),
      );
      break;
    case 'SymbolsChartPie':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsChartPie')),
      );
      break;
    case 'BodyLeg':
      Comp = React.memo(lazy(() => import('@assets/medicalIcons/svg/BodyLeg')));
      break;
    case 'ObjectsUmbrella':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ObjectsUmbrella')),
      );
      break;
    case 'SymbolsCholera':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsCholera')),
      );
      break;
    case 'BodyLiver':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyLiver')),
      );
      break;
    case 'SymbolsClinicalF':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsClinicalF')),
      );
      break;
    case 'ObjectsUnhealthyFood':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ObjectsUnhealthyFood')),
      );
      break;
    case 'BodyLiverAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyLiverAlt')),
      );
      break;
    case 'PeopleAgriculture':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleAgriculture')),
      );
      break;
    case 'SymbolsClinicalFe':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsClinicalFe')),
      );
      break;
    case 'BodyLungs':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyLungs')),
      );
      break;
    case 'BodyLymphNodes':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyLymphNodes')),
      );
      break;
    case 'BodyMouth':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyMouth')),
      );
      break;
    case 'PeopleAgricultureWorker':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleAgricultureWorker')),
      );
      break;
    case 'SymbolsCommunication':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsCommunication')),
      );
      break;
    case 'PeopleAgricultureWorkerAlt':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/PeopleAgricultureWorkerAlt'),
        ),
      );
      break;
    case 'SymbolsCommunityMeeting':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsCommunityMeeting')),
      );
      break;
    case 'BodyNerve':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyNerve')),
      );
      break;
    case 'BodyNeurology':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyNeurology')),
      );
      break;
    case 'BodyNose':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyNose')),
      );
      break;
    case 'PeopleAncv':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleAncv')),
      );
      break;
    case 'SymbolsContactSupport':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsContactSupport')),
      );
      break;
    case 'PeopleAsthma':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleAsthma')),
      );
      break;
    case 'SymbolsDatabase':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsDatabase')),
      );
      break;
    case 'PeopleBaby0203Alt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleBaby0203Alt')),
      );
      break;
    case 'SymbolsDeath':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsDeath')),
      );
      break;
    case 'PeopleBaby0203M':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleBaby0203M')),
      );
      break;
    case 'SymbolsDeathAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsDeathAlt')),
      );
      break;
    case 'BodyPancreas':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyPancreas')),
      );
      break;
    case 'PeopleBaby0306M':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleBaby0306M')),
      );
      break;
    case 'SymbolsDeathAlt2':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsDeathAlt2')),
      );
      break;
    case 'BodySkeleton':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodySkeleton')),
      );
      break;
    case 'PeopleBabyFemale0203M':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleBabyFemale0203M')),
      );
      break;
    case 'SymbolsDefault':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsDefault')),
      );
      break;
    case 'BodySkull':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodySkull')),
      );
      break;
    case 'PeopleBabyFemale0203MAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleBabyFemale0203MAlt')),
      );
      break;
    case 'SymbolsDhis2Logo':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsDhis2Logo')),
      );
      break;
    case 'BodySpine':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodySpine')),
      );
      break;
    case 'PeopleBabyFemale0306M':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleBabyFemale0306M')),
      );
      break;
    case 'SymbolsDiabetes':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsDiabetes')),
      );
      break;
    case 'BodySpleen':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodySpleen')),
      );
      break;
    case 'BodyStomach':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyStomach')),
      );
      break;
    case 'PeopleBabyFemale0609M':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleBabyFemale0609M')),
      );
      break;
    case 'SymbolsDiabetesMeasure':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsDiabetesMeasure')),
      );
      break;
    case 'SymbolsDischarge':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsDischarge')),
      );
      break;
    case 'PeopleBabyMale0203M':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleBabyMale0203M')),
      );
      break;
    case 'BodyTooth':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/BodyTooth')),
      );
      break;
    case 'PeopleBabyMale0203MAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleBabyMale0203MAlt')),
      );
      break;
    case 'SymbolsEcoCare':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsEcoCare')),
      );
      break;
    case 'ConditionsAllergies':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsAllergies')),
      );
      break;
    case 'PeopleBabyMale0306M':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleBabyMale0306M')),
      );
      break;
    case 'SymbolsElectricity':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsElectricity')),
      );
      break;
    case 'ConditionsBackPain':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsBackPain')),
      );
      break;
    case 'PeopleBabyMale0609M':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleBabyMale0609M')),
      );
      break;
    case 'ConditionsCervicalCancer':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsCervicalCancer')),
      );
      break;
    case 'SymbolsEntry':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsEntry')),
      );
      break;
    case 'SymbolsExcelLogo':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsExcelLogo')),
      );
      break;
    case 'ConditionsChills':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsChills')),
      );
      break;
    case 'PeopleBoy0105Y':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleBoy0105Y')),
      );
      break;
    case 'PeopleBoy1015Y':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleBoy1015Y')),
      );
      break;
    case 'ConditionsChillsFever':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsChillsFever')),
      );
      break;
    case 'SymbolsExercise':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsExercise')),
      );
      break;
    case 'SymbolsFhirLogo':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsFhirLogo')),
      );
      break;
    case 'PeopleCallCentre':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleCallCentre')),
      );
      break;
    case 'ConditionsCoughingAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsCoughingAlt')),
      );
      break;
    case 'PeopleChildCare':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleChildCare')),
      );
      break;
    case 'ConditionsDeaf':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsDeaf')),
      );
      break;
    case 'SymbolsFingerprint':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsFingerprint')),
      );
      break;
    case 'SymbolsFruits':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsFruits')),
      );
      break;
    case 'ConditionsDiarrhea':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsDiarrhea')),
      );
      break;
    case 'PeopleChildCognition':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleChildCognition')),
      );
      break;
    case 'PeopleChildProgram':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleChildProgram')),
      );
      break;
    case 'SymbolsGeoLocation':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsGeoLocation')),
      );
      break;
    case 'ConditionsHeadache':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsHeadache')),
      );
      break;
    case 'ConditionsHivInd':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsHivInd')),
      );
      break;
    case 'PeopleCityWorker':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleCityWorker')),
      );
      break;
    case 'SymbolsGlobalPandemic':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsGlobalPandemic')),
      );
      break;
    case 'SymbolsGlobe':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsGlobe')),
      );
      break;
    case 'PeopleCleanHands':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleCleanHands')),
      );
      break;
    case 'ConditionsHivNeg':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsHivNeg')),
      );
      break;
    case 'PeopleCommunityHealthworker':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/PeopleCommunityHealthworker'),
        ),
      );
      break;
    case 'SymbolsGuideDog':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsGuideDog')),
      );
      break;
    case 'ConditionsHivPos':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsHivPos')),
      );
      break;
    case 'PeopleConstructionWorker':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleConstructionWorker')),
      );
      break;
    case 'SymbolsHazardous':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsHazardous')),
      );
      break;
    case 'ConditionsHpv':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsHpv')),
      );
      break;
    case 'PeopleDiabetes':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleDiabetes')),
      );
      break;
    case 'ConditionsIntestinalPain':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsIntestinalPain')),
      );
      break;
    case 'SymbolsHealth':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsHealth')),
      );
      break;
    case 'SymbolsHealthAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsHealthAlt')),
      );
      break;
    case 'PeopleDoctor':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleDoctor')),
      );
      break;
    case 'ConditionsLossSmell':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsLossSmell')),
      );
      break;
    case 'PeopleDoctorFemale':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleDoctorFemale')),
      );
      break;
    case 'SymbolsHealthDataSecurity':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/SymbolsHealthDataSecurity'),
        ),
      );
      break;
    case 'ConditionsLowVision':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsLowVision')),
      );
      break;
    case 'ConditionsNausea':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsNausea')),
      );
      break;
    case 'PeopleDoctorMale':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleDoctorMale')),
      );
      break;
    case 'SymbolsHealthDataSync':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsHealthDataSync')),
      );
      break;
    case 'PeopleDomesticWorker':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleDomesticWorker')),
      );
      break;
    case 'SymbolsHealthLiteracy':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsHealthLiteracy')),
      );
      break;
    case 'ConditionsOverweight':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsOverweight')),
      );
      break;
    case 'PeopleDomesticWorkerAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleDomesticWorkerAlt')),
      );
      break;
    case 'SymbolsHealthWorkerForm':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsHealthWorkerForm')),
      );
      break;
    case 'ConditionsPneumonia':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsPneumonia')),
      );
      break;
    case 'PeopleElderly':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleElderly')),
      );
      break;
    case 'SymbolsHeart':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsHeart')),
      );
      break;
    case 'ConditionsRibbon':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsRibbon')),
      );
      break;
    case 'ConditionsSti':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsSti')),
      );
      break;
    case 'SymbolsHeartCardiogram':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsHeartCardiogram')),
      );
      break;
    case 'PeopleExerciseRunning':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleExerciseRunning')),
      );
      break;
    case 'ConditionsSweating':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsSweating')),
      );
      break;
    case 'PeopleExerciseWalkSupported':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/PeopleExerciseWalkSupported'),
        ),
      );
      break;
    case 'ConditionsTb':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsTb')),
      );
      break;
    case 'SymbolsHighBars':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsHighBars')),
      );
      break;
    case 'SymbolsHighLevel':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsHighLevel')),
      );
      break;
    case 'PeopleExerciseWalking':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleExerciseWalking')),
      );
      break;
    case 'ConditionsUnderweight':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsUnderweight')),
      );
      break;
    case 'SymbolsHomeQuarantine':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsHomeQuarantine')),
      );
      break;
    case 'PeopleExerciseWeights':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleExerciseWeights')),
      );
      break;
    case 'ConditionsVaricoseVein':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsVaricoseVein')),
      );
      break;
    case 'PeopleFactoryWorker':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleFactoryWorker')),
      );
      break;
    case 'SymbolsHospice':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsHospice')),
      );
      break;
    case 'ConditionsVih':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsVih')),
      );
      break;
    case 'PeopleFemaleAndMale':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleFemaleAndMale')),
      );
      break;
    case 'SymbolsHospitalSymbol':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsHospitalSymbol')),
      );
      break;
    case 'SymbolsICertificatePaper':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsICertificatePaper')),
      );
      break;
    case 'PeopleFemaleSexWorker':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleFemaleSexWorker')),
      );
      break;
    case 'ConditionsViralLungInfection':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/ConditionsViralLungInfection'),
        ),
      );
      break;
    case 'PeopleFetus':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleFetus')),
      );
      break;
    case 'ConditionsVomiting':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ConditionsVomiting')),
      );
      break;
    case 'SymbolsIDocumentsAccepted':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/SymbolsIDocumentsAccepted'),
        ),
      );
      break;
    case 'SymbolsIDocumentsDenied':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsIDocumentsDenied')),
      );
      break;
    case 'DevicesBloodPressure':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesBloodPressure')),
      );
      break;
    case 'PeopleForum':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleForum')),
      );
      break;
    case 'DevicesBloodPressure2':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesBloodPressure2')),
      );
      break;
    case 'PeopleGirl0105Y':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleGirl0105Y')),
      );
      break;
    case 'SymbolsIExamMultipleChoice':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/SymbolsIExamMultipleChoice'),
        ),
      );
      break;
    case 'SymbolsIExamQualification':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/SymbolsIExamQualification'),
        ),
      );
      break;
    case 'PeopleGirl1015Y':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleGirl1015Y')),
      );
      break;
    case 'DevicesBloodPressureMonitor':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/DevicesBloodPressureMonitor'),
        ),
      );
      break;
    case 'DevicesCast':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesCast')),
      );
      break;
    case 'PeopleGroupDiscussionMeeting':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/PeopleGroupDiscussionMeeting'),
        ),
      );
      break;
    case 'SymbolsINoteAction':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsINoteAction')),
      );
      break;
    case 'DevicesClinicalA':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesClinicalA')),
      );
      break;
    case 'PeopleGroupDiscussionMeetingx3':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/PeopleGroupDiscussionMeetingx3'),
        ),
      );
      break;
    case 'SymbolsIScheduleSchoolDateTime':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/SymbolsIScheduleSchoolDateTime'),
        ),
      );
      break;
    case 'DevicesColdChain':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesColdChain')),
      );
      break;
    case 'PeopleHealthWorker':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleHealthWorker')),
      );
      break;
    case 'SymbolsImm':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsImm')),
      );
      break;
    case 'PeopleIGroupsPerspectiveCrowd':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/PeopleIGroupsPerspectiveCrowd'),
        ),
      );
      break;
    case 'SymbolsInfo':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsInfo')),
      );
      break;
    case 'DevicesContactLenses':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesContactLenses')),
      );
      break;
    case 'PeopleITrainingClass':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleITrainingClass')),
      );
      break;
    case 'SymbolsInsecticideResistance':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/SymbolsInsecticideResistance'),
        ),
      );
      break;
    case 'DevicesDefibrilator':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesDefibrilator')),
      );
      break;
    case 'DevicesDentalHygiene':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesDentalHygiene')),
      );
      break;
    case 'PeopleLactation':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleLactation')),
      );
      break;
    case 'SymbolsLowBars':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsLowBars')),
      );
      break;
    case 'DevicesDiscriminatingConcentrationBioassays':
      Comp = React.memo(
        lazy(
          () =>
            import(
              '@assets/medicalIcons/svg/DevicesDiscriminatingConcentrationBioassays'
            ),
        ),
      );
      break;
    case 'SymbolsLowLevel':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsLowLevel')),
      );
      break;
    case 'PeopleMaleAndFemale':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleMaleAndFemale')),
      );
      break;
    case 'PeopleMaleSexWorker':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleMaleSexWorker')),
      );
      break;
    case 'DevicesDisinfectingWipes':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesDisinfectingWipes')),
      );
      break;
    case 'SymbolsMagnifyingGlass':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsMagnifyingGlass')),
      );
      break;
    case 'SymbolsMalariaOutbreak':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsMalariaOutbreak')),
      );
      break;
    case 'PeopleMan':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleMan')),
      );
      break;
    case 'DevicesExerciseBicycle':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesExerciseBicycle')),
      );
      break;
    case 'PeopleMentalDisorders':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleMentalDisorders')),
      );
      break;
    case 'SymbolsMedicalAdvice':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsMedicalAdvice')),
      );
      break;
    case 'DevicesEyeglasses':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesEyeglasses')),
      );
      break;
    case 'DevicesFever':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesFever')),
      );
      break;
    case 'PeopleMilitaryWorker':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleMilitaryWorker')),
      );
      break;
    case 'SymbolsMediumBars':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsMediumBars')),
      );
      break;
    case 'SymbolsMediumLevel':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsMediumLevel')),
      );
      break;
    case 'PeopleMinerWorker':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleMinerWorker')),
      );
      break;
    case 'DevicesHospitalized':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesHospitalized')),
      );
      break;
    case 'DevicesInpatient':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesInpatient')),
      );
      break;
    case 'PeopleMinerWorkerAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleMinerWorkerAlt')),
      );
      break;
    case 'SymbolsMegaphone':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsMegaphone')),
      );
      break;
    case 'SymbolsMosquito':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsMosquito')),
      );
      break;
    case 'PeopleMsm':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleMsm')),
      );
      break;
    case 'DevicesIntravenousBag':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesIntravenousBag')),
      );
      break;
    case 'PeopleNeuroSurgery':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleNeuroSurgery')),
      );
      break;
    case 'DevicesLlin':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesLlin')),
      );
      break;
    case 'SymbolsNegative':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsNegative')),
      );
      break;
    case 'SymbolsNetwork4G':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsNetwork4G')),
      );
      break;
    case 'DevicesMicroscope':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesMicroscope')),
      );
      break;
    case 'PeopleNurse':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleNurse')),
      );
      break;
    case 'PeopleOfficer':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleOfficer')),
      );
      break;
    case 'SymbolsNetwork5G':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsNetwork5G')),
      );
      break;
    case 'DevicesMobile':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesMobile')),
      );
      break;
    case 'DevicesObservation':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesObservation')),
      );
      break;
    case 'PeopleOldMan':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleOldMan')),
      );
      break;
    case 'SymbolsNo':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsNo')),
      );
      break;
    case 'SymbolsNutrition':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsNutrition')),
      );
      break;
    case 'DevicesOdontology':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesOdontology')),
      );
      break;
    case 'PeopleOldWoman':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleOldWoman')),
      );
      break;
    case 'SymbolsOpenMrsLogo':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsOpenMrsLogo')),
      );
      break;
    case 'DevicesOdontologyImplant':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesOdontologyImplant')),
      );
      break;
    case 'PeopleOutpatient':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleOutpatient')),
      );
      break;
    case 'SymbolsOutbreak':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsOutbreak')),
      );
      break;
    case 'DevicesOxygenTank':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesOxygenTank')),
      );
      break;
    case 'PeoplePediatricSurgery':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeoplePediatricSurgery')),
      );
      break;
    case 'DevicesPatientBand':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesPatientBand')),
      );
      break;
    case 'PeoplePeople':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeoplePeople')),
      );
      break;
    case 'SymbolsPalliativeCare':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsPalliativeCare')),
      );
      break;
    case 'DevicesPatientBandAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesPatientBandAlt')),
      );
      break;
    case 'SymbolsPavedRoad':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsPavedRoad')),
      );
      break;
    case 'PeoplePerson':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeoplePerson')),
      );
      break;
    case 'PeoplePlantationWorker':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeoplePlantationWorker')),
      );
      break;
    case 'DevicesPpeApron':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesPpeApron')),
      );
      break;
    case 'SymbolsPavedRoadAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsPavedRoadAlt')),
      );
      break;
    case 'DevicesPpeFaceMask':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesPpeFaceMask')),
      );
      break;
    case 'DevicesPpeFaceShield':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesPpeFaceShield')),
      );
      break;
    case 'DevicesPpeFaceShieldAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesPpeFaceShieldAlt')),
      );
      break;
    case 'DevicesPpeGloves':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesPpeGloves')),
      );
      break;
    case 'DevicesPpeGoggles':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesPpeGoggles')),
      );
      break;
    case 'DevicesPpeGown':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesPpeGown')),
      );
      break;
    case 'PeoplePlantationWorkerAlt':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/PeoplePlantationWorkerAlt'),
        ),
      );
      break;
    case 'PeoplePregnant':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeoplePregnant')),
      );
      break;
    case 'PeoplePregnant0812W':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeoplePregnant0812W')),
      );
      break;
    case 'PeoplePregnant2426W':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeoplePregnant2426W')),
      );
      break;
    case 'PeoplePregnant32W':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeoplePregnant32W')),
      );
      break;
    case 'PeoplePregnant3638W':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeoplePregnant3638W')),
      );
      break;
    case 'SymbolsPeace':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsPeace')),
      );
      break;
    case 'SymbolsPharmacy':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsPharmacy')),
      );
      break;
    case 'SymbolsPharmacyAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsPharmacyAlt')),
      );
      break;
    case 'SymbolsPoison':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsPoison')),
      );
      break;
    case 'SymbolsPolygon':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsPolygon')),
      );
      break;
    case 'SymbolsPositive':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsPositive')),
      );
      break;
    case 'DevicesPpeMask':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesPpeMask')),
      );
      break;
    case 'DevicesPpeMaskN95':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesPpeMaskN95')),
      );
      break;
    case 'DevicesPpeSanitizer':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesPpeSanitizer')),
      );
      break;
    case 'DevicesPpeSantizerAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesPpeSantizerAlt')),
      );
      break;
    case 'PeoplePrisoner':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeoplePrisoner')),
      );
      break;
    case 'PeoplePwid':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeoplePwid')),
      );
      break;
    case 'PeopleRefused':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleRefused')),
      );
      break;
    case 'PeopleRmnh':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleRmnh')),
      );
      break;
    case 'SymbolsPrescriptionDocument':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/SymbolsPrescriptionDocument'),
        ),
      );
      break;
    case 'SymbolsProviderFst':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsProviderFst')),
      );
      break;
    case 'SymbolsQuestion':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsQuestion')),
      );
      break;
    case 'SymbolsQuestionCircle':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsQuestionCircle')),
      );
      break;
    case 'DevicesPpeSuit':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesPpeSuit')),
      );
      break;
    case 'DevicesRespirator':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesRespirator')),
      );
      break;
    case 'DevicesSling':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesSling')),
      );
      break;
    case 'PeopleSecurityWorker':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleSecurityWorker')),
      );
      break;
    case 'SymbolsQuestionTriangle':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsQuestionTriangle')),
      );
      break;
    case 'PeopleSpeechLanguageTherapy':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/PeopleSpeechLanguageTherapy'),
        ),
      );
      break;
    case 'SymbolsReferral':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsReferral')),
      );
      break;
    case 'PeopleSpraying':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleSpraying')),
      );
      break;
    case 'SymbolsRegisterBook':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsRegisterBook')),
      );
      break;
    case 'DevicesStethoscope':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesStethoscope')),
      );
      break;
    case 'PeopleSymptom':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleSymptom')),
      );
      break;
    case 'SymbolsRunningWaterAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsRunningWaterAlt')),
      );
      break;
    case 'DevicesSurgicalSterilization':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/DevicesSurgicalSterilization'),
        ),
      );
      break;
    case 'DevicesSyringe':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesSyringe')),
      );
      break;
    case 'PeopleTraumatism':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleTraumatism')),
      );
      break;
    case 'SymbolsRx':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsRx')),
      );
      break;
    case 'PeopleTravel':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleTravel')),
      );
      break;
    case 'SymbolsSexualReproductiveHealth':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/SymbolsSexualReproductiveHealth'),
        ),
      );
      break;
    case 'DevicesSyringeVaccine':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesSyringeVaccine')),
      );
      break;
    case 'PeopleTravelAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleTravelAlt')),
      );
      break;
    case 'SymbolsSimpleLogo':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsSimpleLogo')),
      );
      break;
    case 'DevicesTac':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesTac')),
      );
      break;
    case 'PeopleTruckDriver':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleTruckDriver')),
      );
      break;
    case 'SymbolsSmoking':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsSmoking')),
      );
      break;
    case 'DevicesThermometer':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesThermometer')),
      );
      break;
    case 'PeopleWashHands':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleWashHands')),
      );
      break;
    case 'SymbolsSmokingCessation':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsSmokingCessation')),
      );
      break;
    case 'DevicesThermometerDigital':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/DevicesThermometerDigital'),
        ),
      );
      break;
    case 'PeopleWaterSanitation':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleWaterSanitation')),
      );
      break;
    case 'SymbolsSocialDistancing':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsSocialDistancing')),
      );
      break;
    case 'DevicesTreatedWater':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesTreatedWater')),
      );
      break;
    case 'PeopleWoldCare':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleWoldCare')),
      );
      break;
    case 'SymbolsSocialDistancingAlt':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/SymbolsSocialDistancingAlt'),
        ),
      );
      break;
    case 'DevicesVentilator':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesVentilator')),
      );
      break;
    case 'PeopleWoman':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleWoman')),
      );
      break;
    case 'SymbolsStop':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsStop')),
      );
      break;
    case 'DevicesVentilatorAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesVentilatorAlt')),
      );
      break;
    case 'PeopleWorldCare':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleWorldCare')),
      );
      break;
    case 'SymbolsTally':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsTally')),
      );
      break;
    case 'DevicesVirusLabResearchSyringe':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/DevicesVirusLabResearchSyringe'),
        ),
      );
      break;
    case 'PeopleYoungPeople':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PeopleYoungPeople')),
      );
      break;
    case 'SymbolsTransgender':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsTransgender')),
      );
      break;
    case 'DevicesVirusLabResearchTestTube':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/DevicesVirusLabResearchTestTube'),
        ),
      );
      break;
    case 'PlacesAmbulatoryClinic':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PlacesAmbulatoryClinic')),
      );
      break;
    case 'SymbolsUiFolder':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsUiFolder')),
      );
      break;
    case 'DevicesVirusSanitizerSpray':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/DevicesVirusSanitizerSpray'),
        ),
      );
      break;
    case 'PlacesChurch':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PlacesChurch')),
      );
      break;
    case 'SymbolsUiFolderFamily':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsUiFolderFamily')),
      );
      break;
    case 'DevicesWeight':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesWeight')),
      );
      break;
    case 'PlacesCity':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PlacesCity')),
      );
      break;
    case 'SymbolsUiMenu':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsUiMenu')),
      );
      break;
    case 'DevicesWheelchair':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesWheelchair')),
      );
      break;
    case 'PlacesEmergencyPost':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PlacesEmergencyPost')),
      );
      break;
    case 'SymbolsUiMenuGrid':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsUiMenuGrid')),
      );
      break;
    case 'DevicesWheelchairAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesWheelchairAlt')),
      );
      break;
    case 'PlacesForest':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PlacesForest')),
      );
      break;
    case 'SymbolsUiPreferences':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsUiPreferences')),
      );
      break;
    case 'DevicesXray':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DevicesXray')),
      );
      break;
    case 'PlacesForestPersons':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PlacesForestPersons')),
      );
      break;
    case 'SymbolsUiSecure':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsUiSecure')),
      );
      break;
    case 'DiagnosticsConeTestOnNets':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/DiagnosticsConeTestOnNets'),
        ),
      );
      break;
    case 'PlacesHome':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PlacesHome')),
      );
      break;
    case 'SymbolsUiSettings':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsUiSettings')),
      );
      break;
    case 'DiagnosticsConeTestOnWalls':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/DiagnosticsConeTestOnWalls'),
        ),
      );
      break;
    case 'PlacesHomeAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PlacesHomeAlt')),
      );
      break;
    case 'SymbolsUiUserProfile':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsUiUserProfile')),
      );
      break;
    case 'DiagnosticsHivSelfTest':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DiagnosticsHivSelfTest')),
      );
      break;
    case 'PlacesHospital':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PlacesHospital')),
      );
      break;
    case 'SymbolsUiZoom':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsUiZoom')),
      );
      break;
    case 'DiagnosticsIntensityConcentrationBioassays':
      Comp = React.memo(
        lazy(
          () =>
            import(
              '@assets/medicalIcons/svg/DiagnosticsIntensityConcentrationBioassays'
            ),
        ),
      );
      break;
    case 'SymbolsUiZoomIn':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsUiZoomIn')),
      );
      break;
    case 'PlacesLetrina':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PlacesLetrina')),
      );
      break;
    case 'DiagnosticsMalariaMicroscope':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/DiagnosticsMalariaMicroscope'),
        ),
      );
      break;
    case 'PlacesLetrinaAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PlacesLetrinaAlt')),
      );
      break;
    case 'SymbolsUiZoomOut':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsUiZoomOut')),
      );
      break;
    case 'DiagnosticsMalariaMixedMicroscope':
      Comp = React.memo(
        lazy(
          () =>
            import(
              '@assets/medicalIcons/svg/DiagnosticsMalariaMixedMicroscope'
            ),
        ),
      );
      break;
    case 'PlacesMarketStall':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PlacesMarketStall')),
      );
      break;
    case 'SymbolsUnPavedRoad':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsUnPavedRoad')),
      );
      break;
    case 'DiagnosticsMalariaPfMicroscope':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/DiagnosticsMalariaPfMicroscope'),
        ),
      );
      break;
    case 'PlacesMinistryOfHealth':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PlacesMinistryOfHealth')),
      );
      break;
    case 'SymbolsVirus':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsVirus')),
      );
      break;
    case 'DiagnosticsMalariaPvMicroscope':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/DiagnosticsMalariaPvMicroscope'),
        ),
      );
      break;
    case 'SymbolsVirusAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsVirusAlt')),
      );
      break;
    case 'DiagnosticsMalariaTesting':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/DiagnosticsMalariaTesting'),
        ),
      );
      break;
    case 'PlacesPalmBranchesRoof':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PlacesPalmBranchesRoof')),
      );
      break;
    case 'SymbolsVirusMutation':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsVirusMutation')),
      );
      break;
    case 'DiagnosticsMosquitoCollection':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/DiagnosticsMosquitoCollection'),
        ),
      );
      break;
    case 'PlacesProperRoof':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PlacesProperRoof')),
      );
      break;
    case 'SymbolsVirusPatient':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsVirusPatient')),
      );
      break;
    case 'DiagnosticsRdtResult':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DiagnosticsRdtResult')),
      );
      break;
    case 'PlacesRuralPost':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PlacesRuralPost')),
      );
      break;
    case 'SymbolsVirusResearch':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsVirusResearch')),
      );
      break;
    case 'DiagnosticsRdtResultInvalid':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/DiagnosticsRdtResultInvalid'),
        ),
      );
      break;
    case 'PlacesRuralPostAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PlacesRuralPostAlt')),
      );
      break;
    case 'SymbolsVirusResearchAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsVirusResearchAlt')),
      );
      break;
    case 'DiagnosticsRdtResultMixed':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/DiagnosticsRdtResultMixed'),
        ),
      );
      break;
    case 'PlacesTemple':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PlacesTemple')),
      );
      break;
    case 'SymbolsVirusShield':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsVirusShield')),
      );
      break;
    case 'DiagnosticsRdtResultMixedInvalid':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/DiagnosticsRdtResultMixedInvalid'),
        ),
      );
      break;
    case 'PlacesTempleAlt':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PlacesTempleAlt')),
      );
      break;
    case 'SymbolsWaterTreatment':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsWaterTreatment')),
      );
      break;
    case 'DiagnosticsRdtResultMixedInvalidRectangular':
      Comp = React.memo(
        lazy(
          () =>
            import(
              '@assets/medicalIcons/svg/DiagnosticsRdtResultMixedInvalidRectangular'
            ),
        ),
      );
      break;
    case 'SymbolsYes':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsYes')),
      );
      break;
    case 'PlacesVillage':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/PlacesVillage')),
      );
      break;
    case 'DiagnosticsRdtResultMixedRectangular':
      Comp = React.memo(
        lazy(
          () =>
            import(
              '@assets/medicalIcons/svg/DiagnosticsRdtResultMixedRectangular'
            ),
        ),
      );
      break;
    case 'Typography0':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/Typography0')),
      );
      break;
    case 'ShapesCircleLarge':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ShapesCircleLarge')),
      );
      break;
    case 'DiagnosticsRdtResultNeg':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DiagnosticsRdtResultNeg')),
      );
      break;
    case 'ShapesCircleMedium':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ShapesCircleMedium')),
      );
      break;
    case 'Typography1':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/Typography1')),
      );
      break;
    case 'DiagnosticsRdtResultNegInvalid':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/DiagnosticsRdtResultNegInvalid'),
        ),
      );
      break;
    case 'ShapesCircleSmall':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ShapesCircleSmall')),
      );
      break;
    case 'Typography2':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/Typography2')),
      );
      break;
    case 'DiagnosticsRdtResultNegInvalidRectangular':
      Comp = React.memo(
        lazy(
          () =>
            import(
              '@assets/medicalIcons/svg/DiagnosticsRdtResultNegInvalidRectangular'
            ),
        ),
      );
      break;
    case 'ShapesInformationCampaign':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/ShapesInformationCampaign'),
        ),
      );
      break;
    case 'Typography3':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/Typography3')),
      );
      break;
    case 'DiagnosticsRdtResultNegRectangular':
      Comp = React.memo(
        lazy(
          () =>
            import(
              '@assets/medicalIcons/svg/DiagnosticsRdtResultNegRectangular'
            ),
        ),
      );
      break;
    case 'ShapesSquareLarge':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ShapesSquareLarge')),
      );
      break;
    case 'Typography4':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/Typography4')),
      );
      break;
    case 'DiagnosticsRdtResultNoTest':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/DiagnosticsRdtResultNoTest'),
        ),
      );
      break;
    case 'ShapesSquareMedium':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ShapesSquareMedium')),
      );
      break;
    case 'Typography5':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/Typography5')),
      );
      break;
    case 'DiagnosticsRdtResultPf':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DiagnosticsRdtResultPf')),
      );
      break;
    case 'ShapesSquareSmall':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ShapesSquareSmall')),
      );
      break;
    case 'Typography6':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/Typography6')),
      );
      break;
    case 'DiagnosticsRdtResultPfInvalid':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/DiagnosticsRdtResultPfInvalid'),
        ),
      );
      break;
    case 'ShapesStarLarge':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ShapesStarLarge')),
      );
      break;
    case 'Typography7':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/Typography7')),
      );
      break;
    case 'DiagnosticsRdtResultPfInvalidRectangular':
      Comp = React.memo(
        lazy(
          () =>
            import(
              '@assets/medicalIcons/svg/DiagnosticsRdtResultPfInvalidRectangular'
            ),
        ),
      );
      break;
    case 'ShapesStarMedium':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ShapesStarMedium')),
      );
      break;
    case 'Typography8':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/Typography8')),
      );
      break;
    case 'DiagnosticsRdtResultPfRectangular':
      Comp = React.memo(
        lazy(
          () =>
            import(
              '@assets/medicalIcons/svg/DiagnosticsRdtResultPfRectangular'
            ),
        ),
      );
      break;
    case 'ShapesStarSmall':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ShapesStarSmall')),
      );
      break;
    case 'Typography9':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/Typography9')),
      );
      break;
    case 'DiagnosticsRdtResultPositive':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/DiagnosticsRdtResultPositive'),
        ),
      );
      break;
    case 'ShapesTriangleLarge':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ShapesTriangleLarge')),
      );
      break;
    case 'TypographyA':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyA')),
      );
      break;
    case 'DiagnosticsRdtResultPv':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/DiagnosticsRdtResultPv')),
      );
      break;
    case 'ShapesTriangleMedium':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ShapesTriangleMedium')),
      );
      break;
    case 'TypographyB':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyB')),
      );
      break;
    case 'DiagnosticsRdtResultPvInvalid':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/DiagnosticsRdtResultPvInvalid'),
        ),
      );
      break;
    case 'ShapesTriangleSmall':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/ShapesTriangleSmall')),
      );
      break;
    case 'TypographyC':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyC')),
      );
      break;
    case 'DiagnosticsRdtResultPvInvalidRectangular':
      Comp = React.memo(
        lazy(
          () =>
            import(
              '@assets/medicalIcons/svg/DiagnosticsRdtResultPvInvalidRectangular'
            ),
        ),
      );
      break;
    case 'TypographyD':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyD')),
      );
      break;
    case 'SpecialtyAccidentAndEmergency':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/SpecialtyAccidentAndEmergency'),
        ),
      );
      break;
    case 'DiagnosticsRdtResultPvRectangular':
      Comp = React.memo(
        lazy(
          () =>
            import(
              '@assets/medicalIcons/svg/DiagnosticsRdtResultPvRectangular'
            ),
        ),
      );
      break;
    case 'SpecialtyAdmissions':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyAdmissions')),
      );
      break;
    case 'TypographyDollar':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyDollar')),
      );
      break;
    case 'DiagnosticsSynergistInsecticideBioassays':
      Comp = React.memo(
        lazy(
          () =>
            import(
              '@assets/medicalIcons/svg/DiagnosticsSynergistInsecticideBioassays'
            ),
        ),
      );
      break;
    case 'SpecialtyBiochemistryLaboratory':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/SpecialtyBiochemistryLaboratory'),
        ),
      );
      break;
    case 'TypographyE':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyE')),
      );
      break;
    case 'EmotionsAngry':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsAngry')),
      );
      break;
    case 'EmotionsBandaged':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsBandaged')),
      );
      break;
    case 'EmotionsCalm':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsCalm')),
      );
      break;
    case 'EmotionsConfused':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsConfused')),
      );
      break;
    case 'EmotionsCoughing':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsCoughing')),
      );
      break;
    case 'EmotionsCrying':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsCrying')),
      );
      break;
    case 'EmotionsDizzy':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsDizzy')),
      );
      break;
    case 'EmotionsExpectorate':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsExpectorate')),
      );
      break;
    case 'EmotionsEyeglasses':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsEyeglasses')),
      );
      break;
    case 'SpecialtyCardiology':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyCardiology')),
      );
      break;
    case 'TypographyF':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyF')),
      );
      break;
    case 'SpecialtyChaplaincy':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyChaplaincy')),
      );
      break;
    case 'TypographyG':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyG')),
      );
      break;
    case 'SpecialtyCoronaryCareUnit':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/SpecialtyCoronaryCareUnit'),
        ),
      );
      break;
    case 'TypographyGhana':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyGhana')),
      );
      break;
    case 'SpecialtyCriticalCare':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyCriticalCare')),
      );
      break;
    case 'TypographyH':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyH')),
      );
      break;
    case 'SpecialtyDischargeLounge':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyDischargeLounge')),
      );
      break;
    case 'TypographyI':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyI')),
      );
      break;
    case 'SpecialtyEarsNoseAndThroat':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/SpecialtyEarsNoseAndThroat'),
        ),
      );
      break;
    case 'TypographyJ':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyJ')),
      );
      break;
    case 'SpecialtyEndocrinology':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyEndocrinology')),
      );
      break;
    case 'TypographyK':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyK')),
      );
      break;
    case 'SpecialtyFinanceDept':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyFinanceDept')),
      );
      break;
    case 'TypographyL':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyL')),
      );
      break;
    case 'SpecialtyGastroenterology':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/SpecialtyGastroenterology'),
        ),
      );
      break;
    case 'TypographyM':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyM')),
      );
      break;
    case 'EmotionsFever':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsFever')),
      );
      break;
    case 'EmotionsHappy':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsHappy')),
      );
      break;
    case 'EmotionsLoudlyCrying':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsLoudlyCrying')),
      );
      break;
    case 'EmotionsMasked':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsMasked')),
      );
      break;
    case 'EmotionsMeasles':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsMeasles')),
      );
      break;
    case 'EmotionsNauseous':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsNauseous')),
      );
      break;
    case 'EmotionsNervous':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsNervous')),
      );
      break;
    case 'SpecialtyGeriatrics':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyGeriatrics')),
      );
      break;
    case 'SpecialtyGym':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyGym')),
      );
      break;
    case 'TypographyN':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyN')),
      );
      break;
    case 'TypographyO':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyO')),
      );
      break;
    case 'TypographyP':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyP')),
      );
      break;
    case 'SpecialtyGynecology':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyGynecology')),
      );
      break;
    case 'SpecialtyHematology':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyHematology')),
      );
      break;
    case 'TypographyQ':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyQ')),
      );
      break;
    case 'SpecialtyHematologyLaboratory':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/SpecialtyHematologyLaboratory'),
        ),
      );
      break;
    case 'TypographyQuestionMark':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyQuestionMark')),
      );
      break;
    case 'SpecialtyHepatology':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyHepatology')),
      );
      break;
    case 'TypographyR':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyR')),
      );
      break;
    case 'SpecialtyHumanResoruces':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyHumanResoruces')),
      );
      break;
    case 'TypographyRupee':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyRupee')),
      );
      break;
    case 'EmotionsNeutral':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsNeutral')),
      );
      break;
    case 'SpecialtyIntensiveCareUnit':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/SpecialtyIntensiveCareUnit'),
        ),
      );
      break;
    case 'EmotionsNotOk':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsNotOk')),
      );
      break;
    case 'EmotionsOk':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsOk')),
      );
      break;
    case 'EmotionsSad':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsSad')),
      );
      break;
    case 'EmotionsSleepy':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsSleepy')),
      );
      break;
    case 'EmotionsSweating':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsSweating')),
      );
      break;
    case 'EmotionsTongue':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsTongue')),
      );
      break;
    case 'EmotionsVomitting':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsVomitting')),
      );
      break;
    case 'TypographyS':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyS')),
      );
      break;
    case 'SpecialtyMedicalRecords':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyMedicalRecords')),
      );
      break;
    case 'TypographyT':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyT')),
      );
      break;
    case 'SpecialtyNephrology':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyNephrology')),
      );
      break;
    case 'SpecialtyObstetricsmonia':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyObstetricsmonia')),
      );
      break;
    case 'SpecialtyOncology':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyOncology')),
      );
      break;
    case 'SpecialtyOpthalmology':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyOpthalmology')),
      );
      break;
    case 'SpecialtyOrthopaedics':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyOrthopaedics')),
      );
      break;
    case 'SpecialtyOutpatientDepartment':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/SpecialtyOutpatientDepartment'),
        ),
      );
      break;
    case 'TypographyU':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyU')),
      );
      break;
    case 'TypographyV':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyV')),
      );
      break;
    case 'TypographyW':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyW')),
      );
      break;
    case 'TypographyX':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyX')),
      );
      break;
    case 'TypographyY':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyY')),
      );
      break;
    case 'EmotionsWoozy':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/EmotionsWoozy')),
      );
      break;
    case 'FamilyContraceptiveDiaphragm':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/FamilyContraceptiveDiaphragm'),
        ),
      );
      break;
    case 'FamilyContraceptiveInjection':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/FamilyContraceptiveInjection'),
        ),
      );
      break;
    case 'FamilyContraceptivePatch':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/FamilyContraceptivePatch')),
      );
      break;
    case 'FamilyContraceptiveVoucher':
      Comp = React.memo(
        lazy(
          () => import('@assets/medicalIcons/svg/FamilyContraceptiveVoucher'),
        ),
      );
      break;
    case 'FamilyCopperIud':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/FamilyCopperIud')),
      );
      break;
    case 'FamilyFamilyPlanning':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/FamilyFamilyPlanning')),
      );
      break;
    case 'FamilyFemaleCondom':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/FamilyFemaleCondom')),
      );
      break;
    case 'FamilyHormonalRing':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/FamilyHormonalRing')),
      );
      break;
    case 'FamilyImplant':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/FamilyImplant')),
      );
      break;
    case 'FamilyIud':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/FamilyIud')),
      );
      break;
    case 'FamilyMaleCondom':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/FamilyMaleCondom')),
      );
      break;
    case 'FamilyOralContraceptionPillsx21':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/FamilyOralContraceptionPillsx21'),
        ),
      );
      break;
    case 'FamilyOralContraceptionPillsx28':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/FamilyOralContraceptionPillsx28'),
        ),
      );
      break;
    case 'FamilySayanaPress':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/FamilySayanaPress')),
      );
      break;
    case 'TypographyYen':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyYen')),
      );
      break;
    case 'SpecialtyPediatrics':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyPediatrics')),
      );
      break;
    case 'SpecialtyPharmacy':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyPharmacy')),
      );
      break;
    case 'SpecialtyPhysicalTherapy':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyPhysicalTherapy')),
      );
      break;
    case 'SpecialtyPsychology':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyPsychology')),
      );
      break;
    case 'SpecialtyRadiology':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyRadiology')),
      );
      break;
    case 'SpecialtyRespirology':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyRespirology')),
      );
      break;
    case 'SpecialtyRheumatology':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyRheumatology')),
      );
      break;
    case 'SpecialtySocialWork':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtySocialWork')),
      );
      break;
    case 'SpecialtySonography':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtySonography')),
      );
      break;
    case 'SpecialtySpeechLanguageTherapy':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/SpecialtySpeechLanguageTherapy'),
        ),
      );
      break;
    case 'SpecialtyUrology':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SpecialtyUrology')),
      );
      break;
    case 'Symbols2G':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/Symbols2G')),
      );
      break;
    case 'Symbols3G':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/Symbols3G')),
      );
      break;
    case 'SymbolsAlcohol':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsAlcohol')),
      );
      break;
    case 'SymbolsAlert':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsAlert')),
      );
      break;
    case 'TypographyZ':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/TypographyZ')),
      );
      break;
    case 'Typography_!':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/Typography_!')),
      );
      break;
    case 'Vehicles4X4':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/Vehicles4X4')),
      );
      break;
    case 'VehiclesAmbulance':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/VehiclesAmbulance')),
      );
      break;
    case 'VehiclesBasicMotorcycle':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/VehiclesBasicMotorcycle')),
      );
      break;
    case 'VehiclesBike':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/VehiclesBike')),
      );
      break;
    case 'VehiclesCrossCountryMotorcycle':
      Comp = React.memo(
        lazy(
          () =>
            import('@assets/medicalIcons/svg/VehiclesCrossCountryMotorcycle'),
        ),
      );
      break;
    case 'VehiclesDrone':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/VehiclesDrone')),
      );
      break;
    case 'VehiclesHelicopter':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/VehiclesHelicopter')),
      );
      break;
    case 'VehiclesMachinery':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/VehiclesMachinery')),
      );
      break;
    case 'VehiclesMobileClinic':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/VehiclesMobileClinic')),
      );
      break;
    case 'VehiclesVespaMotorcycle':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/VehiclesVespaMotorcycle')),
      );
      break;
    case 'VehiclesWar':
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/VehiclesWar')),
      );
      break;
    default:
      console.error('Icon not present locally :' + name);
      Comp = React.memo(
        lazy(() => import('@assets/medicalIcons/svg/SymbolsQuestion')),
      );
      break;
  }
  return <Comp />;
};
