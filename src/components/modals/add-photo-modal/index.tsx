import React from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../choose-photo-modal/styles';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

interface Props {
  data: any;
  setData: any;
  isModalOpen: boolean;
  close: () => void;
}

const ChooseDocumentPhotoModal: React.FC<Props> = ({
  isModalOpen,
  close,
  data,
  setData,
}) => {
  const { t } = useTranslation('common');

  const onCameraPress = async () => {
    const result = await launchCamera({ mediaType: 'mixed' });
    console.log('result', result);
  };

  const onPhotoLibraryPress = async () => {
    const result = await launchImageLibrary({ mediaType: 'mixed' });
    setData({
      ...data,
      identityProof: [result?.assets[0].uri],
    });
    console.log('result', result);
  };

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

export default ChooseDocumentPhotoModal;
