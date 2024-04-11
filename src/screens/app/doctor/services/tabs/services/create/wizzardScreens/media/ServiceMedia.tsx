import React from 'react';
import { ScrollView, View } from 'react-native';
import { scaleHeight } from '../../../../../../../../../utils/size';
import WizzardTitleAndStep from '@screens/app/common/wizzard/wizzardAndTitleStep.component';
import useAuth from '@screens/auth/authContext/useAuth';
import { useTranslation } from 'react-i18next';
import PhotoUploadInput from '@screens/app/common/media/photoUpload/PhotoUploadInput';
import {
  ImageEntityType,
  ImageType,
} from '../../../../../../../../../utils/entityUtils';

interface IProps {
  data: any;
  setData: any;
  currentStep: number;
  stepLength: number;
  setCurrentScreen?: React.Dispatch<React.SetStateAction<number>>;
}

const ServiceMedia: React.FC<IProps> = ({
  data,
  setData,
  currentStep,
  stepLength,
}) => {
  const { userEntity }: any = useAuth();
  const { t } = useTranslation();

  return (
    <View style={{ height: '180%' }}>
      <View style={{ marginBottom: scaleHeight(20) }}>
        <WizzardTitleAndStep
          title={t('services:media')}
          currentStep={currentStep + 1}
          stepLength={stepLength}
        />
      </View>

      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <PhotoUploadInput
            photos={data?.photos}
            setPhotos={(items: any) => {
              setData({
                ...data,
                photos: items,
              });
            }}
            entityId={userEntity?.id}
            imageType={ImageType.PHOTO_MEDIUM_MOBILE}
            imageEntityType={ImageEntityType.PRACTITIONER_ROLE}
            skipUpload={true}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ServiceMedia;
