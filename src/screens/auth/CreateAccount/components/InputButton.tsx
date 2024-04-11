import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import { Color } from '../../../../utils/GlobalStyles';
import FONTS from '../../../../utils/fonts';

interface Props extends TouchableOpacityProps {
  title: string;
}

const InputButton = ({ style, title, onPress, ...props }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      {...props}
      style={[styles.textInputHealer, style]}>
      <Text style={styles.txtTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default InputButton;

const styles = ScaledSheet.create({
  textInputHealer: {
    width: scaleWidth(295),
    height: scaleHeight(48),
    backgroundColor: Color.frame,
    borderRadius: scaleHeight(24),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    color: Color.silverChalice,
    marginLeft: scaleWidth(16),
  },
});
