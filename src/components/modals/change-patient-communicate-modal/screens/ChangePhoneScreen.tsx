import React, { useState } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import {
  BorderRadius,
  Color,
  FontSize,
  Margin,
  Sizes,
} from '../../../../utils/GlobalStyles';
import fonts from '../../../../utils/fonts';
import { useTranslation } from 'react-i18next';
import TextInputCustom from '@components/input/TextInputCustom';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import { Auth } from 'aws-amplify';
import useAuth from '@screens/auth/authContext/useAuth';
import { validatePhoneNumber } from '../../../../utils/validations/FormValidations';
import PhoneInput from 'react-native-phone-input';

interface Props {
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
}

const ChangePhoneScreen: React.FC<Props> = ({
  setModalType,
  setPhone,
  phone,
}) => {
  const { t } = useTranslation();

  async function handleChangePhoneNumber() {
    const user = await Auth.currentAuthenticatedUser();
    const result = await Auth.updateUserAttributes(user, {
      phone_number: phone,
    });
    console.log(result);
    setModalType('sendOTP');
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
            'account:communicationInformation:changePhoneInfo:changePhoneText1',
          )}
        </Text>

        <PhoneInput
          style={styles.phoneInput}
          initialCountry={'us'}
          initialValue={phone}
          autoFormat
          onChangePhoneNumber={(phone) =>
            setPhone('+' + phone.replace(/\D/g, ''))
          }
          textProps={{
            placeholder: 'Enter a phone number...',
          }}
        />
        <View style={styles.btnViewStyle}>
          <ButtonPrimary
            disabled={phone.length <= 10}
            titleStyle={styles.btnSave}
            title={t('common:save')}
            onPress={() => handleChangePhoneNumber()}
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
  phoneInput: {
    marginTop: scaleHeight(10),
    borderWidth: 1,
    borderRadius: scaleWidth(10),
    paddingVertical: scaleHeight(10),
    paddingHorizontal: scaleWidth(10),
    borderColor: Color.border,
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

export default ChangePhoneScreen;
