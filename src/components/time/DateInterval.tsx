import * as React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import {
  Margin,
  Border,
  Color,
  Padding,
  FontSize,
  FontFamily,
} from '../../utils/GlobalStyles';
import {
  getDateDistanceToNowPretty,
  getDateInterval,
} from '../../utils/fhir/fhirTypes';
import Fonts from '../../utils/fonts';
import { ShortLine } from '@components/line/ShortLine';
import { commonStyles } from '../../utils/styles/commonStyles';

type TimeLineType = {
  startDate: Date;
  endDate: Date;
};

const DateInterval = ({ startDate, endDate }: TimeLineType) => {
  return (
    <View style={[styles.contents]}>
      <ShortLine
        icon={'calendar'}
        text={getDateInterval(startDate, endDate)}
        bgColorStyle={commonStyles.colorPastel2}
        iconColor={Color.gray_300} 
        secondText={
          startDate ? getDateDistanceToNowPretty(new Date(startDate)) : ''
        }
        secondIcon={'clock'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  ml8: {
    marginLeft: Margin.m_2xs,
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconWrapper: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colourPastel2,
    padding: Padding.p_8xs,
    flexDirection: 'row',
  },
  time: {
    fontSize: FontSize.fontH5,
    lineHeight: 18,
    fontWeight: '500',
    fontFamily: Fonts.URBANIST.Regular,
    color: Color.dimgray_200,
    textAlign: 'left',
  },
});

export default DateInterval;
