import React, { memo, useCallback, useState } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import SvgScale from '@assets/svgs/SvgScale';
import { Color } from '../../../../utils/GlobalStyles';
import ButtonsSecondary from '@components/btns/ButtonsSecondary';
import RLSlider from '@components/RLSlider';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import ROUTES from '../../../../utils/routes';

const Weight = memo(({ navigation }) => {
  const [enable, setEnable] = useState(false);
  const [unitOfMeasure, setUnitOfMeasure] = useState('kg');

  const onHeight = useCallback(() => {
    navigation.navigate(ROUTES.Height);
  }, [navigation]);

  const onLb = useCallback(() => {
    setEnable(true);
    setUnitOfMeasure('lb');
  }, []);
  const onKg = useCallback(() => {
    setEnable(false);
    setUnitOfMeasure('kg');
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.svgScale}>
          <SvgScale width={24} height={24} color={Color.green} />
        </View>
        <ButtonsSecondary
          enable={enable}
          labelButton1={'lb'}
          labelButton2={'kg'}
          onPressButton1={onLb}
          onPressButton2={onKg}
        />
      </View>
      <RLSlider
        ratio={10}
        unitOfMeasure={unitOfMeasure}
        minValue={0}
        maxValue={2000}
        value={2000}
      />
      <ButtonPrimary
        onPress={onHeight}
        title={'Next'}
        style={styles.buttonPrimary}
      />
    </View>
  );
});

export default Weight;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.main,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: scaleWidth(32),
    marginRight: scaleWidth(40),
    marginTop: scaleHeight(34),
    alignItems: 'center',
  },
  svgScale: {
    height: scaleWidth(48),
    width: scaleWidth(48),
    borderRadius: scaleWidth(16),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.pageBackground,
  },
  buttonPrimary: {
    width: scaleWidth(295),
    alignSelf: 'center',
    position: 'absolute',
    bottom: getBottomSpace() + scaleHeight(24),
  },
});
