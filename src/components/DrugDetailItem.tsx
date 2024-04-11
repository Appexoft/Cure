import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../utils/size';
import FONTS from '../utils/fonts';

interface Props {
  title?: string;
  description?: string;
}

const DrugDetailItem = memo((props: Props) => {
  const { title, description } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>{title}</Text>
      <Text style={styles.txtDescription}>{description}</Text>
    </View>
  );
});

export default DrugDetailItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Color.main,
    borderRadius: scaleWidth(8),
    paddingVertical: scaleHeight(16),
    paddingHorizontal: scaleWidth(16),
    marginBottom: scaleHeight(24),
  },
  txtTitle: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    textTransform: 'uppercase',
    color: Color.semiBlack,
  },
  txtDescription: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: Color.dimgray,
    marginTop: scaleHeight(9),
  },
});
