import React, { memo, useCallback, useState } from 'react';
import {Text, TouchableOpacity, Platform, StatusBar} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../utils/size';
import FONTS from '../../../utils/fonts';
import SvgSmallHeart from '@assets/svgs/ForgotPassword/SvgSmallHeart';
import SvgLeftArrow from '@assets/svgs/ResetPassword/SvgLeftArrow';
import CodeInput from '@components/CodeInput';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import SvgEmail from '@assets/svgs/VerifyEmail/SvgEmail';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Auth } from '@aws-amplify/auth';
import {
  AUTH_SUCCESS,
  handleConfirmEmailErrors,
  handleResendCodeErrors,
} from '../../../utils/error/errorHandling';
import { toastService } from '../../../services';
import { ActivityIndicator } from 'react-native-paper';
import useAuth from '@screens/auth/authContext/useAuth';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { VerfiyEmailParams } from './verifyEmail.types';
import { commonStyles } from '../../../utils/styles/commonStyles';
import Icon from "react-native-vector-icons/Feather";

const VerifyEmail: React.FC = memo(({}) => {
  const nav = useNavigation();
  const route: VerfiyEmailParams = useRoute();
  const { t } = useTranslation();

  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  //@ts-ignore
  const { isLoggedIn, login, createUser, logout, isLoading } = useAuth();

  const onGoBack = useCallback(() => {
    nav.goBack();
  }, [nav]);

  const onConfirm = useCallback(() => {
    try {
      console.log('code', code);
      if (code) {
        const username = route.params.username;
        const password = route.params.password;
        if (username !== '' && password !== '') {
          setLoading(true);
          Auth.confirmSignUp(username, code)
            .then((response) => {
              // At this time the user is logged in if no MFA required
              console.log('Successfully confirmed the account', response);
              if (response === AUTH_SUCCESS) {
                login(username, password, nav, false, true);
                // createUser(username);
              }
            })
            .catch((e) => {
              console.log('Failed to confirm the account', e);
              handleConfirmEmailErrors(e, setError, t);
              setCode('');
              setLoading(false);
            });
        }
      } else {
        console.error('Given code is empty!');
      }
    } catch (error) {
      console.error('Error while confirming account', error);
    }
  }, [code, route.params?.username, route.params?.password, t, login, nav]);

  /**
   * Will handle re-sending codes
   * @type {(function(): void)|*}
   */
  const onResendCode = useCallback(() => {
    try {
      const username = route.params.username;
      setLoading(true);
      Auth.resendSignUp(username)
        .then((response) => {
          console.log(response);
          setLoading(false);
          // Display code has been sent to email
          toastService.displayCodeResentSuccessfully();
          setCode('');
        })
        .catch((e) => {
          console.log('Failed to resend the new code', e);
          handleResendCodeErrors(e, setError, t);
        });
      console.log('Code resent successfully');
    } catch (err) {
      console.log('Error resending code: ', err);
    }
  }, [route.params?.username, t]);

  return (
    <KeyboardAwareScrollView
      extraHeight={scaleHeight(100)}
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={styles.container}>
      <TouchableOpacity onPress={onGoBack} style={styles.svgLeftArrow}>
        <Icon name="arrow-left" size={25} />
      </TouchableOpacity>
      <SvgEmail style={styles.svg} />
      <Text style={styles.txtVerifyEmail}>{t('auth:verifyEmail')}</Text>
      <Text style={styles.txtPlease}>{t('auth:verifyEmailInstructions')}</Text>
      <CodeInput sellCount={6} onCodeEntered={(data) => setCode(data)} />
      {error && <Text style={commonStyles.validationErrorMsg}>{error}</Text>}
      {loading && <ActivityIndicator color={Color.main} />}
      <ButtonPrimary
        style={styles.confirmBtn}
        title={t('auth:confirm')}
        disabled={!code || (!!code && code.length < 6)}
        onPress={onConfirm}
      />
      <TouchableOpacity style={styles.ResendCodeView} onPress={onResendCode}>
        <Text style={styles.txtResendCode}>{t('auth:resendCode')}</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
});

export default VerifyEmail;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
  },
  svgLogo: {
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(24)
        : scaleHeight(24),
    left: scaleWidth(48),
  },
  svgLeftArrow: {
    height: scaleHeight(60),
    width: scaleWidth(60),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(24)
        : scaleHeight(24),
  },
  svg: {
    alignSelf: 'center',
    marginTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(60)
        : scaleHeight(60),
  },
  txtVerifyEmail: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(32),
    color: Color.main,
    textAlign: 'center',
    marginTop: scaleHeight(22),
  },
  txtPlease: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: Color.accent,
    textAlign: 'center',
    marginHorizontal: scaleWidth(60),
    marginTop: scaleHeight(4),
  },
  codeInputStyle: {
    color: Color.semiBlack,
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    borderWidth: scaleHeight(1),
    width: scaleWidth(48),
    height: scaleHeight(48),
    borderColor: Color.frame,
    borderRadius: scaleHeight(4),
  },
  containerStyle: {
    marginHorizontal: scaleHeight(45),
  },
  confirmBtn: {
    width: scaleWidth(215),
    alignSelf: 'center',
    marginTop: scaleHeight(32),
  },
  ResendCodeView: {
    alignSelf: 'center',
    width: scaleWidth(100),
    height: scaleHeight(48),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleHeight(15),
  },
  txtResendCode: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: scaleHeight(12),
    color: Color.third,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  codeFieldRoot: {
    marginTop: scaleHeight(29),
    marginHorizontal: scaleWidth(45),
  },
  cell: {
    width: scaleWidth(48),
    height: scaleWidth(48),
    backgroundColor: Color.pageBackground,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    textTransform: 'uppercase',
    paddingTop: scaleHeight(13),
    marginRight: 13,
    color: Color.semiBlack,
  },
  focusCell: {
    borderColor: Color.semiBlack,
  },
});
