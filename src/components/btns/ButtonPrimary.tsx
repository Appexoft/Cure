import React, { useCallback } from 'react';
import {
  RegisteredStyle,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import FONTS from '../../utils/fonts';
import { scaleHeight, scaleWidth } from '../../utils/size';
import { ActivityIndicator } from 'react-native-paper';
import { BorderRadius, Color, Padding } from '../../utils/GlobalStyles';
import Icon from 'react-native-vector-icons/Feather';
import { commonStyles } from '../../utils/styles/commonStyles';

interface Props extends TouchableOpacityProps {
  title: string | React.ReactNode;
  titleStyle?: TextStyle | RegisteredStyle<any>;
  isLoading?: boolean;
  isError?: boolean;
  errorMsg?: string;
  iconLeft?: string;
  iconRight?: string;
}

const ButtonPrimary = ({
  onPress,
  disabled,
  isError,
  style,
  isLoading,
  titleStyle,
  title,
  errorMsg,
  iconLeft,
  iconRight,
  ...props
}: Props) => {
  const getStyles = useCallback(() => {
    if (isError) {
      return [styles.button, styles.buttonValidationError, style];
    }
    if (disabled) {
      return [styles.button, styles.buttonInactive, style];
    }
    return [styles.button, styles.buttonActive, style];
  }, [style, disabled, isError, errorMsg]);

  return (
    <View style={commonStyles.directionRow}>
      <TouchableOpacity
        {...props}
        style={getStyles()}
        disabled={disabled}
        activeOpacity={disabled ? 1 : 0.5}
        onPress={(e) => {
          if (!disabled && onPress) {
            onPress(e);
          }
        }}>
        {iconLeft && <Icon name={iconLeft} size={16} style={styles.iconLeft} />}

        {isLoading ? (
          <ActivityIndicator size="small" color={Color.white} />
        ) : (
          <Text style={[styles.txtTitle, titleStyle]}>{title}</Text>
        )}

        {/* <View style={commonStyles.directionRow}> */}
        {/* </View> */}
        {iconRight && (
          <Icon name={iconRight} size={16} style={styles.iconRight} />
        )}
      </TouchableOpacity>
      {isError && <Text style={[styles.errorMsg]}>{errorMsg}</Text>}
    </View>
  );
};

export default ButtonPrimary;

const styles = ScaledSheet.create({
  iconLeft: {
    color: Color.white,
    marginRight: scaleWidth(5),
  },
  iconRight: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    color: Color.white,
    marginLeft: scaleWidth(5),
  },
  button: {
    height: scaleHeight(40),
    borderRadius: scaleHeight(BorderRadius.button),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderColor: Color.border,
    borderWidth: 1,
    borderStyle: 'solid',
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_3xl,
    flexDirection: 'row',
  },
  buttonActive: {
    backgroundColor: Color.main,
  },
  buttonInactive: {
    backgroundColor: Color.disabled,
  },
  buttonValidationError: {
    backgroundColor: Color.error,
  },
  buttonValidationOk: {
    backgroundColor: Color.main,
  },
  txtTitle: {
    fontFamily: FONTS.URBANIST.Bold,
    fontSize: scaleHeight(14),
    textTransform: 'uppercase',
    color: Color.white,
  },
  errorMsg: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: scaleHeight(5),
    paddingTop: scaleHeight(1),
    fontSize: scaleWidth(14),
    color: Color.error,
  },
});
