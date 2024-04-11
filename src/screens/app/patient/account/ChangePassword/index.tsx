import React, { memo, useCallback, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../../utils/GlobalStyles';
import TextInputCustom from '@components/input/TextInputCustom';
import {
  validateNewPassword,
  validatePassword,
} from '../../../../../utils/validations/FormValidations';
import SvgLock from '@assets/svgs/SignIn/SvgLock';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import { useTranslation } from 'react-i18next';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import { Auth } from 'aws-amplify';
import useAuth from '@screens/auth/authContext/useAuth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ROUTES from '../../../../../utils/routes';

const ChangePassword = memo(({ navigation }) => {
  const { t } = useTranslation();
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { logout, userEntity } = useAuth();

  const handleChange = useCallback(() => {
    setLoading(true);
    Auth.currentAuthenticatedUser()
      .then((user) => {
        return Auth.changePassword(user, oldPassword, newPassword);
      })
      .then((data) => {
        setLoading(false);
        return Alert.alert(`${t('account:password:passwordChanged')}`, ``, [
          {
            text: 'OK',
            onPress: () => navigation.navigate(ROUTES.Patient_Account_Stack),
          },
        ]);
      })
      .catch((err) => {
        setLoading(false);
        return Alert.alert(``, `${t('account:password:errorMessage')}`, [
          { text: 'OK', onPress: () => {} },
        ]);
      });
  }, [oldPassword, newPassword]);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        extraHeight={scaleHeight(100)}
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.container}>
        <View style={[styles.container, { alignItems: 'center' }]}>
          <TextInputCustom
            style={styles.passwordInputStyle}
            label={t('account:password:currentPassword')}
            placeholder={t('auth:password')}
            secure={true}
            displayShowPass={true}
            value={oldPassword}
            isMultiline
            onRawChangedText={(data) => {
              setOldPassword(data);
            }}
            validate={(text) => {
              return validatePassword(text);
            }}
            onChangedText={(data) => {
              setOldPassword(data);
            }}
            validationMsg={t('validation:passwordInvalid')}
          />
          <TextInputCustom
            style={styles.passwordInputStyle}
            label={t('account:password:newPassword')}
            placeholder={t('auth:password')}
            secure={true}
            displayShowPass={true}
            isMultiline
            value={newPassword}
            validate={(text) => {
              return validatePassword(text);
            }}
            onRawChangedText={(data) => {
              setNewPassword(data);
            }}
            onChangedText={(data) => {
              setNewPassword(data);
            }}
            validationMsg={t('validation:passwordInvalid')}
          />
          <TextInputCustom
            style={styles.passwordInputStyle}
            label={t('account:password:repeatPassword')}
            placeholder={t('auth:rePassword')}
            secure={true}
            displayShowPass={true}
            value={rePassword}
            validate={(text) => {
              return validateNewPassword(newPassword, text);
            }}
            isMultiline
            onChangedText={(data) => {
              setRePassword(data);
            }}
            validationMsg={t('validation:passwordRepeatInvalid')}
          />
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.btnViewStyle}>
        <ButtonPrimary
          titleStyle={styles.btnSave}
          title={t('common:save')}
          onPress={() => handleChange()}
          isLoading={loading}
        />
      </View>
    </View>
  );
});
export default ChangePassword;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
    paddingTop: scaleHeight(10),
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
