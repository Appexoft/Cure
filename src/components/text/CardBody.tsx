import React from 'react';
import { Text } from 'react-native';
import { commonStyles } from '../../utils/styles/commonStyles';

type CardProps = {
  text: string;
};

export const CardBody: React.FC<CardProps> = ({ text }) => {
  return <Text style={commonStyles.textCardBody}>{text}</Text>;
};
