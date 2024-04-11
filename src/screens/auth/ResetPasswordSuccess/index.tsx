import React, { memo, useCallback } from 'react';
import { Platform, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../utils/size';
import FONTS from '../../../utils/fonts';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import SvgSmallHeart from '@assets/svgs/ForgotPassword/SvgSmallHeart';
import ROUTES from '../../../utils/routes';
import SvgResetSuccess from '@assets/svgs/ResetPasswordSuccess/SvgResetSuccess';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { useNavigation } from '@react-navigation/native';

const ResetPasswordSuccess = memo(({}) => {
  const nav = useNavigation();
  const onSignIn = useCallback(() => {
    nav.navigate(ROUTES.SignIn);
  }, [nav]);

  return (
    <View>
      <SvgSmallHeart style={styles.svgLogo} />
      <SvgResetSuccess style={styles.svg} />
      <Text style={styles.txtCongratulations}>Congratulations!</Text>
      <Text style={styles.txtDescription}>
        Huraaaaa!!!! your password has been updated 🎉
      </Text>
      <ButtonPrimary
        onPress={onSignIn}
        style={styles.buttonPrimary}
        title={'Back To Sign In'}
      />
    </View>
  );
});

export default ResetPasswordSuccess;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  svgLogo: {
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(24)
        : scaleHeight(24),
    left: scaleWidth(32),
  },
  svg: {
    alignSelf: 'center',
    marginTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(110)
        : scaleHeight(110),
  },
  txtCongratulations: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    lineHeight: scaleHeight(32),
    fontSize: scaleHeight(24),
    color: Color.main,
    textAlign: 'center',
    marginTop: scaleHeight(22),
  },
  txtDescription: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: Color.dimgray,
    textAlign: 'center',
    marginHorizontal: scaleWidth(60),
  },
  buttonPrimary: {
    width: scaleWidth(235),
    alignSelf: 'center',
    marginTop: scaleHeight(32),
  },
});
