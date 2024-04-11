import React, { useEffect, useState } from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import { Color, FontSize, Margin, Sizes } from '../../../../utils/GlobalStyles';
import fonts from '../../../../utils/fonts';
import { useTranslation } from 'react-i18next';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import CodeInput from '@components/CodeInput';
import { Auth } from 'aws-amplify';
import useAuth from '@screens/auth/authContext/useAuth';

interface Props {
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
}

const SendOtpScreen: React.FC<Props> = ({ setModalType, phone }) => {
  const { t } = useTranslation();
  const { handleUpdatePhone } = useAuth();
  const [otp, setOtp] = useState('');

  async function handleSendOtp() {
    try {
      await Auth.verifyCurrentUserAttributeSubmit('phone_number', otp);
      console.log('phone verified');
      const user = await Auth.currentAuthenticatedUser();
      const { email, family_name, given_name } = user?.attributes;
      handleUpdatePhone(given_name, family_name, email, phone);
      setModalType('success');
    } catch (err) {
      console.log('failed with error', err);
    }
  }

  return (
    <TouchableWithoutFeedback>
      <View style={styles.modalContainer}>
        <Image
          resizeMode="cover"
          source={require('../../../../assets/ChangePhone/ChangePhone.png')}
        />
        <Text style={styles.headText}>
          {t('account:communicationInformation:changePhoneInfo:changePhone')}
        </Text>
        <Text style={styles.subHeadText}>
          {t(
            'account:communicationInformation:changePhoneInfo:changePhoneText2',
          )}
        </Text>

        <CodeInput sellCount={6} onCodeEntered={(code) => setOtp(code)} />

        <View style={styles.btnViewStyle}>
          <ButtonPrimary
            disabled={otp.length < 6}
            titleStyle={styles.btnSave}
            title={t('common:save')}
            onPress={() => handleSendOtp()}
          />
        </View>
        <View style={styles.btnViewStyle}>
          <ButtonPrimary
            titleStyle={styles.btnSave}
            title={t('common:resend')}
            onPress={() => {}}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: Sizes.modal_width,
    height: Sizes.modal_height,
    backgroundColor: Color.white,
    paddingTop: scaleHeight(70),
    borderRadius: scaleWidth(10),
    paddingHorizontal: scaleWidth(30),
    alignItems: 'center',
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
    marginBottom: scaleHeight(10),
    marginRight: scaleWidth(30),
    marginLeft: scaleWidth(30),
  },
  btnSave: {
    textTransform: 'capitalize',
  },
});

export default SendOtpScreen;
