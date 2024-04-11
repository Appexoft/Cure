import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import FONTS from '../../../../../utils/fonts';
import { Color } from '../../../../../utils/GlobalStyles';

interface Props {
  onPress?: any;
  label?: string;
}

const PlanTabItem = (props: Props) => {
  const { onPress, label } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.tabStyle}
    >
      <Text style={styles.txtLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PlanTabItem;

const styles = ScaledSheet.create({
  tabStyle: {
    width: scaleWidth(109),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleWidth(20),
    backgroundColor: 'red',
    height: scaleHeight(40),
  },
  txtLabel: {
    fontFamily: FONTS.URBANIST.regular,
    fontWeight: '500',
    fontSize: scaleHeight(13),
    lineHeight: scaleHeight(18),
    color: Color.dimgray,
  },
});
