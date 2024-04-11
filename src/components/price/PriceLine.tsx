import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Color, Margin, Padding } from '../../utils/GlobalStyles';
import { getWrapperStyles } from '../../utils/entityUtils';
import { fontH6 } from '../../utils/themeUtils';
import Fonts from '../../utils/fonts';
import { scaleHeight } from '../../utils/size';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PriceCurrency } from '../../utils/domainEntities';

type Props = {
  value?: number;
  currency?: PriceCurrency;
  style?: any;
};

export const PriceLine: React.FC<Props> = React.memo(
  ({ value, currency, style }) => {
    return (
      <View style={getWrapperStyles(styles.contents, style)}>
        <Icon name="dollar" size={12} color={Color.accent} />
        <Text style={[styles.label]}>{value + ' ' + currency}</Text>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  contents: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: scaleHeight(Margin.between_entries),
    alignSelf: 'baseline',
  },
  label: {
    padding: Padding.p_8xs,
    flexDirection: 'row',
    lineHeight: 10,
    fontSize: fontH6,
    fontWeight: '600',
    textAlign: 'left',
    fontFamily: Fonts.URBANIST.SemiBold,
    color: Color.main,
  },
});
