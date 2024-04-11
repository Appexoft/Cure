import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Color, Margin } from '../../../../utils/GlobalStyles';
import * as React from 'react';
import { memo } from 'react';
import Fonts from '../../../../utils/fonts';
import { fontH5 } from '../../../../utils/themeUtils';
import { scaleWidth } from '../../../../utils/size';
import { getWrapperStyles } from '../../../../utils/entityUtils';
import { useTranslation } from 'react-i18next';

type Props = {
  value: number; 
  count?: number;
  style?: any;
};
export const ReviewLine = memo((props: Props) => {
  const { t } = useTranslation();
  const getReviewValue = () => {
    if (props.value !== undefined && props.value !== 0) {
      return props.value || 0;
    }
    return t('common:noReviews');
  };

  const getReviewCount = () => {
    if (props.count !== undefined && props.count !== 0) {
      return ' (' + (props.count || 0) + ' ' + t('common:reviews') + ')';
    }
    return t('common:noReviews');
  };

  return (
    <View style={getWrapperStyles(styles.contents, props.style)}>
      <>
        <Icon name="star" size={16} color={Color.starReview} />
        <Text style={[styles.textReviewValue, styles.ml5]}>
          {getReviewValue()}
        </Text>
        <Text style={[styles.textReviewCount, styles.ml5]}>
          {getReviewCount()}
        </Text>
      </>
    </View>
  );
});

const styles = StyleSheet.create({
  contents: {
    overflow: 'hidden',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ml20: {
    marginLeft: scaleWidth(Margin.m_3xl),
  },
  ml5: {
    marginLeft: scaleWidth(3),
  },
  textReviewValue: {
    color: Color.sandybrown_200,
    textAlign: 'left',
    fontWeight: '500',
    lineHeight: 18,
    fontSize: fontH5,
    fontFamily: Fonts.URBANIST.Regular,
  },
  textReviewCount: {
    color: Color.sandybrown_200,
    textAlign: 'left',
    fontWeight: '300',
    lineHeight: 18,
    fontSize: fontH5,
    fontFamily: Fonts.URBANIST.Regular,
  },
});

export default ReviewLine;
