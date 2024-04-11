import { StyleSheet, Text, View } from 'react-native';
import { Color, Margin } from '../../../../utils/GlobalStyles';
import * as React from 'react';
import { memo } from 'react';
import Fonts from '../../../../utils/fonts';
import { fontH4, fontH5 } from '../../../../utils/themeUtils';
import { scaleWidth } from '../../../../utils/size';
import ReviewLine from '@screens/app/common/review/ReviewLine';
import { getWrapperStyles } from '../../../../utils/entityUtils';

type Props = {
  title: string;
  reviewValue: number;
  hideReview?: boolean;
  style?: any;
};
export const TitleAndReviewLine = memo((props: Props) => {
  return (
    <View style={getWrapperStyles(styles.contents, props.style)}>
      <Text style={[styles.text]}>{props.title}</Text>
      {!props.hideReview && <ReviewLine value={props.reviewValue} />}
    </View>
  );
});

const styles = StyleSheet.create({
  contents: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: scaleWidth(4),
    flexDirection: 'row',
  },
  text: {
    color: Color.accent,
    textAlign: 'left',
    lineHeight: 18,
    fontSize: fontH5,
    fontFamily: Fonts.URBANIST.SemiBold,
  },
});

export default TitleAndReviewLine;
