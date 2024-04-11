import React from 'react';
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { scaleHeight, scaleWidth } from '../../utils/size';
import { FontSize } from '../../utils/GlobalStyles';
import { useTranslation } from 'react-i18next';

function ModalHeader(props: {
  title: string;
  subtitle: string;
  hideCloseIcon?: boolean;
  onPress: () => any;
}) {
  const { t } = useTranslation();

  return (
    <>
      {!props.hideCloseIcon && (
        <TouchableOpacity style={styles.closeIcon} onPress={props.onPress}>
          <Icon size={25} name="x" />
        </TouchableOpacity>
      )}

      <View>
        <Text
          style={{
            marginTop: scaleHeight(5),
            textAlign: 'center',
            fontSize: FontSize.fontH3,
            fontWeight: '600',
          }}>
          {props.title}
        </Text>
        <Text style={{ textAlign: 'center', marginTop: scaleHeight(10) }}>
          {props.subtitle}
        </Text>
      </View>
    </>
  );
}

export default ModalHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeIcon: {
    alignSelf: 'flex-end',
  },
});
