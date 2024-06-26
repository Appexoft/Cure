import React, { memo, useCallback } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import InputButton from '@screens/auth/CreateAccount/components/InputButton';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import { Color } from '../../../../utils/GlobalStyles';

const InputTestIndicators = memo(() => {
  const onDate = useCallback(() => {}, []);
  const onTime = useCallback(() => {}, []);
  const onWeight = useCallback(() => {}, []);
  return (
    <View style={styles.container}>
      <InputButton onPress={onDate} style={styles.input} title={'Date'} />
      <InputButton onPress={onTime} style={styles.inputButton} title={'Time'} />
      <InputButton onPress={onWeight} title={'Weight'} />
      <ButtonPrimary style={styles.buttonPrimary} title={'Update'} />
    </View>
  );
});

export default InputTestIndicators;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.main,
  },
  input: {
    marginTop: scaleHeight(32),
    marginBottom: scaleHeight(24),
  },
  inputButton: {
    marginBottom: scaleHeight(24),
  },
  buttonPrimary: {
    width: scaleWidth(295),
    alignSelf: 'center',
    marginTop: scaleHeight(32),
  },
});
