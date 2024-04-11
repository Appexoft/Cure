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
import ChangePhoneScreen from './screens/ChangePhoneScreen';
import SendOtpScreen from './screens/SendOtpScreen';
import SuccedChangedPhone from './screens/SucceedChangedPhoneScreen';

const ChangePhoneModal = ({ setVisible, visible }) => {
  const { t } = useTranslation();
  const [modalType, setModalType] = useState('changeInfo');
  const [phone, setPhone] = useState<string>('');

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
            <ChangePhoneScreen
              setPhone={setPhone}
              phone={phone}
              setModalType={setModalType}
            />
          ) : modalType === 'sendOTP' ? (
            <SendOtpScreen
              phone={phone}
              setPhone={setPhone}
              setModalType={setModalType}
            />
          ) : (
            <SuccedChangedPhone
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

export default ChangePhoneModal;
