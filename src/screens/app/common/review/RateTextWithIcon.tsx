import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SvgFillStar } from '@assets/svgs';
import { Color } from '../../../../utils/GlobalStyles';

type Props = {
  rate: number;
  style?: any;
};

export const RateTextWithIcon: React.FC<Props> = ({ rate }) => {
  return (
    <View style={styles.wrapper}>
      <SvgFillStar style={styles.iconStyles} />
      <Text style={styles.rateText}>{rate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  iconStyles: {
    marginRight: 8,
  },
  rateText: {
    color: Color.darkBlue,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
  },
});
