import React, { memo } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleWidth } from '../../../../utils/size';
import { BorderRadius, Color } from '../../../../utils/GlobalStyles';

const PatientHeaderBackground = memo(() => {
  return <View style={styles.headerBackground} />;
});

export default PatientHeaderBackground;

const styles = ScaledSheet.create({
  headerBackground: {
    flex: 1,
    backgroundColor: Color.white,
    borderBottomLeftRadius: scaleWidth(BorderRadius.medium),
    borderBottomRightRadius: scaleWidth(BorderRadius.medium),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 50,
  },
});
