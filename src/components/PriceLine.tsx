import { Image, Text, View } from 'react-native';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { Color, FontFamily, FontSize, Margin } from '../utils/GlobalStyles';
import { commonStyles } from '../utils/styles/commonStyles';
import { PriceCurrency } from '../utils/domainEntities';

interface Props {
  value?: any;
  currency?: any;
}

const PriceLine = (props: Props) => {
  const { value, currency } = props;

  const getRenderingOfCurrency = (curr: PriceCurrency) => {
    if (!curr) {
      return 'unknown';
    }
    // TODO take this from user settings
    switch (curr) {
      case PriceCurrency.USD:
        return '$';
      case PriceCurrency.EUR:
        return 'EUR';
      case PriceCurrency.RON:
        return 'RON';
      default:
        return curr.toString();
    }
  };

  return (
    <Text style={[commonStyles.textH5, commonStyles.mt10, styles.text1]}>
      {value || ''} {getRenderingOfCurrency(currency)}
    </Text>
  );
};

export default PriceLine;

const styles = ScaledSheet.create({
  hrTypo: {
    lineHeight: 18,
    fontSize: FontSize.fontH5,
    textAlign: 'left',
  },
  hrTypo1: {
    fontFamily: FontFamily.textInputError1,
    fontSize: FontSize.fontH5,
  },
  text1: {
    color: Color.colourMain,
    fontWeight: '700',
  },
  starIcon: {
    width: 18,
    height: 18,
    overflow: 'hidden',
    marginRight: Margin.m_3,
  },
  topContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
