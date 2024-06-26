import { ScrollView, Text, View } from 'react-native';
import { Color } from '../../../../../utils/GlobalStyles';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import FONTS from '../../../../../utils/fonts';
import { heightScreen } from '../../../../../utils/dimensions';

interface PlanItemProps {
  color?: string;
  svg?: any;
  price?: string;
  frequency?: string;
  description?: string[];
}

const PlanItem = (props: PlanItemProps) => {
  return (
    <View style={[styles.planItem, { backgroundColor: props.color }]}>
      <View style={styles.svg}>{props.svg}</View>
      <Text style={styles.txtPrice}>${props.price}</Text>
      <Text style={styles.txtFrequency}>{props.frequency}</Text>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        {props.description.map((item, index) => {
          return (
            <Text key={index} style={styles.txtDescription}>
              {item}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default PlanItem;

const styles = ScaledSheet.create({
  planItem: {
    width: scaleWidth(279),
    height: heightScreen / 1.73,
    borderRadius: scaleWidth(32),
    paddingBottom: scaleHeight(35),
    marginLeft: scaleWidth(4),
  },
  svg: {
    width: scaleWidth(105),
    height: scaleHeight(106),
    overflow: 'hidden',
    marginTop: scaleHeight(32),
    alignSelf: 'center',
  },
  txtPrice: {
    fontFamily: FONTS.URBANIST.Bold,
    fontSize: scaleHeight(32),
    lineHeight: scaleHeight(48),
    textAlign: 'center',
    color: Color.main,
    marginTop: scaleHeight(22),
  },
  txtFrequency: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontSize: scaleHeight(12),
    fontWeight: '600',
    lineHeight: scaleHeight(16),
    textAlign: 'center',
    color: Color.third,
    textTransform: 'uppercase',
  },
  txtDescription: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(18),
    textAlign: 'center',
    color: Color.main,
    marginBottom: scaleHeight(25),
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(40),
  },
});
