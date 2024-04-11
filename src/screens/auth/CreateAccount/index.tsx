import React, { memo, useCallback } from 'react';
import {
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../utils/size';
import FONTS from '../../../utils/fonts';
import { widthScreen } from '../../../utils/dimensions';
import SvgSmallHeart from '@assets/svgs/ForgotPassword/SvgSmallHeart';
import SvgAdd from '@assets/svgs/CreateAccount/SvgAdd';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import InputButton from '@screens/auth/CreateAccount/components/InputButton';
import ROUTES from '../../../utils/routes';
import SvgAvatar from '@assets/svgs/CreateAccount/SvgAvatar';
import { useNavigation } from '@react-navigation/native';

const CreateAccount = memo(({}) => {
  const nav = useNavigation();
  const onSkip = useCallback(() => {
    nav.navigate(ROUTES.DrawerNavigator);
  }, [nav]);

  const onFullName = useCallback(() => {
    nav.navigate(ROUTES.FullName);
  }, [nav]);

  const onGender = useCallback(() => {
    nav.navigate(ROUTES.Gender);
  }, [nav]);

  const onBirthDay = useCallback(() => {
    nav.navigate(ROUTES.BirthDay);
  }, [nav]);

  const onBlood = useCallback(() => {
    nav.navigate(ROUTES.Blood);
  }, [nav]);

  const onWeight = useCallback(() => {
    nav.navigate(ROUTES.Weight);
  }, [nav]);

  const onHeight = useCallback(() => {
    nav.navigate(ROUTES.Height);
  }, [nav]);

  const onUpdate = useCallback(() => {
    nav.navigate(ROUTES.DrawerNavigator);
  }, [nav]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SvgSmallHeart color={Color.main} />
        <Text style={styles.txtCreateAccount}>Create Account</Text>
        <TouchableOpacity
          onPress={onSkip}
          activeOpacity={0.6}
          style={styles.skipView}>
          <Text style={styles.txtSkip}>Skip!</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <InputButton onPress={onFullName} title={'Fullname'} />
        <InputButton style={styles.input} onPress={onGender} title={'Gender'} />
        <InputButton
          style={styles.input}
          onPress={onBirthDay}
          title={'Birthday'}
        />
        <InputButton style={styles.input} onPress={onBlood} title={'Blood'} />
        <InputButton style={styles.input} onPress={onWeight} title={'Weight'} />
        <InputButton style={styles.input} onPress={onHeight} title={'Height'} />
        <ButtonPrimary
          style={styles.buttonPrimacy}
          title={'Update'}
          onPress={onUpdate}
        />
      </ScrollView>
      <View style={styles.avatar}>
        <View>
          <SvgAvatar />
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.addView}>
          <SvgAdd />
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default CreateAccount;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.main,
  },
  header: {
    width: widthScreen,
    flexDirection: 'row',
    paddingTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(12)
        : scaleHeight(12),
    paddingBottom: scaleHeight(85),
    paddingLeft: scaleWidth(16),
    paddingRight: scaleWidth(24),
    alignItems: 'center',
    backgroundColor: Color.secondBlue,
    borderBottomRightRadius: scaleHeight(24),
    borderBottomLeftRadius: scaleHeight(24),
    justifyContent: 'space-between',
  },
  txtSkip: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(12),
    color: Color.third,
    textTransform: 'uppercase',
  },
  skipView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scaleWidth(48),
    height: scaleHeight(48),
  },
  txtCreateAccount: {
    fontFamily: FONTS.HIND.Regular,
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(20),
    color: Color.main,
  },
  avatar: {
    width: scaleWidth(80),
    height: scaleWidth(80),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(100)
        : scaleHeight(100),
    borderWidth: scaleWidth(2),
    borderRadius: scaleWidth(40),
    borderColor: Color.main,
    shadowOffset: { height: 0, width: 4 },
    shadowRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 0.25,
    backgroundColor: Color.main,
  },
  addView: {
    backgroundColor: Color.oldBurgundy,
    height: scaleHeight(32),
    width: scaleHeight(32),
    borderRadius: scaleHeight(16),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: Platform.OS === 'ios' ? scaleHeight(50) : scaleHeight(52),
    right: scaleWidth(0),
  },
  input: {
    marginTop: scaleHeight(24),
  },
  buttonView: {
    position: 'absolute',
    paddingBottom: getBottomSpace() + scaleHeight(24),
    width: widthScreen,
    bottom: 0,
    alignItems: 'center',
    paddingTop: scaleHeight(12),
    backgroundColor: Color.main,
  },
  buttonPrimacy: {
    width: scaleWidth(295),
    alignSelf: 'center',
    marginTop: scaleHeight(69),
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(71),
    paddingBottom: getBottomSpace() + scaleHeight(24),
  },
});
