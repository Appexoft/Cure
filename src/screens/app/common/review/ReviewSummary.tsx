import * as React from 'react';
import StarRating from 'react-native-star-rating';
import * as Progress from 'react-native-progress';
import { StyleSheet, Text, View } from 'react-native';
import {
  Border,
  BorderRadius,
  Color,
  FontSize,
  Margin,
  Padding,
} from '../../../../utils/GlobalStyles';
import FONTS from '../../../../utils/fonts';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import { fontH7 } from '../../../../utils/themeUtils';

type ReviewSummaryType = {
  value: string;
  countTotal: number;
  count1: number;
  count2: number;
  count3: number;
  count4: number;
  count5: number;
};

const ReviewSummary = ({
  value,
  countTotal,
  count1,
  count2,
  count3,
  count4,
  count5,
}: ReviewSummaryType) => {
  const getReviewEntry = (starValue: number, count: number) => {
    return (
      <View style={styles.reviewEntry}>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={count}
          fullStarColor={Color.starReview}
          starSize={12}
          containerStyle={styles.starContainer}
        />
        <Progress.Bar
          progress={starValue / 10}
          width={scaleWidth(100)}
          animated={false}
          color={Color.starReview}
          unfilledColor={Color.border}
          borderColor={Color.white}
          borderWidth={3}
        />
        <Text style={styles.reviewEntryText}>{starValue}</Text>
      </View>
    );
  };

  return (
    <View style={styles.contents}>
      <View style={styles.reviewCountContainer}>
        <View style={[styles.frameWrapper, styles.framePosition]}>
          <View style={[styles.frameParent, styles.framePosition]}>
            <View style={styles.wrapper}>
              <Text style={styles.text5FlexBox}>
                <Text style={styles.text6}>{value}</Text>
                <Text style={[styles.text7, styles.text7Typo]}>/5</Text>
              </Text>
            </View>
            <Text style={styles.reviewCountText}>{countTotal} Reviews</Text>
          </View>
        </View>
      </View>
      <View style={styles.reviewSummaryContainer}>
        <View style={styles.separatorLine} />
        <View style={styles.reviewSummaryEntries}>
          {getReviewEntry(count5, 5)}
          {getReviewEntry(count4, 4)}
          {getReviewEntry(count3, 3)}
          {getReviewEntry(count2, 2)}
          {getReviewEntry(count1, 1)}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    flex: 1,
    width: scaleWidth(170),
    flexDirection: 'row',
    borderRadius: BorderRadius.card,
    backgroundColor: Color.white,
    padding: Padding.p_md,
    justifyContent: 'center',
  },
  reviewCountContainer: {
    flex: 1,
  },
  reviewSummaryContainer: {
    flex: 1,
    flexDirection: 'row',
    height: scaleHeight(100),
  },
  reviewSummaryEntries: {
    flex: 1,
    flexDirection: 'column',
  },
  separatorLine: {
    backgroundColor: Color.border,
    width: 1,
    height: '100%',
    marginRight: scaleWidth(10),
    marginLeft: scaleWidth(5),
  },
  starContainer: {
    width: scaleWidth(100),
    marginRight: scaleWidth(10),
  },
  reviewEntry: {
    flex: 1,
    flexDirection: 'row',
    height: scaleHeight(15),
    marginTop: scaleHeight(8),
  },
  reviewEntryText: {
    fontSize: fontH7,
    fontFamily: FONTS.URBANIST.Regular,
    marginLeft: scaleWidth(5),
    lineHeight: scaleHeight(12),
  },
  reviewCountText: {
    fontSize: fontH7,
    fontFamily: FONTS.URBANIST.Regular,
    lineHeight: scaleHeight(12),
    marginTop: scaleHeight(3),
  },
  top: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.white,
    padding: Padding.p_md,
  },

  mt5: {
    marginTop: Margin.m_4xs,
  },
  textTypo1: {
    textAlign: 'right',
    fontWeight: '600',
    fontSize: FontSize.fontH6,
    fontFamily: FONTS.URBANIST.Regular,
    letterSpacing: 0,
    position: 'absolute',
  },
  textTypo: {
    left: 308,
    textAlign: 'right',
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '600',
    letterSpacing: 0,
    fontSize: FontSize.fontH6,
    position: 'absolute',
  },
  framePosition: {
    left: 0,
    position: 'absolute',
  },
  text7Typo: {
    fontSize: FontSize.fontH5,
    fontFamily: FONTS.URBANIST.Regular,
  },
  text5FlexBox: {
    textAlign: 'left',
    color: Color.primaryNeutral9001,
  },
  text: {
    left: 301,
    top: 0,
  },
  text1: {
    top: 22,
  },
  text2: {
    top: 45,
  },
  text3: {
    top: 68,
  },
  text4: {
    top: 91,
    left: 311,
  },
  text6: {
    fontSize: FontSize.size_9xl,
    fontWeight: '700',
    fontFamily: FONTS.URBANIST.Regular,
  },
  text7: {
    fontWeight: '500',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviews: {
    letterSpacing: 0,
    fontSize: FontSize.fontH5,
    textAlign: 'left',
    color: Color.primaryNeutral9001,
  },
  frameParent: {
    borderRadius: Border.br_2xl,
    top: 0,
  },
  frameWrapper: {
    top: 25,
    width: 71,
    height: 58,
  },
  groupChild: {
    left: 93,
    width: 1,
    top: 0,
    position: 'absolute',
    height: 106,
  },
  groupItem: {
    left: 103,
    width: 80,
    height: 104,
    top: 0,
    position: 'absolute',
  },
  groupInner: {
    top: 5,
    left: 191,
    width: 101,
    height: 96,
    position: 'absolute',
  },
});

export default ReviewSummary;
