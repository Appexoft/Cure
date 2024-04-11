import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Color } from '../utils/GlobalStyles';
import { PRICE_INDICATOR } from '../utils/entityUtils';

type PriceScaleProps = {
  priceScale: PRICE_INDICATOR;
};

export const PriceScale: React.FC<PriceScaleProps> = ({ priceScale }) => {
  const getPriceScale = (scale: number) => {
    return (
      <>
        <Text style={[scale >= 1 ? styles.blueSign : styles.graySign]}>$</Text>
        <Text style={[scale >= 2 ? styles.blueSign : styles.graySign]}>$</Text>
        <Text style={[scale >= 3 ? styles.blueSign : styles.graySign]}>$</Text>
      </>
    );
  };

  return (
    <View style={styles.wrapper}>
      {priceScale === PRICE_INDICATOR.CHEAP && getPriceScale(1)}
      {priceScale === PRICE_INDICATOR.AVERAGE && getPriceScale(2)}
      {priceScale === PRICE_INDICATOR.EXPENSIVE && getPriceScale(3)}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 30,
  },
  blueSign: { color: Color.third, fontWeight: 'bold' },
  graySign: { color: Color.lightGray },
});
