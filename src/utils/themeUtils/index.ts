import { PixelRatio, Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const realWidth = height > width ? width : height;
const realHeight = height > width ? height : width;

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const relativeWidth = (num: number) => (realWidth * num) / 100;
const relativeHeight = (num: number) => (realHeight * num) / 100;

const fontH8_XXXSmall_Base = 10; // H8
const fontH7_XXXSmall_Base = 11; // H7
const fontH6_XXSmall_Base = 12; // H6
const fontH5_XSmall_Base = 14; // H5
const fontH4_Small_Base = 16; // H4
const fontH3_Normal_Base = 18; // H3
const fontH2_Large_Base = 24; // H2 - 24
const fontH1_Large_Base = 36; // H1 - 36
const fontH0_XXLarge_Base = 28;

const isTablet = () => {
  let pixelDensity = PixelRatio.get();
  let adjustedWidth = width * pixelDensity;
  let adjustedHeight = height * pixelDensity;
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  } else {
    return (
      pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
    );
  }
};

const responsiveFontSize = (fontSize: number) => {
  let divider = isTablet() ? 600 : 375;
  return Math.round((fontSize * realWidth) / divider);
};

export const fontH8 = responsiveFontSize(fontH8_XXXSmall_Base);
export const fontH7 = responsiveFontSize(fontH7_XXXSmall_Base);
export const fontH6 = responsiveFontSize(fontH6_XXSmall_Base);
export const fontH5 = responsiveFontSize(fontH5_XSmall_Base);
export const fontH4 = responsiveFontSize(fontH4_Small_Base);
export const fontH3 = responsiveFontSize(fontH3_Normal_Base);
export const fontH2 = responsiveFontSize(fontH2_Large_Base);
export const fontH1 = responsiveFontSize(fontH1_Large_Base);
export const fontH0 = responsiveFontSize(fontH0_XXLarge_Base);

// eslint-disable-next-line no-shadow
const responsiveHeight = (height: number) => {
  if (!isTablet()) {
    return height;
  } else {
    return height + height * 0.25;
  }
};

export default {
  fontXSmall: fontH5,
  fontSmall: fontH4,
  fontNormal: fontH3,
  fontLarge: fontH2,
  fontXLarge: fontH1,
  fontXXLarge: fontH0,
  responsiveHeight,
  relativeWidth,
  relativeHeight,
  responsiveFontSize,
  APPBAR_HEIGHT,
};
