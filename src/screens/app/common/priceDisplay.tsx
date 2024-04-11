import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { getPriceDisplay, PriceCurrency } from '../../../utils/domainEntities';
import { commonStyles } from '../../../utils/styles/commonStyles';

interface Props {
  value: number;
  currency: PriceCurrency;
}

const PriceDisplay = (props: Props) => {
  const { value, currency } = props;
  
  return (
    <View style={commonStyles.directionColumn}>
      <Text style={[styles.text]}>{getPriceDisplay(value, currency)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {},
});
export default PriceDisplay;
