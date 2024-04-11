import React from 'react';
import { View, Text, Image, RegisteredStyle } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import FONTS from '../../../../../utils/fonts';
import { Color } from '../../../../../utils/GlobalStyles';

interface Props {
  style?: RegisteredStyle<any>;
  imgDoctor?: any;
  title?: string;
  description?: string;
  Svg?: any;
}

const StaticsHealthItem = (props: Props) => {
  const { style, imgDoctor, Svg, title, description } = props;
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.txtTitle}>{title}</Text>
      <Text style={styles.txtDesciprion}>{description}</Text>
      {imgDoctor && <Image style={styles.imgDoctor} source={imgDoctor} />}
      {Svg && <View style={styles.svgDoctor}>{Svg}</View>}
    </View>
  );
};

export default StaticsHealthItem;

const styles = ScaledSheet.create({
  container: {
    width: scaleWidth(343),
    height: scaleHeight(99),
    paddingLeft: scaleWidth(36),
    paddingTop: scaleHeight(21),
    backgroundColor: Color.orange,
    borderRadius: scaleWidth(16),
    marginHorizontal: scaleWidth(16),
    marginBottom: scaleHeight(16),
  },
  imgDoctor: {
    width: scaleWidth(56),
    height: scaleWidth(70),
    position: 'absolute',
    right: scaleWidth(36),
    bottom: 0,
  },
  svgDoctor: {
    position: 'absolute',
    right: scaleWidth(36),
    bottom: 0,
  },
  txtTitle: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(32),
    color: Color.main,
  },
  txtDesciprion: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '600',
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(18),
    color: Color.main,
  },
});
