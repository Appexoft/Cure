import { CustomButton } from '@components/btns/custom-button';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { Modal, Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { styles } from './styles';
import ModalDoctor from '@assets/svgs/icon-svg/ModalDoctor';
import CloseIcon from '@assets/svgs/icon-svg/CloseIcon';

interface Props {
  isModalOpen: boolean;
  close: () => void;
}

const SelectAccountModal: React.FC<Props> = ({ isModalOpen, close, t }) => {
  return (
    <View style={styles.modalViewBlock}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalOpen}
        onRequestClose={close}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={close}>
                <CloseIcon />
              </TouchableOpacity>
            </View>
            <View style={styles.modalContent}>
              <ModalDoctor />
              <View style={styles.textWrapper}>
                <Text style={styles.description}>
                  {t('account:menu:absenceAccountMess')}
                </Text>
                <Text style={styles.description}>
                  {t('account:menu:createAcountMess')}
                </Text>
              </View>
              <View style={styles.btnContainer}>
                <CustomButton
                  onPress={close}
                  style={styles.mainBtn}
                  titleStyle={styles.mainTitle}
                  title="YES"
                />
                <CustomButton
                  onPress={close}
                  style={styles.secondBtn}
                  title="NO"
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const mapStateToProps = (state: any) => ({});

export default connect(
  mapStateToProps,
  {},
)(withTranslation(['account', 'common', 'validation'])(SelectAccountModal));
