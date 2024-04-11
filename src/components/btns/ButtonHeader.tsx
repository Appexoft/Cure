import React, { memo, useCallback } from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { scaleHeight, scaleWidth } from '../../utils/size';
import Icon from 'react-native-vector-icons/Feather';
import { Color, Sizes } from '../../utils/GlobalStyles';

interface ButtonHeaderProps {
  left?: boolean;
  iconName?: string;
  openModal?: any;
}

/**
 * Button used in the header of the screens
 */
const ButtonHeader: React.FC<TouchableOpacityProps & ButtonHeaderProps> = memo(
  ({ onPress, ...props }) => {
    const navigation = useNavigation();

    const onPressHandle = (e: GestureResponderEvent) => {
      if (onPress) {
        onPress(e);
      } else {
        console.log('Going back');
        navigation.goBack();
      }
    };

    return (
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={(e) =>
          props.openModal ? props.openModal() : onPressHandle(e)
        }
        {...props}>
        {props.children ? (
          props.children
        ) : (
          <Icon
            name={props.iconName ?? 'arrow-left'}
            size={Sizes.icon_bottom_bar}
            color={Color.accent}
            onPress={() => {
              console.log('Pressed');
              props.openModal ? props.openModal() : onPressHandle(null);
            }}
          />
        )}
      </TouchableOpacity>
    );
  },
);
export default ButtonHeader;

const styles = StyleSheet.create({
  btnStyle: {
    width: scaleWidth(50),
    height: scaleHeight(50),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
});
