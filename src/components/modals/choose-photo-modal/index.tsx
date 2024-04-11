import React, { useCallback } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import {
  DocumentContentType,
  DocumentLinkDto,
  ImageEntityType,
  ImageType,
} from '../../../utils/entityUtils';
import { useMutation } from 'react-query';
import { apiService } from '../../../services';
import { API_IMAGE } from '../../../services/api/ApiConstants';

interface Props {
  isModalOpen: boolean;

  id: string;
  imageType: ImageType;
  imageEntityType: ImageEntityType;
  skipUpload?: boolean;
  close: () => void;
  onSuccess: (photo: DocumentLinkDto) => void;
}

const ChoosePhotoModal: React.FC<Props> = ({
  isModalOpen,
  id,
  imageType,
  imageEntityType,
  skipUpload,
  close,
  onSuccess,
}) => {
  const { t } = useTranslation('common');
  const uploadPhotoMutation = useMutation({
    mutationFn: (data: any) => {
      return apiService.makePOSTRequest(`${API_IMAGE}/upload`, data);
    },
    onError: (error, variables, context) => {
      console.log(`rolling back optimistic update with id ${error}`);
    },
    onSuccess: (data, variables, context) => {
      console.log('Successfully uploaded photo', data);
      console.log('Successfully uploaded photo', variables);
      console.log('Successfully uploaded photo', context);
      // Success
      if (data?.success?.status === 201) {
        if (close) {
          close();
        }
        let photoLinkDto: DocumentLinkDto = {
          contentBase64: variables.contentBase64,
          imageType: imageType,
          imageEntityType: imageEntityType,
          contentType: DocumentContentType.IMAGE,
          entityId: id,
          imageIdentifier: new Date().getDate().toString(),
          order: 1,
          imageUrl: '',
          name: '',
          mimeType: 'image/jpeg', // todo find this
          createdDate: new Date(),
        };
        onSuccess(photoLinkDto);
      }
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
    },
  });

  const onPhotoLibraryPress = useCallback(() => {
    ImagePicker.openPicker({
      width: 800, 
      height: 800,
      cropping: true,
      includeBase64: true,
      freeStyleCropEnabled: true,
      cropperCircleOverlay: false,
    }).then((image: any) => {
      let base64 = `data:${image.mime};base64,` + image.data;
      let photoLinkDto: DocumentLinkDto = {
        contentBase64: base64,
        imageType: imageType,
        imageEntityType: imageEntityType,
        contentType: DocumentContentType.IMAGE,
        entityId: id,
        imageIdentifier: new Date().getDate().toString(),
        order: 1,
        imageUrl: '',
        name: '',
        mimeType: image.mime,
        createdDate: new Date(),
      };

      if (!skipUpload) {
        uploadPhotoMutation.mutate(photoLinkDto);
      } else {
        onSuccess(photoLinkDto);
        if (close) {
          close();
        }
      }
    });
  }, [id, imageEntityType, imageType, uploadPhotoMutation]);

  const onCameraPress = useCallback(() => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
      freeStyleCropEnabled: true,
      cropperCircleOverlay: false,
    }).then((img) => {
      console.log(img);
    });
  }, []);

  return (
    <Modal animationType="fade" transparent={true} visible={isModalOpen}>
      <View style={styles.centeredView}>
        <TouchableOpacity onPress={close} style={styles.closeRequest} />
        <View style={styles.modalView}>
          <TouchableOpacity onPress={close}>
            <Image source={require('@assets/icon-png/close-icon.png')} />
          </TouchableOpacity>
          <Text style={styles.mainText}>{t('common:choosePhoto')}</Text>
          <TouchableOpacity onPress={onCameraPress} style={styles.tableView}>
            <Text style={styles.tableText}>{t('common:fromCamera')}</Text>
            <Icon name="camera" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPhotoLibraryPress}
            style={styles.tableView}>
            <Text style={styles.tableText}>{t('common:fromLibrary')}</Text>
            <Icon name="photo" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = (state: any) => ({});

export default connect(
  mapStateToProps,
  {},
)(withTranslation(['account', 'common', 'validation'])(ChoosePhotoModal));
