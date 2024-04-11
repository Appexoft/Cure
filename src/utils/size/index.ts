import { Dimensions } from 'react-native';
import { scale } from 'react-native-size-matters';
import { getStatusBarHeight } from '../StatusBar';

const { height, width } = Dimensions.get('window');

const widthDesign = 375;
const heightDesign = 812 - getStatusBarHeight(false); // 44

const widthScale = 350;
const heightScale = 680;

export const getPageWidthPercent = (percent: number) => {
  if (percent > 100) {
    return height;
  }
  if (percent < 0) {
    return 0;
  }
  return (percent * height) / 100;
};

export const getWidthByPercent = (percent: number) => {
  if (percent > 100) {
    return width;
  }
  if (percent < 0) {
    return 0;
  }
  return (percent * width) / 100;
};

export const getPageWidth = () => {
  return width;
};

export const scaleWidth = (number: number) => {
  return scale((number / widthDesign) * widthScale);
};

export const scaleHeight = (number: number) => {
  return scale((number / heightDesign) * heightScale);
};

export const sizes = {
  marginHorizontal: scaleWidth(30),
  fontSizeSubtitle: scaleHeight(18),
};
