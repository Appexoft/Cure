import React, { memo } from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import FONTS from '../../../../../utils/fonts';
import StarItem from '@screens/app/others/DoctorReview/components/StarItem';

interface Props {
  avatarUser?: ImageSourcePropType;
  nameUser?: string;
  rateStar?: number;
  timeReview?: string;
  desciptionReview?: string;
}

const DoctorReviewItem = memo((props: Props) => {
  const { avatarUser, nameUser, rateStar, timeReview, desciptionReview } =
    props;

  const avatar =
    avatarUser ??
    (new Image(
      require('@assets/AppointmentCalendar/01.png'),
    ) as ImageSourcePropType);
  return (
    <View style={styles.container}>
      <View style={styles.infoView}>
        <Image source={avatar} style={styles.avatarUser} />
        <View>
          <Text style={styles.txtNameUser}>{nameUser}</Text>
          <Text style={styles.txtTimeReview}>{timeReview}</Text>
        </View>
      </View>
      <Text style={styles.txtDesciptionReview}>{desciptionReview}</Text>
      <View style={styles.starItem}>
        <StarItem rateStar={rateStar} />
      </View>
    </View>
  );
});
export default DoctorReviewItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Color.main,
    borderRadius: scaleWidth(8),
    paddingVertical: scaleHeight(16),
    paddingHorizontal: scaleWidth(24),
    marginBottom: scaleHeight(24),
    marginHorizontal: scaleWidth(24),
  },
  infoView: {
    flexDirection: 'row',
  },
  avatarUser: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(20),
    overflow: 'hidden',
    marginRight: scaleWidth(12),
  },
  txtNameUser: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: Color.semiBlack,
    textTransform: 'uppercase',
  },
  txtTimeReview: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '600',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    color: Color.silverChalice,
  },
  txtDesciptionReview: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: Color.dimgray,
    marginTop: scaleHeight(13),
  },
  starItem: {
    position: 'absolute',
    right: scaleWidth(16),
    top: scaleHeight(19),
  },
});
