import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import FONTS from '../../../../../utils/fonts';
import SvgRightArrow from '@assets/svgs/SvgRightArrow';

interface Props {
  Svg?: any;
  title?: string;
  description?: string;
  onPress?: any;
}

const DrugButton = (props: Props) => {
  const { Svg, title, description, onPress } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.boxView}>{Svg}</View>
      <View>
        <Text style={styles.txtTitle}>{title}</Text>
        <Text style={styles.txtDescription}>{description}</Text>
      </View>
      <SvgRightArrow style={styles.svgArrow} color={Color.dimgray} />
    </TouchableOpacity>
  );
};

export default DrugButton;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.main,
    marginHorizontal: scaleWidth(16),
    marginBottom: scaleHeight(24),
    paddingVertical: scaleHeight(24),
    paddingLeft: scaleWidth(24),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: scaleWidth(16),
    height: scaleHeight(104),
  },
  boxView: {
    width: scaleWidth(56),
    height: scaleWidth(56),
    borderRadius: scaleHeight(16),
    backgroundColor: Color.pageBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaleWidth(16),
  },
  txtTitle: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: Color.semiBlack,
    textTransform: 'uppercase',
  },
  txtDescription: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: Color.dimgray,
    marginTop: scaleHeight(3),
  },
  svgArrow: {
    position: 'absolute',
    right: scaleWidth(16),
  },
});
