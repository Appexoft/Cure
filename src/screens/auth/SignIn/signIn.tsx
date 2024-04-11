import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import FONTS from '../../../utils/fonts';
import SvgUser from '@assets/svgs/SignIn/SvgUser';
import SvgLock from '@assets/svgs/SignIn/SvgLock';
import Icon from 'react-native-vector-icons/Feather';
import SvgLine from '@assets/svgs/SignIn/SvgLine';
import ROUTES from '../../../utils/routes';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import TextInputCustom from '@components/input/TextInputCustom';
import {
  getPageWidthPercent,
  scaleHeight,
  scaleWidth,
} from '../../../utils/size';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getStatusBarHeight } from '../../../utils/StatusBar';
import {
  validateEmail,
  validatePassword,
} from '../../../utils/validations/FormValidations';
import useAuth from '@screens/auth/authContext/useAuth';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Color, Margin, Sizes } from '../../../utils/GlobalStyles';
import { fontH1 } from '../../../utils/themeUtils';
import { commonStyles } from '../../../utils/styles/commonStyles';

import { Auth, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import SocialLoginButtons from '@components/SocialLoginButtons';
import { widthScreen } from '../../../utils/dimensions';
import SvgDoctor3 from '@assets/svgs/WalkThrough/SvgDoctor3';

export const SignIn = memo(({}) => {
  const nav = useNavigation();
  const { t } = useTranslation();
  const navigation = useNavigation();

  // TODO cleanup George credentials from here
  const [email, setEmail] = useState('george.platon.7@gmail.com');
  const [password, setPassword] = useState('BuddyGu@rd7');
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');
  const [changePasswordRequired, setChangePasswordRequired] = useState(false); // todo handle changing of password!!!

  const [showSignup, setShowSignup] = useState(true);

  const refInput1 = useRef<React.LegacyRef<TextInputCustom>>(null);
  const refInput2 = useRef();

  //@ts-ignore
  const { isLoggedIn, login, loginFederated, logout, isLoading, error } =
    useAuth();

  const onSignUp = useCallback(() => {
    nav.push(ROUTES.SignUp);
  }, [nav]);

  const onForgotPassword = useCallback(() => {
    nav.navigate(ROUTES.ForgotPassword);
  }, [nav]);

  const onFaceBook = () => {
    Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Facebook,
    });
  };
  const onGoogle = () => {
    Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google,
    });
  };
  const onApple = useCallback(() => {}, []);

  /**
   * Will attempt to sign in
   */
  const onSignIn = useCallback(() => {
    const emailLowercase = email.toLowerCase();
    console.log('About to login ' + emailLowercase + ' , pass: ' + password);
    if (emailLowercase !== '' && password !== '') {
      login(emailLowercase, password, nav, false, false);
    }
  }, [email, password, nav, login]);

  const onChangePassword = () => {
    throw new Error('Function not implemented.');
  };

  const [user, setUser] = useState();
  const getUser = async () => {
    return await Auth.currentAuthenticatedUser()
      .then((userData) => userData)
      .catch(() => console.log('not signed in'));
  };

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn': {
          console.log('was able to login with username/pass', data);
          getUser().then((userData) => {
            setUser(userData);
          });
          break;
        }
        case 'cognitoHostedUI': {
          getUser().then((userData) => {
            setUser(userData);
            loginFederated(userData, navigation, false, true);
          });
          break;
        }
        case 'signOut':
          setUser(null);
          logout();
          break;
        case 'signIn_failure':
          break;
      }
    });

    getUser().then((userData) => setUser(userData));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.svgBackground} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}>
        <SvgDoctor3 style={styles.svgHeaderImage} />

        <View style={[styles.contentView, commonStyles.directionRow]}>
          <View style={styles.joinTitle}>
            <Text style={styles.txtJoin}>{t('common:welcome')}</Text>
          </View>

          {!changePasswordRequired && (
            <View style={[styles.usernamePasswordWrapper, commonStyles.mt5]}>
              <TextInputCustom
                inputRef={refInput1.current}
                svg={<SvgUser />}
                placeholder={t('auth:email')}
                value={email}
                returnKeyType={'next'}
                validate={(text) => {
                  return !text || validateEmail(text);
                }}
                validationMsg={t('validation:emailInvalid')}
                blurOnSubmit={false}
                onChangedText={setEmail}
              />

              <TextInputCustom
                style={styles.inputPassword}
                inputRef={refInput2.current}
                svg={<SvgLock />}
                placeholder={t('auth:password')}
                value={password}
                secure={true}
                displayShowPass={true}
                validate={(text) => {
                  return !text || validatePassword(text);
                }}
                validationMsg={t('validation:passwordInvalid')}
                onChangedText={setPassword}
              />
            </View>
          )}

          {changePasswordRequired && (
            <>
              <Text style={styles.txtChangePassword}>
                {t('auth:changePasswordRequired')}
              </Text>
              <TextInputCustom
                style={styles.inputPassword}
                inputRef={refInput2.current}
                svg={<SvgLock />}
                placeholder={t('auth:newPassword')}
                value={newPassword}
                secure={true}
                validate={(text) => {
                  return !text || validatePassword(text);
                }}
                validationMsg={t('validation:passwordInvalid')}
                onChangedText={setNewPassword}
              />
              <TextInputCustom
                style={styles.inputPassword}
                inputRef={refInput2.current}
                svg={<SvgLock />}
                placeholder={t('auth:repeatNewPassword')}
                value={repeatNewPassword}
                secure={true}
                validate={(text) => {
                  return !text || validatePassword(text);
                }}
                validationMsg={t('validation:passwordInvalid')}
                onChangedText={setRepeatNewPassword}
              />
              {error != null && <Text style={[styles.txtError]}>{error}</Text>}
            </>
          )}

          <View>
            <ButtonPrimary
              onPress={() =>
                changePasswordRequired ? onChangePassword() : onSignIn()
              }
              style={commonStyles.btnLarge}
              title={
                changePasswordRequired
                  ? t('auth:changePasswordLabel')
                  : t('auth:signInLabel')
              }
              isError={error !== null}
              isLoading={isLoading}
              errorMsg={
                changePasswordRequired
                  ? t('auth:failedToChangePass')
                  : t('validation:failedToLogin')
              }
            />
            <TouchableOpacity
              onPress={onForgotPassword}
              style={styles.forgotPasswordView}>
              <Text style={styles.txtForgotPassword}>
                {t('auth:forgotPasswordLabel')}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.lineView}>
            <SvgLine />
            <Text style={styles.txtOr}>{t('auth:orSignInWith')} </Text>
            <SvgLine />
          </View>

          <SocialLoginButtons
            onFacebookPress={onFaceBook}
            onGooglePress={onGoogle}
            onApplePress={onApple}
          />
        </View>
      </KeyboardAwareScrollView>
      {showSignup && (
        <TouchableOpacity onPress={onSignUp} style={commonStyles.btnBottom}>
          <Text style={styles.txtSignUp}>{t('auth:signUpLabel')}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
});

export default SignIn;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
  },
  svgBackground: {
    backgroundColor: Color.pastel8,
    position: 'absolute',
    width: widthScreen,
    height: getPageWidthPercent(30),
  },
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + scaleHeight(24),
  },
  svgHeaderImage: {
    alignSelf: 'center',
    marginTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight(true) + scaleHeight(40)
        : scaleHeight(40),
    marginBottom: scaleHeight(-40),
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
  txtJoin: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(28),
    color: Color.black,
  },
  usernamePasswordWrapper: {
    width: Sizes.input_size,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgLogo: {
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight(true) + scaleHeight(32)
        : scaleHeight(32),
    left: scaleWidth(40),
  },
  txtWelcome: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: fontH1,
    lineHeight: scaleHeight(48),
    color: Color.accent,
    marginTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight(true) + scaleHeight(60)
        : scaleHeight(60),
    marginLeft: scaleWidth(40),
    marginBottom: scaleHeight(30),
  },
  inputPassword: {
    marginTop: scaleHeight(Margin.between_entries),
  },
  signInWithPasswordView: {
    flexDirection: 'row',
    width: scaleWidth(320),
    alignItems: 'center',
    alignSelf: 'center',
    paddingRight: 50,
    justifyContent: 'space-between',
    marginTop: scaleHeight(25),
  },
  viewFaceId: {
    width: scaleWidth(45),
    height: scaleHeight(45),
    borderRadius: scaleHeight(16),
    backgroundColor: Color.third,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  txtChangePassword: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: scaleHeight(12),
    color: Color.main,
    textTransform: 'uppercase',
  },
  forgotPasswordView: {
    marginTop: scaleHeight(10),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtForgotPassword: {
    fontFamily: FONTS.URBANIST.Bold,
    fontWeight: '800',
    fontSize: scaleHeight(12),
    color: Color.gray_200,
    textTransform: 'uppercase',
  },
  txtError: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: scaleHeight(10),
    paddingTop: scaleHeight(1),
    fontSize: scaleWidth(14),
    color: Color.error,
    width: scaleWidth(300),
  },
  txtOr: {
    marginTop: scaleHeight(-30),
    marginBottom: scaleHeight(10),
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(16),
    color: Color.dimgray,
    alignSelf: 'center',
  },
  lineView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scaleWidth(40),
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: scaleHeight(25),
  },
  bottomView: {
    flexDirection: 'row',
    marginHorizontal: scaleWidth(40),
    marginTop: scaleHeight(15),
    justifyContent: 'center',
  },
  facebookIcon: {
    width: scaleWidth(80),
    marginRight: scaleWidth(10),
    backgroundColor: Color.secondBlue,
  },
  googleIcon: {
    width: scaleWidth(80),
    marginRight: scaleWidth(10),
    backgroundColor: Color.secondRed,
  },
  appleIcon: {
    width: scaleWidth(80),
    marginRight: scaleWidth(10),
    backgroundColor: Color.accent,
  },
  SignUpView: {
    position: 'absolute',
    alignSelf: 'center',
    width: scaleWidth(200),
    height: scaleHeight(30),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: getBottomSpace() + scaleHeight(35),
  },
  txtSignUp: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(14),
    marginTop: scaleHeight(4),
    color: Color.main,
    textTransform: 'uppercase',
  },
});
