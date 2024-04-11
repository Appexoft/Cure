import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { scaleHeight, scaleWidth } from '../../utils/size';
import { Color, FontSize, Padding } from '../../utils/GlobalStyles';
import { ScaledSheet } from 'react-native-size-matters';
import FONTS from '../../utils/fonts';
import { Color } from '../../utils/GlobalStyles';
import { commonStyles } from '../../utils/styles/commonStyles';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import { useTranslation } from 'react-i18next';

interface Props {
  titleButton1: string;
  titleButton2: string;
  onPressButton1: () => void;
  onPressButton2: () => void;
}

const TwoButtons = ({
  titleButton1,
  titleButton2,
  onPressButton1,
  onPressButton2,
}: Props) => {
  return (
    <View style={[styles.buttonWrapper, commonStyles.mt10]}>
      <ButtonPrimary
        style={styles.btn1}
        title={titleButton1}
        titleStyle={styles.txt1}
        onPress={onPressButton1}
      />
      <ButtonPrimary
        style={styles.btn2}
        titleStyle={styles.txt2}
        title={titleButton2}
        onPress={onPressButton2}
      />
    </View>
  );
};

export default TwoButtons;

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  btn1: {
    width: scaleWidth(150),
    marginRight: scaleWidth(10),
    backgroundColor: Color.white,
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_3xl,
    borderRadius: scaleWidth(10),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btn2: {
    width: scaleWidth(150),
    backgroundColor: Color.main,
    borderRadius: scaleWidth(10),
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_3xl,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txt1: {
    textTransform: 'capitalize',
    fontFamily: FONTS.URBANIST.Medium,
    fontSize: FontSize.fontH6,
    color: Color.primaryNeutral600,
  },
  txt2: {
    textTransform: 'capitalize',
    fontFamily: FONTS.URBANIST.Bold,
    fontSize: FontSize.fontH6,
  },
});
