import React, { memo } from 'react';
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../utils/size';
import { Color } from '../utils/GlobalStyles';
import FONTS from '../utils/fonts';
import SvgRightArrow from '@assets/svgs/SvgRightArrow';

interface Props {
  title: string;
  style?: ViewStyle;
  Svg?: React.ReactNode;
  onPress?: () => void;
}

const TopicItem: React.FC<Props> = memo(({ Svg, title, onPress, style }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.container]}>
      <View style={[styles.svgView, style]}>{Svg}</View>
      <Text style={styles.txtTitle}>{title}</Text>
      <SvgRightArrow style={styles.svg} />
    </TouchableOpacity>
  );
});

export default TopicItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Color.white,
    borderRadius: scaleWidth(16),
    paddingLeft: scaleWidth(10),
    paddingVertical: scaleHeight(10),
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: scaleWidth(16),
    marginBottom: scaleHeight(5),
  },
  svgView: {
    width: scaleWidth(32),
    height: scaleWidth(32),
    borderRadius: scaleWidth(16),
    marginRight: scaleHeight(16),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.pageBackground,
  },
  txtTitle: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(16),
    color: Color.semiBlack,
  },
  svg: {
    position: 'absolute',
    right: scaleWidth(21),
  },
});
