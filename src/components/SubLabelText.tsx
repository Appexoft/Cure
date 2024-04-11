import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Color } from '../utils/GlobalStyles';

type SubLabelTextProps = {
  text: string;
};

export const SubLabelText: React.FC<SubLabelTextProps> = ({ text }) => {
  return <Text style={styles.subLabel}>{text}</Text>;
};

const styles = StyleSheet.create({
  subLabel: {
    fontSize: 14,
    lineHeight: 24,
    color: Color.lightGray,
  },
});
