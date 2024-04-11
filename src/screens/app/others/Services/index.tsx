import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../utils/GlobalStyles';

const Services = memo(() => {
  return (
    <View style={styles.container}>
      <Text>Services</Text>
    </View>
  );
});
export default Services;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.pageBackground,
  },
});
