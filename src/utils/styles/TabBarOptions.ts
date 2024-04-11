import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { scaleHeight, scaleWidth } from '../../utils/size';
import FONTS from '../../utils/fonts';
import { Platform } from 'react-native';
import { Color, Sizes } from '../GlobalStyles';
import { scale } from 'react-native-size-matters';

export const TabBarOptions = {
  activeTintColor: Color.white,
  inactiveTintColor: Color.accent,
  activeBackgroundColor: Color.main,
  inactiveBackgroundColor: Color.white,
  tabStyle: {
    borderRadius: scaleHeight(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelStyle: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontSize: scaleHeight(Sizes.text_tab_title),
  },
  style: {
    position: 'absolute',
    top: 20,
    marginHorizontal: scaleWidth(24),
    marginBottom: scaleHeight(10),
    marginTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(74)
        : scaleHeight(74),
    borderRadius: scaleHeight(40),
    height: scaleHeight(40),
    backgroundColor: Color.white,
  },
  safeAreaInsets: {
    bottom: 0,
    top: 0,
  },
};

export const SearchTabBarOptions = {
  activeTintColor: Color.white,
  inactiveTintColor: Color.accent,
  activeBackgroundColor: Color.main,
  inactiveBackgroundColor: Color.white,
  tabStyle: {
    borderRadius: scaleHeight(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelStyle: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontSize: scaleHeight(Sizes.text_tab_title),
  },
  style: {
    position: 'absolute',
    top: 20,
    marginHorizontal: scaleWidth(24),
    marginBottom: scaleHeight(10),
    marginTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(43)
        : scaleHeight(43),
    borderRadius: scaleHeight(40),
    height: scaleHeight(40),
    backgroundColor: Color.white,
  },
  safeAreaInsets: {
    bottom: 0,
    top: 0,
  },
};
