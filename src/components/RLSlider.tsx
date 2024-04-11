import React, { useCallback, useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../utils/size';
import { Color } from '../utils/GlobalStyles';
import SvgCircle from '@assets/svgs/SvgMainLine';
import { widthScreen } from '../utils/dimensions';
import LinearGradient from 'react-native-linear-gradient';
import FONTS from '../utils/fonts';

interface Props {
  value: number;
  unitOfMeasure: string;
  maxValue: number;
  minValue: number;
  ratio: number;
}

const RLSlider = ({
  value,
  maxValue,
  minValue,
  unitOfMeasure,
  ratio,
}: Props) => {
  const [valueScroll, setValueScroll] = useState(0);
  const [calculatedValue, setCalculatedValue] = useState(0);

  const renderLine = useCallback(() => {
    let star = [];
    for (let i = 0; i <= 1.1 * value; i++) {
      if (i === 0 || i % 5 === 0) {
        star.push(<View key={i} style={styles.longLine} />);
      } else {
        star.push(<View key={i} style={styles.shortLine} />);
      }
    }
    return star;
  }, [value]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setValueScroll(event.nativeEvent.contentOffset.y);
    if (valueScroll < minValue) {
      setCalculatedValue(minValue);
    } else if (valueScroll > maxValue) {
      setCalculatedValue(maxValue / ratio);
    } else {
      setCalculatedValue(valueScroll / ratio);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={handleScroll}
        showsVerticalScrollIndicator={false}>
        {renderLine()}
      </ScrollView>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.4)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.linearTop}
      />
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.4)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.linearBottom}
      />
      <View style={styles.mainLineView}>
        <SvgCircle />
        <Text style={styles.txtValue}>
          {calculatedValue}
          {unitOfMeasure}
        </Text>
      </View>
    </View>
  );
};
export default RLSlider;

const styles = ScaledSheet.create({
  container: {
    marginTop: scaleHeight(47),
    height: scaleHeight(445),
  },
  longLine: {
    width: scaleWidth(80),
    height: scaleHeight(1),
    borderRadius: scaleWidth(1),
    backgroundColor: Color.silverChalice,
    marginBottom: scaleHeight(9),
  },
  shortLine: {
    width: scaleWidth(48),
    height: scaleHeight(1),
    borderRadius: scaleWidth(1),
    backgroundColor: Color.silverChalice,
    marginBottom: scaleHeight(9),
  },
  mainLineView: {
    flexDirection: 'row',
    position: 'absolute',
    top: widthScreen / 2,
    alignItems: 'center',
  },
  linearTop: {
    height: scaleHeight(30),
    width: widthScreen,
    position: 'absolute',
    top: 0,
  },
  linearBottom: {
    backgroundColor: Color.main,
    height: scaleHeight(30),
    width: widthScreen,
    position: 'absolute',
    bottom: 0,
    opacity: 0.6,
  },
  txtValue: {
    fontFamily: FONTS.URBANIST.Bold,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    textAlign: 'center',
    color: Color.main,
    marginLeft: scaleWidth(30),
  },
});
