import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../utils/GlobalStyles';

const StaticsHealth = memo(() => {
  return (
    <View style={styles.container}>
      <Text>StaticsHealth</Text>
    </View>
  );
});
export default StaticsHealth;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.pageBackground,
  },
});
