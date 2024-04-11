import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../../utils/GlobalStyles';
import FONTS from '../../../../../utils/fonts';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';

interface PropsServiceItem {
  svg?: any;
  title?: string;
  content?: string;
  onPress?: any;
}
const ServiceItem = (props: PropsServiceItem) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onPress}
      style={styles.serviceItem}>
      <View style={styles.svgView}>{props.svg}</View>
      <Text style={styles.txtTitle}>{props.title}</Text>
      <Text style={styles.txtContent}>{props.content}</Text>
    </TouchableOpacity>
  );
};

export default ServiceItem;

const styles = ScaledSheet.create({
  serviceItem: {
    width: scaleWidth(163),
    backgroundColor: Color.main,
    borderRadius: scaleWidth(16),
    marginLeft: scaleWidth(16),
    marginBottom: scaleHeight(17),
  },
  svgView: {
    width: scaleWidth(48),
    height: scaleWidth(48),
    borderRadius: scaleWidth(16),
    backgroundColor: Color.frame,
    marginTop: scaleHeight(14),
    marginLeft: scaleWidth(16),
    marginBottom: scaleHeight(39),
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(26),
    color: Color.oldBurgundy,
    textTransform: 'capitalize',
    marginLeft: scaleWidth(16),
  },
  txtContent: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(22),
    color: Color.silverChalice,
    textTransform: 'capitalize',
    marginLeft: scaleWidth(16),
    marginBottom: scaleHeight(17),
    marginTop: scaleHeight(3),
  },
});
