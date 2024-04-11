import React, { useState } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import { Color, FontSize, Margin, Sizes } from '../../../../utils/GlobalStyles';
import fonts from '../../../../utils/fonts';
import { useTranslation } from 'react-i18next';
import TextInputCustom from '@components/input/TextInputCustom';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import { Auth } from 'aws-amplify';
import useAuth from '@screens/auth/authContext/useAuth';
import { validateEmail } from '../../../../utils/validations/FormValidations';

interface Props {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
  email: string;
}

const ChangeEmailScreen: React.FC<Props> = ({
  setModalType,
  setEmail,
  email,
}) => {
  const { t } = useTranslation();

  async function updateUserEmail() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(user, {
        email,
      });
      setModalType('sendOTP');
      console.log('a verification code is sent');
    } catch (err) {
      console.log('failed with error', err);
    }
  }

  return (
    <TouchableWithoutFeedback>
      <View style={styles.modalContainer}>
        <Image
          resizeMode="cover"
          source={require('../../../../assets/ChangeEmail/ChangeEmail.png')}
        />
        <Text style={styles.headText}>
          {t('account:communicationInformation:changeEmailInfo:changeEmail')}
        </Text>
        <Text style={styles.subHeadText}>
          {t(
            'account:communicationInformation:changeEmailInfo:changeEmailText1',
          )}
        </Text>

        <TextInputCustom
          label={t('account:communicationInformation:email')}
          placeholder={t('account:communicationInformation:email')}
          isEditable={true}
          value={email}
          modalInputWidth
          iconRight="edit-3"
          isMultiline
          onRawChangedText={(email) => {
            setEmail(email);
          }}
          onChangedText={(email) => {
            setEmail(email);
          }}
          validate={(text) => {
            return validateEmail(text);
          }}
          validationMsg={t('validation:emailInvalid')}
        />
        <View style={styles.btnViewStyle}>
          <ButtonPrimary
            disabled={!validateEmail(email)}
            titleStyle={styles.btnSave}
            title={t('common:save')}
            onPress={updateUserEmail}
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
    marginBottom: scaleHeight(50),
    marginRight: scaleWidth(30),
    marginLeft: scaleWidth(30),
  },
  btnSave: {
    textTransform: 'capitalize',
  },
});

export default ChangeEmailScreen;
