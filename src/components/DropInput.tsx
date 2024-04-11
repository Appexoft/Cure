import React, { memo } from 'react';
import { TouchableOpacity, Text, RegisteredStyle } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../utils/size';
import FONTS from '../utils/fonts';
import SvgArrowDown from '@assets/svgs/AddDrugs/SvgArrowDown';

interface Props {
  style?: RegisteredStyle<any>;
  title?: string;
  onPress?: () => void;
  nonArrow?: boolean;
}

const DropInput = memo((props: Props) => {
  const { title, onPress, style, nonArrow } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[styles.container, style]}>
      <Text style={styles.txtTitle}>{title}</Text>
      {nonArrow ? null : <SvgArrowDown style={styles.svgArrowDown} />}
    </TouchableOpacity>
  );
});

export default DropInput;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Color.main,
    width: scaleWidth(303),
    borderRadius: scaleWidth(24),
    height: scaleHeight(48),
    paddingLeft: scaleWidth(22),
    paddingVertical: scaleHeight(12),
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Color.line,
  },
  txtTitle: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(14),
    color: Color.dimgray,
    textTransform: 'capitalize',
  },
  svgArrowDown: {
    position: 'absolute',
    right: scaleWidth(24),
  },
});
