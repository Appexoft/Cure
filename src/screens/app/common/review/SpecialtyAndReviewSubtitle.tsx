import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Color, FontSize, Margin } from '../../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import { getWrapperStyles } from '../../../../utils/entityUtils';
import Fonts from '../../../../utils/fonts';
import ReviewLine from '@screens/app/common/review/ReviewLine';
import {commonStyles} from "../../../../utils/styles/commonStyles";

type Props = {
  specialty: string;
  reviewValue: number;
  style?: any;
};

const SpecialtyAndReviewSubtitle = ({
  specialty,
  reviewValue,
  style,
}: Props) => {
  return (
    <View style={getWrapperStyles(styles.contents, style)}>
      <Text style={[styles.specialty, commonStyles.mr10]}>{specialty || 'Doctor'}</Text>
      <View style={[styles.reviewWrapper]}>
        <ReviewLine value={reviewValue || 0} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  specialty: {
    color: Color.accent,
    fontSize: FontSize.fontH4,
    fontFamily: Fonts.URBANIST.Regular,
    fontWeight: '500',
    textAlign: 'center',
  },
  reviewWrapper: {
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconReview: {
    height: scaleHeight(16),
    width: scaleWidth(16),
  },
  reviewText: {
    color: Color.sandybrown_200,
    textAlign: 'left',
  },
  ml4: {
    marginLeft: Margin.m_5xs,
  },
});

export default SpecialtyAndReviewSubtitle;
