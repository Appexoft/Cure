import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { FlashList, FlashListProps } from '@shopify/flash-list';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { scaleHeight } from '../utils/size/index';

export function UniversalFlashList<T>(props: FlashListProps<T>) {
  return (
    <View style={styles.container}>
      <FlashList
        {...props}
        estimatedItemSize={120}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(160)
        : scaleHeight(160),
    backgroundColor: '#F5F6F7',
    paddingBottom: 16,
  },
  contentContainerStyle: {
    paddingBottom: scaleHeight(84),
  },
});
