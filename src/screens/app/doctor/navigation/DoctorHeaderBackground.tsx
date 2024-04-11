import React, { memo } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../utils/GlobalStyles';
import { scaleWidth } from '../../../../utils/size';
import { BorderRadius } from '../../../../utils/GlobalStyles';

const DoctorHeaderBackground = memo(() => {
  return <View style={styles.headerBackground} />;
});

export default DoctorHeaderBackground;

const styles = ScaledSheet.create({
  headerBackground: {
    flex: 1,
    backgroundColor: Color.headerDoctor,
    borderBottomLeftRadius: scaleWidth(BorderRadius.medium),
    borderBottomRightRadius: scaleWidth(BorderRadius.medium),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 50,
  },
});
