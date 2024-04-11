import React from 'react';
import {
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../utils/GlobalStyles';
import FONTS from '../../utils/fonts';
import { scaleHeight, scaleWidth } from '../../utils/size';
import { ActivityIndicator } from 'react-native-paper';
import {Color} from "../../utils/GlobalStyles";

interface Props extends TouchableOpacityProps {
  title?: string;
  titleStyle?: TextStyle;
  isLoading?: boolean;
  isError?: boolean;
  errorMsg?: string;
}

const ButtonSecondary = ({
  disabled,
  onPress,
  isError,
  errorMsg,
  isLoading,
  style,
  titleStyle,
  title,
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
          styles.buttonPrimacy,
          style,
          isError
            ? styles.buttonValidationError
            : disabled
            ? styles.buttonInactive
            : styles.buttonActive,
        ]}>
        {isLoading ? (
          <ActivityIndicator size="small" color={Color.main} />
        ) : (
          <Text style={[styles.txtTitle, titleStyle]}>{title}</Text>
        )}
      </TouchableOpacity>
      {isError && <Text style={[styles.errorMsg]}>{errorMsg}</Text>}
    </View>
  );
};

export default ButtonSecondary;

const styles = ScaledSheet.create({
  buttonPrimacy: {
    height: scaleHeight(48),
    borderRadius: scaleHeight(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonActive: {
    backgroundColor: Color.secondBlue,
  },
  buttonInactive: {
    backgroundColor: Color.brown,
  },
  buttonValidationError: {
    backgroundColor: Color.secondRed,
  },
  buttonValidationOk: {
    backgroundColor: Color.third,
  },
  txtTitle: {
    fontFamily: FONTS.URBANIST.Bold,
    fontSize: scaleHeight(16),
    textTransform: 'uppercase',
    color: Color.main,
  },
  // ErrorMsg is on another View container
  errorMsg: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: scaleHeight(10),
    paddingTop: scaleHeight(1),
    fontSize: scaleWidth(14),
    color: Color.secondRed,
    width: scaleWidth(300),
  },
});
