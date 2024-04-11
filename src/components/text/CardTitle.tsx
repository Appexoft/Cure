import React from 'react';
import { Text } from 'react-native';
import { commonStyles } from '../../utils/styles/commonStyles';

type CardTitleProps = {
  text: string;
};

export const CardTitle: React.FC<CardTitleProps> = ({ text }) => {
  return <Text style={commonStyles.textCardTitle}>{text}</Text>;
};
