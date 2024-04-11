import React from 'react';
import { View } from 'react-native';
import { Color } from '../../../../../../../../utils/GlobalStyles';
import { scaleHeight } from '../../../../../../../../utils/size';
import WizzardTitleAndStep from '@screens/app/common/wizzard/wizzardAndTitleStep.component';
import CreateServiceCard from '@screens/app/doctor/services/tabs/services/create/wizzardScreens/workLocation/CreateServiceCard';
import ROUTES from '../../../../../../../../utils/routes';
import { useTranslation } from 'react-i18next';

interface IProps {
  data: any;
  setData: any;

  navigation: any;
  currentStep: number;
  stepLength: number;
  // setCurrentScreen: React.Dispatch<React.SetStateAction<number>>;
}

const ExistingOrNewWorkLocation: React.FC<IProps> = ({
  currentStep,
  stepLength,
  navigation,
  // setCurrentScreen,
}) => {
  const { t } = useTranslation();

  const handleCreateWorkLocation = () => {
    navigation.navigate(ROUTES.Doctor_Services_Create_Work_Location);
  };

  const handleChooseWorkLocation = () => {
    // setCurrentScreen(1);
  };

  return (
    <View>
      <View style={{ marginBottom: scaleHeight(20) }}>
        <WizzardTitleAndStep
          title="Work Location"
          currentStep={currentStep + 1}
          stepLength={stepLength}
        />
      </View>

      <CreateServiceCard
        style={{
          backgroundColor: Color.main,
          borderWidth: 1,
          marginBottom: scaleHeight(10),
        }}
        title={t('services:serviceCardTitle')}
        imageUrl={1}
        onPress={handleChooseWorkLocation}
        description={t('services:serviceCardDescription')}
      />

      <CreateServiceCard
        style={{ borderWidth: 1 }}
        title={t('services:addNewWorkLocation')}
        imageUrl={2}
        onPress={handleCreateWorkLocation}
        description={t('services:newWorkLocationDescription')}
      />
    </View>
  );
};

export default ExistingOrNewWorkLocation;
