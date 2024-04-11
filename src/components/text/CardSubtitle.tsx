import React from 'react';
import { Text } from 'react-native';
import { commonStyles } from '../../utils/styles/commonStyles';

type CardSubTitleProps = {
  text?: string;
};

export const CardSubtitle: React.FC<CardSubTitleProps> = ({ text }) => {
  return <Text style={commonStyles.textCardSubtitle}>{text}</Text>;
};
