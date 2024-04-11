import React, { memo } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../utils/size';
import { Text, View, TouchableOpacity, ViewStyle } from 'react-native';
import { Color } from '../utils/GlobalStyles';
import FONTS from '../utils/fonts';

interface Props {
  style?: ViewStyle;
  title?: string;
  time?: string;
  Svg?: React.ReactNode;
  parameter?: string;
  unitOfMeasure?: string;
  onPress?: () => void;
}

const ConditionIndexItem = memo(
  ({ style, title, time, Svg, parameter, unitOfMeasure, onPress }: Props) => {
    return (
      <View style={[styles.container, style]}>
        <View style={styles.flexRow}>
          <Text style={styles.txtTitle}>{title}</Text>
        </View>
        <Text style={styles.txtTime}>{time}</Text>
        <Text style={styles.txtParameter}>
          {parameter}
          <Text style={styles.txtUnitOfMeasure}>{unitOfMeasure}</Text>
        </Text>
        {Svg && (
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.6}
            style={styles.svgView}>
            {Svg}
          </TouchableOpacity>
        )}
      </View>
    );
  },
);

export default ConditionIndexItem;

const styles = ScaledSheet.create({
  container: {
    width: scaleWidth(170),
    paddingHorizontal: scaleWidth(24),
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtTitle: {
    fontFamily: FONTS.URBANIST.regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(20),
    fontWeight: '500',
    textTransform: 'uppercase',
    color: Color.semiBlack,
    marginTop: scaleHeight(24),
  },
  txtParameter: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(25),
    color: Color.semiBlack,
  },
  txtUnitOfMeasure: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(25),
    color: Color.semiBlack,
  },
  svgView: {
    backgroundColor: Color.secondBlue,
    borderRadius: scaleWidth(8),
    width: scaleWidth(24),
    height: scaleWidth(24),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: scaleHeight(26),
    right: scaleWidth(16),
  },
  txtTime: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    color: Color.silverChalice,
    marginBottom: scaleHeight(9),
    marginTop: scaleHeight(10),
  },
});
