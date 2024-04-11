/**
 * Helper class to fixing iPhoneX UI
 */
import { Dimensions, Platform } from 'react-native';

export const IOS = 'ios';

export function isIphoneX() {
  let dimen = Dimensions.get('window');
  return (
    Platform.OS === IOS &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812)
  );
}

export function isApple() {
  return Platform.OS === IOS;
}

