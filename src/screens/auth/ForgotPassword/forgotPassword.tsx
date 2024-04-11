import React, { memo, useCallback, useRef, useState } from 'react';
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../utils/size';
import FONTS from '../../../utils/fonts';
import SvgSmallHeart from '@assets/svgs/ForgotPassword/SvgSmallHeart';
import SvgDelete from '@assets/svgs/ForgotPassword/SvgDelete';
import ROUTES from '../../../utils/routes';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { widthScreen } from '../../../utils/dimensions';
import SvgUser from '@assets/svgs/SignIn/SvgUser';
import {
  validateEmail,
  validateNewPassword,
  validatePassword,
} from '../../../utils/validations/FormValidations';
import TextInputCustom from '@components/input/TextInputCustom';
import CodeInput from '@components/CodeInput';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import { Auth } from '@aws-amplify/auth';
import {
  AUTH_ERROR_CODE_EXPIRED,
  handleConfirmEmailErrors,
  handleResendCodeErrors,
} from '../../../utils/error/errorHandling';
import { toastService } from '../../../services';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SvgLock from '@assets/svgs/SignIn/SvgLock';
import useAuth from '@screens/auth/authContext/useAuth';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { commonStyles } from '../../../utils/styles/commonStyles';
import Icon from 'react-native-vector-icons/Feather';

const PHASE_1 = 'PHASE_1';
const PHASE_2 = 'PHASE_2';

const ForgotPassword = memo(({}) => {
  const nav = useNavigation();
  const { t } = useTranslation();
  // change after with unstated-next
  // @ts-ignore
  const { isLoggedIn, login, logout, isLoading, setIsLoading } = useAuth();

  const [email, setEmail] = useState('');
  const refInput1 = useRef(null);
  const [code, setCode] = useState('');
  const [error, setError] = useState();
  const [phase, setPhase] = useState(PHASE_1);
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const onGoBack = useCallback(() => {
    nav.goBack();
  }, [nav]);

  const onSignIn = useCallback(() => {
    nav.navigate(ROUTES.SignIn);
  }, [nav]);

  const isSubmitBtnDisabled = () => {
    if (phase === PHASE_1) {
      return !email;
    }
    if (phase === PHASE_2) {
      return !code || (code && code.length < 6) || !password || !rePassword;
    }
  };

  /**
   * Will handle re-sending codes
   * @type {(function(): void)|*}
   */
  const onSendConfirmationCode = useCallback(() => {
    try {
      if (email) {
        setIsLoading(true);
        Auth.forgotPassword(email)
          .then((data) => {
            console.log(data);
            toastService.displayCodeSentSuccessfully();
            setPhase(PHASE_2);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
            handleResendCodeErrors(err, setError, t);
            setIsLoading(false);
          });
      }
      console.log('Code resent successfully');
    } catch (err) {
      console.log('Error resending code: ', err);
    }
  }, [email, t, setIsLoading]);

  const onChangePassword = useCallback(() => {
    try {
      if (code && rePassword && email && password) {
        setIsLoading(true);
        Auth.forgotPasswordSubmit(email, code, rePassword)
          .then((data) => {
            console.log('Resetted password successfully', data);
            login(email, password, nav, false, false);
          })
          .catch((err) => {
            console.log(err);
            handleConfirmEmailErrors(err, setError, t); // todo adjust this
            if (err && err.code && err.code === AUTH_ERROR_CODE_EXPIRED) {
              onSendConfirmationCode();
            }
            setIsLoading(false);
          });
      } else {
        console.error('Given code/password/username/rePassword is empty!');
      }
    } catch (error) {
      console.error('Error while changing password for account', error);
    }
  }, [
    code,
    email,
    login,
    nav,
    onSendConfirmationCode,
    password,
    rePassword,
    t,
    setIsLoading,
  ]);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        extraHeight={scaleHeight(100)}
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.container}>
        <TouchableOpacity onPress={onGoBack} style={styles.svgLeftArrow}>
          <Icon name="arrow-left" size={25} />
        </TouchableOpacity>
        <Image
          style={styles.imgLock}
          source={require('@assets/ForgotPassword/Lock.png')}
        />
        <Text style={styles.txtForgotPassword}>
          {t('auth:forgotPasswordLabel')}
        </Text>
        <View style={styles.formContainer}>
          {phase === PHASE_1 && (
            <>
              <View style={styles.instructionsTitleView}>
                <Text style={styles.instructionsTxtDescription}>
                  {t('auth:forgotPass:description')}
                </Text>
              </View>
              <TextInputCustom
                inputRef={refInput1}
                svg={<SvgUser />}
                placeholder={t('auth:email')}
                value={email}
                returnKeyType={'next'}
                style={styles.emailInput}
                validate={(text) => {
                  return validateEmail(text);
                }}
                validationMsg={t('validation:emailInvalid')}
                blurOnSubmit={false}
                onChangedText={setEmail}
              />
            </>
          )}
          {phase === PHASE_2 && (
            <>
              <View style={styles.instructionsTitleView}>
                <Text style={styles.instructionsTxtDescription}>
                  {t('auth:forgotPass:enterCodeAndPassDescription')}
                </Text>
              </View>

              <TextInputCustom
                style={styles.passInput}
                svg={<SvgLock />}
                placeholder={t('auth:newPassword')}
                secure={true}
                displayShowPass={true}
                value={password}
                validate={(text) => {
                  return validatePassword(text);
                }}
                onChangedText={(data) => {
                  setPassword(data);
                }}
                validationMsg={t('validation:passwordInvalid')}
              />
              <TextInputCustom
                style={styles.passInput}
                svg={<SvgLock />}
                placeholder={t('auth:repeatNewPassword')}
                secure={true}
                displayShowPass={true}
                value={rePassword}
                validate={(text) => {
                  return validateNewPassword(password, text);
                }}
                onChangedText={(data) => {
                  setRePassword(data);
                }}
                validationMsg={t('validation:passwordRepeatInvalid')}
              />
              <CodeInput
                sellCount={6}
                onCodeEntered={(data) => setCode(data)}
              />
            </>
          )}
        </View>

        <ButtonPrimary
          style={styles.confirmBtn}
          isLoading={isLoading}
          title={
            phase === PHASE_1
              ? t('auth:forgotPass:sendCode')
              : t('auth:confirm')
          }
          disabled={isSubmitBtnDisabled()}
          onPress={
            phase === PHASE_1 ? onSendConfirmationCode : onChangePassword
          }
        />
        {error && <Text style={commonStyles.validationErrorMsg}>{error}</Text>}

        <TouchableOpacity
          style={styles.ResendCodeView}
          onPress={onSendConfirmationCode}>
          <Text style={styles.txtResendCode}>{t('auth:resendCode')}</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
      <TouchableOpacity onPress={onSignIn} style={commonStyles.btnBottom}>
        <Text style={styles.txtSignIn}>{t('auth:backToSignInLabel')}</Text>
      </TouchableOpacity>
    </View>
  );
});

export default ForgotPassword;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
  },
  formContainer: {
    borderTopRightRadius: scaleWidth(24),
    borderTopLeftRadius: scaleWidth(24),
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  emailInput: {
    marginTop: scaleHeight(5),
  },
  passInput: {
    marginTop: scaleHeight(10),
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
  svgLogo: {
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(24)
        : scaleHeight(24),
    left: scaleWidth(32),
  },
  instructionsTitleView: {
    flexDirection: 'row',
    marginTop: scaleHeight(10),
    marginLeft: scaleWidth(28),
  },
  instructionsTxtDescription: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: Color.accent,
    textAlign: 'center',
    marginHorizontal: scaleWidth(60),
  },
  instructionsSecondTitleView: {
    marginTop: scaleHeight(24),
    marginLeft: scaleWidth(28),
  },
  instructionsSecondTxtDescription: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(14),
    color: Color.silverChalice,
    marginLeft: scaleWidth(24),
  },
  viewDelete: {
    position: 'absolute',
    width: scaleWidth(32),
    height: scaleHeight(32),
    borderRadius: scaleHeight(16),
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(24)
        : scaleHeight(24),
    right: scaleWidth(16),
    backgroundColor: Color.dimgray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLock: {
    marginTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(60)
        : scaleHeight(60),
    alignSelf: 'center',
    width: widthScreen / 2.05,
    height: widthScreen / 2.3,
  },
  txtForgotPassword: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(32),
    color: Color.main,
    textAlign: 'center',
    marginTop: scaleHeight(30),
  },
  txtWorry: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: Color.dimgray,
    textAlign: 'center',
    marginTop: scaleHeight(4),
    marginHorizontal: scaleWidth(50),
  },
  sendItem: {
    marginHorizontal: scaleWidth(24),
    marginTop: scaleHeight(40),
  },
  sendItem1: {
    marginHorizontal: scaleWidth(24),
    marginTop: scaleHeight(24),
  },
  signInBtn: {
    position: 'absolute',
    alignSelf: 'center',
    width: scaleWidth(200),
    height: scaleHeight(30),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: getBottomSpace() + scaleHeight(8),
  },
  txtSignIn: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(12),
    color: Color.third,
    textTransform: 'uppercase',
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
    fontFamily: FONTS.URBANIST.SemiBold,
    fontSize: scaleHeight(12),
    color: Color.third,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  codeFieldRoot: {
    marginTop: scaleHeight(5),
    marginHorizontal: scaleWidth(45),
  },
  cell: {
    width: scaleWidth(48),
    height: scaleWidth(48),
    backgroundColor: Color.pageBackground,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: FONTS.URBANIST.SemiBold,
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
