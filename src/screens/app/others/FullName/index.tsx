import React, { memo, useCallback, useState } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import { Color } from '../../../../utils/GlobalStyles';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import TextInputCustom from '@components/input/TextInputCustom';
import { useNavigation } from '@react-navigation/native';
import ROUTES from '../../../../utils/routes';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const FullName = memo(() => {
  const navigation = useNavigation();

  const onGender = useCallback(() => {
    navigation.navigate(ROUTES.Gender);
  }, [navigation]);

  const [fullName, setFullName] = useState('No13design');

  return (
    <KeyboardAwareScrollView bounces={false} style={styles.container}>
      <TextInputCustom
        value={fullName}
        style={styles.input}
        placeholder={'Full Name'}
      />
      <ButtonPrimary
        style={styles.buttonPrimacy}
        title={'Next'}
        onPress={onGender}
      />
    </KeyboardAwareScrollView>
  );
});

export default FullName;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.main,
  },
  buttonPrimacy: {
    width: scaleWidth(295),
    alignSelf: 'center',
    marginTop: scaleHeight(32),
  },
  input: {
    marginTop: scaleHeight(40),
  },
});
