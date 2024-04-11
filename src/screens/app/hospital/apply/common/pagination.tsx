import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import SvgTriangleLeft from '@assets/svgs/WalkThought/SvgTriangleLeft';
import SvgTriangleRight from '@assets/svgs/WalkThought/SvgTriangleRight';
import { Color } from '../../../../../utils/GlobalStyles';
import FONTS from '../../../../../utils/fonts';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { heightScreen } from '../../../../../utils/dimensions';

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

const Pagination: React.FC<Props> = memo(({ onPrev, onNext }) => {
  return (
    <View style={styles.container}>
      <View style={styles.prevButton}>
        <TouchableOpacity onPress={onPrev}>
          <SvgTriangleLeft />
        </TouchableOpacity>
      </View>
      <View style={styles.nextButton}>
        <TouchableOpacity onPress={onNext}>
          <SvgTriangleRight />
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backGround,
  },
  content: {
    flex: 1,
    backgroundColor: Color.backGround,
  },
  txtSkip: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '600',
    fontSize: 12,
    color: Color.third,
    textTransform: 'uppercase',
  },
  dotStyle: {
    width: scaleWidth(8),
    height: scaleWidth(4),
    backgroundColor: Color.platinum,
    marginBottom: heightScreen * 0.75,
  },
  activeDotStyle: {
    backgroundColor: Color.third,
    width: scaleWidth(20),
    height: scaleHeight(4),
    marginBottom: heightScreen * 0.75,
  },
  prevButton: {
    backgroundColor: Color.third,
    width: scaleWidth(48),
    height: scaleWidth(48),
    borderRadius: scaleWidth(16),
    justifyContent: 'center',
    alignItems: 'center',
    left: 18,
    bottom: getBottomSpace(),
  },
  nextButton: {
    backgroundColor: Color.third,
    width: scaleWidth(48),
    height: scaleWidth(48),
    borderRadius: scaleWidth(16),
    justifyContent: 'center',
    alignItems: 'center',
    right: 18,
    bottom: getBottomSpace(),
  },
  doneButton: {
    backgroundColor: Color.third,
    width: scaleWidth(160),
    height: scaleWidth(48),
    borderRadius: scaleWidth(24),
    justifyContent: 'center',
    alignItems: 'center',
    right: 18,
    bottom: getBottomSpace(),
  },
});
