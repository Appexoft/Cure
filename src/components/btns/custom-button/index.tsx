import React from 'react';
import {
  RegisteredStyle,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { Color } from '../../../utils/GlobalStyles';
import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  title?: string | React.ReactNode;
  titleStyle?: TextStyle | RegisteredStyle<any>;
  isLoading?: boolean;
  isError?: boolean;
  errorMsg?: string;
  style?: RegisteredStyle<any>;
}

export const CustomButton = ({
  onPress,
  disabled,
  isError,
  style,
  isLoading,
  titleStyle,
  title,
  errorMsg,
  ...props
}: Props) => {
  return (
    <View>
      <TouchableOpacity
        {...props}
        disabled={disabled}
        activeOpacity={disabled ? 1 : 0.5}
        onPress={(e) => {
          if (!disabled && onPress) {
            onPress(e);
          }
        }}
        style={[
          styles.button, style
        ]}>
        {isLoading ? (
          <ActivityIndicator size="small" color={Color.white} />
        ) : (
          <Text style={[styles.txtTitle, titleStyle]}>{title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
