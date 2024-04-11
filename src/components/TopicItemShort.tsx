import React, { memo } from 'react';
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../utils/size';
import { Color } from '../utils/GlobalStyles';
import FONTS from '../utils/fonts';
import SvgRightArrow from '@assets/svgs/SvgRightArrow';
interface Props {
  style?: ViewStyle;
  Svg?: React.ReactNode;
  title?: string;
  onPress?: () => void;
}

const TopicItem = memo((props: Props) => {
  const { Svg, title, onPress, style } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.container, style]}>
      <View style={styles.svgView}>{Svg}</View>
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
    flexGrow: 1,
    alignItems: 'center',
    marginHorizontal: scaleWidth(3),
    marginBottom: scaleHeight(5),
    width: scaleWidth(150),
    position: 'relative',
  },
  svgView: {
    width: scaleWidth(48),
    height: scaleWidth(48),
    borderRadius: scaleWidth(16),
    marginRight: scaleHeight(10),
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
    right: scaleWidth(50),
    marginLeft: scaleWidth(50),
  },
});
