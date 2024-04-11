import React, { memo } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../utils/size';
import { Text, View, ViewStyle } from 'react-native';
import { Color } from '../utils/GlobalStyles';
import FONTS from '../utils/fonts';

interface Props {
  style?: ViewStyle;
  title?: string;
  Svg?: React.ReactNode;
  parameter?: string;
  unitOfMeasure?: string;
}

const UserProfileItem = memo((props: Props) => {
  const { style, title, Svg, parameter, unitOfMeasure } = props;
  return (
    <View style={[styles.container, style]}>
      <View style={styles.flexRow}>
        <Text style={styles.txtTitle}>{title}</Text>
        <View style={styles.svgView}>{Svg}</View>
      </View>
      <Text style={styles.txtParameter}>
        {parameter} {''}
        {unitOfMeasure ? (
          <Text style={styles.txtUnitOfMeasure}>{unitOfMeasure}</Text>
        ) : null}
      </Text>
    </View>
  );
});

export default UserProfileItem;

const styles = ScaledSheet.create({
  container: {
    width: scaleWidth(170),
    height: scaleHeight(70),
    paddingHorizontal: scaleWidth(24),
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtTitle: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: Color.semiBlack,
  },
  txtParameter: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontSize: scaleHeight(20),
    color: Color.main,
    marginTop: scaleHeight(5),
  },
  txtUnitOfMeasure: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(16),
    color: Color.dimgray,
  },
  svgView: {
    backgroundColor: Color.pageBackground,
    borderRadius: scaleWidth(16),
    width: scaleWidth(25),
    height: scaleWidth(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
