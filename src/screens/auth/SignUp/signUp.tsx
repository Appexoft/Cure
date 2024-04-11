import React, { memo, useCallback, useState } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../utils/GlobalStyles';
import {
  getPageWidthPercent,
  scaleHeight,
  scaleWidth,
} from '../../../utils/size';
import FONTS from '../../../utils/fonts';
import TextInputCustom from '@components/input/TextInputCustom';
import SvgUser from '@assets/svgs/SignIn/SvgUser';
import SvgLock from '@assets/svgs/SignIn/SvgLock';
import SvgEmail from '@assets/svgs/SignUp/SvgEmail';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import ROUTES from '../../../utils/routes';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getStatusBarHeight } from '../../../utils/StatusBar';
import { widthScreen } from '../../../utils/dimensions';
import {
  validateEmail,
  validateNewPassword,
  validatePassword,
  validateValue,
} from '../../../utils/validations/FormValidations';
import { Auth } from '@aws-amplify/auth';
import { handleSignUpErrors } from '../../../utils/error/errorHandling';
import useAuth from '@screens/auth/authContext/useAuth';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { commonStyles } from '../../../utils/styles/commonStyles';
import SocialLoginButtons from '@components/SocialLoginButtons';
import SvgDoctors from '@assets/svgs/SvgDoctors';
import ReactNativePhoneInput from 'react-native-phone-input';

type Attributes = {
  email: string;
  given_name: string;
  family_name: string;
  name: string;
  phone_number?: string;
};

const SignUp = memo(({}) => {
  const nav = useNavigation();
  const { t } = useTranslation();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //@ts-ignore
  const { isLoggedIn, login, createUser, logout, isLoading, setIsLoading } =
    useAuth();

  const onSignIn = useCallback(() => {
    nav.navigate(ROUTES.SignIn);
  }, [nav]);

  const onUserCreated = () => {
    login(email, password, nav, true, false);
  };

  const onSignUp = useCallback(() => {
    const attributes: Attributes = {
      email: email,
      given_name: firstname,
      family_name: lastname,
      name: `${firstname} ${lastname}`,
    };
    if (phoneNumber) {
      attributes.phone_number = phoneNumber;
    }
    console.log(attributes);
    try {
      setError(false);
      setLoading(true);
      Auth.signUp({
        username: email,
        password: rePassword,
        attributes,
      })
        .then((response) => {
          createUser(email, email, firstname, lastname, phoneNumber);
          if (response.userConfirmed === false) {
            nav.navigate(ROUTES.VerifyEmail, {
              username: email,
              password: password,
              phoneNumber: phoneNumber,
            });
          } else {
            onUserCreated();
          }
        })
        .catch((e) => {
          handleSignUpErrors(e, setError, t);
          setLoading(false);
        });
    } catch (error) {
      console.log('error signing up:', error);
    }
  }, [
    email,
    firstname,
    lastname,
    phoneNumber,
    rePassword,
    createUser,
    nav,
    password,
    onUserCreated,
    t,
  ]);

  const onFaceBook = useCallback(() => {}, []);
  const onGoogle = useCallback(() => {}, []);
  const onApple = useCallback(() => {}, []);

  return (
    <View style={styles.container}>
      <View style={styles.svgBackground} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}>
        <SvgDoctors style={styles.svgHeaderImage} />
        <View style={[styles.contentView, commonStyles.directionRow]}>
          <View style={styles.joinTitle}>
            <Text style={styles.txtJoin}>{t('auth:join')}</Text>
          </View>
          <SocialLoginButtons
            onFacebookPress={onFaceBook}
            onGooglePress={onGoogle}
            onApplePress={onApple}
          />
          <View style={[styles.orSignWithEmailText]}>
            <Text style={styles.txtOr}>{t('auth:orSignupWith')}</Text>
          </View>

          <View style={styles.formContainer}>
            <TextInputCustom
              style={styles.txtInput1}
              svg={<SvgUser />}
              placeholder={t('auth:firstname')}
              validate={(text) => !!validateValue(text, 1)}
              value={firstname}
              onChangedText={(data) => setFirstname(data)}
              validationMsg={t('validation:firstNameInvalid')}
            />
            <TextInputCustom
              style={styles.txtInput1}
              svg={<SvgUser />}
              placeholder={t('auth:lastname')}
              validate={(text) => !!validateValue(text, 1)}
              value={lastname}
              onChangedText={(data) => setLastname(data)}
              validationMsg={t('validation:lastNameInvalid')}
            />
            <TextInputCustom
              style={styles.txtInput1}
              svg={<SvgEmail />}
              placeholder={t('auth:email')}
              validate={(text) => {
                return validateEmail(text);
              }}
              value={email}
              onChangedText={(data) => {
                setEmail(data.toLowerCase());
              }}
              validationMsg={t('validation:emailInvalid')}
            />

            <ReactNativePhoneInput
              style={styles.phoneInput}
              initialCountry={'us'}
              initialValue={phoneNumber}
              autoFormat
              onChangePhoneNumber={(phone) => {
                setPhoneNumber('+' + phone.replace(/\D/g, ''));
              }}
              textProps={{
                placeholder: t('common:phoneNumber'),
              }}
            />
            <TextInputCustom
              style={styles.txtInput1}
              svg={<SvgLock />}
              placeholder={t('auth:password')}
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
              style={styles.txtInput1}
              svg={<SvgLock />}
              placeholder={t('auth:rePassword')}
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
            <ButtonPrimary
              onPress={onSignUp}
              style={[commonStyles.btnLarge]}
              title={t('auth:signUpShortLabel')}
            />
            {error && (
              <Text style={commonStyles.validationErrorMsg}>{error}</Text>
            )}
          </View>
        </View>
      </KeyboardAwareScrollView>
      <TouchableOpacity onPress={onSignIn} style={commonStyles.btnBottom}>
        <Text style={styles.txtSignIn}>{t('auth:backToSignInLabel')}</Text>
      </TouchableOpacity>
    </View>
  );
});

export default SignUp;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
    paddingBottom: scaleHeight(100),
  },
  svgLogo: {
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight(true) + scaleHeight(14)
        : scaleHeight(14),
    left: scaleWidth(32),
  },
  svgHeaderImage: {
    alignSelf: 'center',
    marginTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight(true) - scaleHeight(52)
        : scaleHeight(20),
    marginBottom: scaleHeight(-60),
  },
  contentView: {
    backgroundColor: Color.pageBackground,
    borderTopRightRadius: scaleWidth(24),
    borderTopLeftRadius: scaleWidth(24),
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  joinTitle: {
    lineHeight: scaleHeight(25),
    marginLeft: scaleWidth(30),
    marginTop: scaleHeight(10),
    alignSelf: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  phoneInput: {
    marginTop: scaleHeight(6),
    borderWidth: 1,
    borderRadius: scaleWidth(14),
    paddingVertical: scaleHeight(10),
    paddingHorizontal: scaleWidth(10),
    borderColor: Color.border,
    backgroundColor: Color.white,
  },
  txtJoin: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(28),
    color: Color.black,
  },
  txtLogin: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '300',
    fontSize: scaleHeight(15),
    color: Color.main,
    marginLeft: scaleWidth(10),
    lineHeight: scaleHeight(32),
  },
  txtVacation: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(24),
    color: Color.semiBlack,
    marginLeft: scaleWidth(31),
    marginTop: scaleHeight(4),
  },
  signUpBtn: {
    flex: 0.2,
    height: scaleHeight(40),
  },
  txtOr: {
    marginTop: scaleHeight(-20),
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(16),
    color: Color.dimgray,
  },

  orSignWithEmailText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialSignupContainer: {
    flexDirection: 'row',
    marginHorizontal: scaleWidth(40),
    marginTop: scaleHeight(20),
    justifyContent: 'center',
  },
  formContainer: {
    justifyContent: 'center',
  },
  signInBtn: {
    position: 'absolute',
    alignSelf: 'center',
    width: scaleWidth(200),
    height: scaleHeight(30),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: getBottomSpace() + scaleHeight(25),
  },
  txtSignIn: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(12),
    color: Color.third,
    textTransform: 'uppercase',
  },
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + scaleHeight(24),
  },
  svgBackground: {
    backgroundColor: Color.pastel8,
    position: 'absolute',
    width: widthScreen,
    height: getPageWidthPercent(30),
  },
});
