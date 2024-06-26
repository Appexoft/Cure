import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { scaleHeight, scaleWidth } from '../../utils/size';
import { Color } from '../../utils/GlobalStyles';
import { ScaledSheet } from 'react-native-size-matters';
import FONTS from '../../utils/fonts';
import {Color} from "../../utils/GlobalStyles";

interface Props {
  labelButton1?: string;
  labelButton2?: string;
  onPressButton1?: any;
  onPressButton2?: () => void;
  enable?: boolean;
}

const ButtonsSecondary = ({
  labelButton1,
  labelButton2,
  onPressButton1,
  onPressButton2,
  enable,
}: Props) => {
  const styleButton = enable ? styles.buttonActive : styles.buttonInActive;
  const styleButton1 = enable ? styles.buttonInActive : styles.buttonActive;
  const txtStyle = enable ? styles.txtInActive : styles.txtActive;
  const txtStyle1 = enable ? styles.txtActive : styles.txtInActive;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPressButton1}
        style={[styleButton, { marginRight: scaleWidth(12) }]}
        activeOpacity={1}>
        <Text style={txtStyle}>{labelButton1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressButton2}
        style={styleButton1}
        activeOpacity={1}>
        <Text style={txtStyle1}>{labelButton2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonsSecondary;

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonActive: {
    height: scaleWidth(32),
    width: scaleWidth(56),
    borderRadius: scaleWidth(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.secondBlue,
  },
  buttonInActive: {
    height: scaleWidth(32),
    width: scaleWidth(56),
    borderRadius: scaleWidth(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.pageBackground,
  },
  txtActive: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(13),
    color: '#D0C9D6',
    textTransform: 'capitalize',
  },
  txtInActive: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '600',
    fontSize: scaleHeight(14),
    color: Color.main,
    textTransform: 'capitalize',
  },
});
