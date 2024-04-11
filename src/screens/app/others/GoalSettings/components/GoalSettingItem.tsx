import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../../utils/GlobalStyles';
import FONTS from '../../../../../utils/fonts';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import SvgOption from '@assets/svgs/SvgOption';
import { Slider } from '@components/Slider';

interface Props {
  Svg?: any;
  title?: string;
  bpm?: number;
  percent?: number;
}

const GoalSettingItem = memo((props: Props) => {
  const { Svg, title, bpm, percent } = props;
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.setRow}>
          <View style={styles.svg}>{Svg}</View>
          <Text style={styles.txtTitle}>{title}</Text>
        </View>
        <TouchableOpacity style={styles.optionView}>
          <SvgOption />
        </TouchableOpacity>
      </View>
      <View style={styles.btmView}>
        <Text style={styles.numberBpm}>
          {bpm}
          <Text style={styles.txtBpm}>bpm</Text>
        </Text>
        <View>
          <Text style={styles.txtPercent}>{percent}%</Text>
          <Slider
            style={styles.slider}
            width={scaleWidth(100)}
            height={scaleHeight(4)}
            initialValue={percent}
            borderRadius={99}
            numberSlider={false}
            displayValue={10}
            underlyingColor={Color.line}
            borderWidth={0}
            backgroundColor={Color.third}
            isDotPrecent
          />
        </View>
      </View>
    </View>
  );
});

export default GoalSettingItem;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.main,
    borderRadius: scaleWidth(8),
    paddingHorizontal: scaleWidth(16),
    marginHorizontal: scaleWidth(16),
    paddingVertical: scaleHeight(16),
    height: scaleHeight(109),
    marginBottom: scaleHeight(24),
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  svg: {
    width: scaleWidth(24),
    height: scaleWidth(24),
    borderRadius: scaleWidth(4),
    overflow: 'hidden',
    marginRight: scaleWidth(9),
  },
  txtTitle: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(16),
    fontWeight: '500',
    lineHeight: scaleHeight(25),
    color: Color.semiBlack,
  },
  setRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionView: {
    width: scaleWidth(40),
    height: scaleHeight(40),
    alignItems: 'flex-end',
  },
  btmView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  numberBpm: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontSize: scaleHeight(32),
    fontWeight: '600',
    lineHeight: scaleHeight(51),
    color: Color.semiBlack,
  },
  txtBpm: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '400',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(48),
    color: Color.semiBlack,
  },
  slider: {
    marginBottom: scaleHeight(16),
  },
  txtPercent: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    textAlign: 'right',
    color: Color.third,
  },
});
