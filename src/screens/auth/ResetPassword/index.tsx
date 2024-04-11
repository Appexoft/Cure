import React, { memo, useCallback, useState } from 'react';
import { Platform, Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../utils/size';
import FONTS from '../../../utils/fonts';
import SvgSmallHeart from '@assets/svgs/ForgotPassword/SvgSmallHeart';
import SvgLeftArrow from '@assets/svgs/ResetPassword/SvgLeftArrow';
import TextInputCustom from '@components/input/TextInputCustom';
import SvgLock from '@assets/svgs/SignIn/SvgLock';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import { useNavigation } from '@react-navigation/native';
import ROUTES from '../../../utils/routes';
import SvgSettingPassword from '@assets/svgs/ResetPassword/SvgSettingPassword';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const ResetPassword = memo(() => {
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const navigation = useNavigation();

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onResetPasswordSuccess = useCallback(() => {
    navigation.navigate(ROUTES.ResetPasswordSuccess);
  }, [navigation]);

  return (
    <KeyboardAwareScrollView
      extraHeight={scaleHeight(100)}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      bounces={false}
      style={styles.container}>
      <SvgSmallHeart style={styles.svgLogo} />
      <TouchableOpacity onPress={onGoBack} style={styles.svgLeftArrow}>
        <SvgLeftArrow />
      </TouchableOpacity>
      <SvgSettingPassword style={styles.svg} />
      <Text style={styles.txtResetPassword}>Reset Password</Text>
      <Text style={styles.txtPlease}>
        {'Please enter your new password 🔑'}
      </Text>
      <TextInputCustom
        style={styles.txtInput}
        svg={<SvgLock />}
        placeholder={'Password'}
        secure={true}
        value={password}
      />
      <TextInputCustom
        style={styles.txtInput1}
        svg={<SvgLock />}
        placeholder={'Re-Password'}
        secure={true}
        value={rePassword}
      />
      <ButtonPrimary
        onPress={onResetPasswordSuccess}
        style={styles.buttonPrimary}
        title={'Set New Password'}
      />
    </KeyboardAwareScrollView>
  );
});

export default ResetPassword;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
  },
  contentContainerStyle: {
    paddingBottom: scaleHeight(24),
  },
  svgLogo: {
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(24)
        : scaleHeight(24),
    left: scaleWidth(48),
  },
  svgLeftArrow: {
    height: scaleHeight(40),
    width: scaleWidth(40),
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
  txtResetPassword: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    lineHeight: scaleHeight(32),
    fontSize: scaleHeight(24),
    color: Color.main,
    textAlign: 'center',
    marginTop: scaleHeight(22),
  },
  txtPlease: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    marginTop: scaleHeight(4),
    color: Color.dimgray,
    textAlign: 'center',
  },
  txtInput: {
    marginTop: scaleHeight(32),
  },
  txtInput1: {
    marginTop: scaleHeight(16),
  },
  buttonPrimary: {
    width: scaleWidth(295),
    alignSelf: 'center',
    marginTop: scaleHeight(32),
  },
});
