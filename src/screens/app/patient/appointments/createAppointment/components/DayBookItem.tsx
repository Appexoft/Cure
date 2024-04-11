import React, { useCallback } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../../../../../../utils/size';
import FONTS from '../../../../../../utils/fonts';
import {
  Border,
  Color,
  FontFamily,
  FontSize, Margin,
} from '../../../../../../utils/GlobalStyles';
import Fonts from '../../../../../../utils/fonts';
import {fontH5} from "../../../../../../utils/themeUtils";
import {MONTH_NAMES_SHORT, WEEK_DAY_NAMES} from "../../../../../../utils/entityUtils";

interface Props {
  id?: number;
  date: any;
  time?: string;
  onChoose?: (index: number) => void;
  active: boolean;
}

const DayBookItem = (props: Props) => {
  const { id, date, time, active, onChoose } = props;

  const onPress = useCallback(() => {
    if (!onChoose || !id) {
      return;
    }
    onChoose(id);
  }, [id, onChoose]);

  return (
    <View
      style={[
        active ? styles.cardsActive : styles.cardsInactive,
        styles.cardLayout,
      ]}>
      <Text
        style={[
          styles.dayOfWeek,
          active ? styles.cardsActive : styles.cardsInactive,
        ]}>
        {WEEK_DAY_NAMES[date?.getDay()]}
      </Text>
      <Text
        style={[
          styles.dayAndMonth,
          active ? styles.cardsActive : styles.cardsInactive,
        ]}>
        {date?.getDate() + ' ' + MONTH_NAMES_SHORT[date?.getMonth()]}
      </Text>
    </View>
  );
};
export default DayBookItem;

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: scaleHeight(10),
    paddingTop: scaleHeight(12),
    paddingBottom: scaleHeight(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaleWidth(16),
    width: scaleWidth(104),
    borderColor: Color.ghostwhite_200,
    borderWidth: scaleWidth(2),
    borderRadius: scaleWidth(12),
  },
  txtTime: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
  },

  cardsActive: {
    backgroundColor: Color.black,
    color: Color.white,
  },
  cardsInactive: {
    backgroundColor: Color.white,
    color: Color.black,
  },
  cardLayout: {
    // height: scaleHeight(72),
    width: scaleWidth(62),
    borderRadius: Border.br_xl,
    marginRight: scaleWidth(Margin.between_entries),
    paddingTop: scaleHeight(20),
    paddingBottom: scaleHeight(20),
  },
  dayAndMonth: {
    textAlign: 'center',
    color: Color.white,
    fontSize: fontH5,
    fontFamily: Fonts.URBANIST.Regular,
  },
  dayOfWeek: {
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 18,
    fontSize: FontSize.fontH3,
    fontFamily: Fonts.URBANIST.Regular,
    marginBottom: scaleHeight(5),
  },
});
