import * as React from 'react';
import StarRating from 'react-native-star-rating';
import { StyleSheet, Text, View } from 'react-native';
import { Border, Color, FontSize, Margin } from '../../../../utils/GlobalStyles';
import FONTS from '../../../../utils/fonts';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import { commonStyles } from '../../../../utils/styles/commonStyles';
import Avatar from '@screens/app/common/avatar/Avatar';
import { parseDateString } from '../../../../utils/GlobalUtils';

import {
  AvatarSizeType,
  ImageEntityType,
  ImageType,
} from '../../../../utils/entityUtils';
import { IReview } from '../../../../utils/domainEntities';

type Props = {
  resource: IReview;
};

const ReviewListItem = ({ resource }: Props) => {
  return (
    <View style={[styles.contents, styles.nameAndTimeFlexBox]}>
      <View style={styles.photo}>
        <View style={commonStyles.avatarContainer}>
          <Avatar
            entityId={resource?.authorPatient?.id}
            entityType={ImageEntityType.PATIENT} 
            type={ImageType.AVATAR_SMALL}
            size={AvatarSizeType.LIST_LARGE}
          />
          <Text style={styles.authorTitle}>{resource?.authorName}</Text>
        </View>
        <View style={styles.ml8}>
          <View style={[styles.nameAndTime, styles.nameAndTimeFlexBox]}>
            <Text style={[styles.reviewTitle, commonStyles.mb5]}>
              {resource?.title}
            </Text>
            <View style={[styles.timeReviewContainer]}>
              <Text style={[styles.weeksAgo, styles.weeksAgoTypo]}>
                {parseDateString(resource?.createdDate)}
              </Text>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={resource?.stars}
                fullStarColor={Color.starReview}
                starSize={15}
                containerStyle={styles.starContainer}
              />
            </View>

          </View>
          <Text
            style={[
              styles.reviewContent,
              commonStyles.mt8,
              styles.weeksAgoTypo,
            ]}>
            <Text>{resource?.description}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    justifyContent: 'space-between',
    paddingTop: scaleHeight(15),
    marginRight: scaleWidth(5),
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  starContainer: {
    width: scaleWidth(80),
    marginRight: scaleWidth(2),
  },

  mt4: {
    marginTop: Margin.m_5xs,
  },
  ml8: {
    marginLeft: Margin.m_2xs,
  },
  nameAndTimeFlexBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  timeReviewContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  weeksAgoTypo: {
    fontWeight: '500',
    lineHeight: 20,
    fontSize: FontSize.fontH6,
    textAlign: 'left',
    fontFamily: FONTS.URBANIST.Regular,
  },
  avatar: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.ghostwhite_200,
    width: 64,
    height: 64,
  },
  authorTitle: {
    fontSize: FontSize.fontH7,
    lineHeight: 24,
    fontWeight: '700',
    color: Color.gray_700,
    textAlign: 'left',
    fontFamily: FONTS.URBANIST.Regular,
  },
  reviewTitle: {
    fontSize: FontSize.fontH4,
    lineHeight: 20,
    fontWeight: '700',
    color: Color.gray_700,
    textAlign: 'left',
    fontFamily: FONTS.URBANIST.Regular,
  },
  weeksAgo: {
    color: Color.primaryNeutral400,
  },
  nameAndTime: {
    width: scaleWidth(230),
  },
  starReviewList: {
    width: 90,
    height: 14,
  },
  inMyLife: {
    margin: Margin.m_9xs,
  },
  reviewContent: {
    color: Color.darkgray_100,
    flex: 1,
    flexWrap: 'wrap',
  },
  reviewTitle: {
    fontWeight: '700',
    fontFamily: FONTS.URBANIST.Bold,
    color: Color.gray_300,
    flex: 1,
    flexWrap: 'wrap',
  },
  photo: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
});

export default ReviewListItem;
