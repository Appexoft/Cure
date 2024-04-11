import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import TextInputCustom from '@components/input/TextInputCustom';
import ChoosePhotoModal from '@components/modals/choose-photo-modal';
import PhotoPreviewCard from '@screens/app/doctor/services/tabs/services/create/cards/PhotoPreviewCard';
import { useTranslation } from 'react-i18next';
import { Color } from '../../../../../utils/GlobalStyles';
import {
  DocumentLinkDto,
  ImageEntityType,
  ImageType,
} from '../../../../../utils/entityUtils';
import { toastService } from '../../../../../services';

interface IProps {
  photos: [];
  setPhotos: (photos: DocumentLinkDto[]) => void;
  imageType: ImageType;
  imageEntityType: ImageEntityType;
  entityId: string;
  title?: string;
  subtitle?: string;
  hidePreview?: boolean;

  skipUpload?: boolean;
}

const PhotoUploadInput: React.FC<IProps> = ({
  photos,
  setPhotos,
  imageType,
  imageEntityType,
  entityId,
  title,
  subtitle,
  hidePreview,
  skipUpload,
}) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const successfulUpload = (photo: DocumentLinkDto) => {
    toastService.displayUploadSuccess();
    const newPhotos = photos || [];
    const result = [...newPhotos, photo];
    result.forEach((it: DocumentLinkDto, idx: number) => (it.order = idx));
    setPhotos(result);
  };

  const removeItem = (crt: DocumentLinkDto) => {
    const result = photos.filter((item: DocumentLinkDto) => item !== crt);
    result.forEach((it: DocumentLinkDto, idx: number) => (it.order = idx));
    setPhotos(result);
  };

  const swapElements = (array: any, index1: number, index2: number) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  };

  return (
    <View style={{ height: '180%' }}>
      {/*<ScrollView>*/}
      <View style={{ alignItems: 'center' }}>
        <View>
          <TextInputCustom
            label={title ? title : t('services:attachPhotos')}
            subLabel={subtitle}
            placeholder={title ? title : t('services:attachFile')}
            iconRight="camera"
            isMultiline
            onTouchStart={() => setIsModalOpen(true)}
          />
          {!hidePreview && !!photos?.length && (
            <View
              style={{
                borderWidth: 1,
                borderRadius: 15,
                height: '150%',
                padding: 15,
                borderColor: Color.border,
                backgroundColor: 'white',
              }}>
              {photos.map((item: DocumentLinkDto, index: number) => (
                <PhotoPreviewCard
                  index={index}
                  isFirst={index === 0}
                  isLast={index === photos.length - 1}
                  photo={item}
                  onMoveUp={(crt: DocumentLinkDto, crtIndex: number) => {
                    let newPhotos = [...photos];
                    swapElements(newPhotos, crtIndex - 1, crtIndex);
                    newPhotos.forEach(
                      (it: DocumentLinkDto, idx: number) => (it.order = idx),
                    );
                    setPhotos(newPhotos);
                  }}
                  onMoveDown={(crt: DocumentLinkDto, crtIndex: number) => {
                    let newPhotos = [...photos];
                    swapElements(newPhotos, crtIndex, crtIndex + 1);
                    newPhotos.forEach(
                      (it: DocumentLinkDto, idx: number) => (it.order = idx),
                    );
                    setPhotos(newPhotos);
                  }}
                  onClose={(crt: DocumentLinkDto) => removeItem(crt)}
                />
              ))}
            </View>
          )}

          <ChoosePhotoModal
            isModalOpen={isModalOpen}
            close={() => setIsModalOpen(false)}
            id={entityId}
            imageType={imageType}
            skipUpload={skipUpload}
            imageEntityType={imageEntityType}
            onSuccess={successfulUpload}
          />
        </View>
      </View>
      {/*</ScrollView>*/}
    </View>
  );
};

export default PhotoUploadInput;
