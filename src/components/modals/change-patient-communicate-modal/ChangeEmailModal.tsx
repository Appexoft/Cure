import React, { useState } from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
} from 'react-native';
import { Color, FontSize, Margin } from '../../../utils/GlobalStyles';
import fonts from '../../../utils/fonts';
import { useTranslation } from 'react-i18next';
import { scaleHeight, scaleWidth } from '../../../utils/size';
import ChangeEmailScreen from './screens/ChangeEmailScreen';
import SucceedChangedEmail from './screens/SucceedChangedEmailScreen';
import SendCodeScreen from './screens/SendCodeScreen';

const ChangeEmailModal = ({ setVisible, visible }) => {
  const { t } = useTranslation();
  const [modalType, setModalType] = useState('changeInfo');
  const [email, setEmail] = useState('');

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <TouchableWithoutFeedback
        onPress={() => (setVisible(false), setModalType('changeInfo'))}>
        <View style={styles.container}>
          {modalType === 'changeInfo' ? (
            <ChangeEmailScreen
              setEmail={setEmail}
              email={email}
              setModalType={setModalType}
            />
          ) : modalType === 'sendOTP' ? (
            <SendCodeScreen setModalType={setModalType} />
          ) : (
            <SucceedChangedEmail
              setModalType={setModalType}
              setVisible={setVisible}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  headText: {
    marginTop: scaleHeight(Margin.m_6xl),
    fontFamily: fonts.URBANIST.Regular,
    color: Color.text,
    fontWeight: '600',
    fontSize: FontSize.headingModalTitle_size,
  },
  subHeadText: {
    marginTop: scaleHeight(Margin.m_10),
    marginBottom: scaleHeight(Margin.m_10),
    fontFamily: fonts.URBANIST.Regular,
    color: Color.text,
    fontWeight: '600',
    fontSize: FontSize.fontH5,
    textAlign: 'center',
  },
  btnViewStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
    marginBottom: scaleHeight(50),
    marginRight: scaleWidth(30),
    marginLeft: scaleWidth(30),
  },
  btnSave: {
    textTransform: 'capitalize',
  },
});

export default ChangeEmailModal;
