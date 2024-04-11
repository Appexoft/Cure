import React, { memo, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import FONTS from '../../../../utils/fonts';
import { Color } from '../../../../utils/GlobalStyles';
import InputButton from '@screens/auth/CreateAccount/components/InputButton';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import ROUTES from '../../../../utils/routes';

const FindDoctors = memo(({ navigation }) => {
  const onChooseHospital = useCallback(() => {}, []);
  const onDoctor = useCallback(() => {}, []);
  const onDate = useCallback(() => {}, []);
  const onTime = useCallback(() => {}, []);

  const onFind = () => {
    navigation.navigate(ROUTES.ResultFindDoctor);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>How can we take care yourself?</Text>
      <InputButton onPress={onChooseHospital} title={'Choose Hospital'} />
      <InputButton
        style={styles.inputButton}
        onPress={onDoctor}
        title={'Doctor'}
      />
      <InputButton style={styles.inputButton} onPress={onDate} title={'Date'} />
      <InputButton style={styles.inputButton} onPress={onTime} title={'Time'} />
      <ButtonPrimary
        onPress={onFind}
        style={styles.buttonPrimacy}
        title={'Find Now'}
      />
    </View>
  );
});

export default FindDoctors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.main,
  },
  txtTitle: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontSize: scaleHeight(28),
    fontWeight: '700',
    lineHeight: scaleHeight(36),
    marginTop: scaleHeight(36),
    marginHorizontal: scaleWidth(40),
    color: Color.brown,
    marginBottom: scaleHeight(39),
  },
  inputButton: {
    marginTop: scaleHeight(24),
  },
  buttonPrimacy: {
    width: scaleWidth(295),
    alignSelf: 'center',
    marginTop: scaleHeight(79),
    position: 'absolute',
    bottom: getBottomSpace() + scaleHeight(24),
  },
});
