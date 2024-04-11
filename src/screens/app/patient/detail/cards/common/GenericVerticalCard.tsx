import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  BorderRadius,
  Color,
  FontFamily,
  FontSize,
  Margin,
  Padding,
  Sizes,
} from '../../../../../../utils/GlobalStyles';
import Avatar from '@screens/app/common/avatar/Avatar';
import { AvatarSizeType, ImageType } from '../../../../../../utils/entityUtils';
import { scaleHeight } from '../../../../../../utils/size';
import { fontH4 } from '../../../../../../utils/themeUtils';
import Fonts from '../../../../../../utils/fonts';
import SpecialtyAndReviewSubtitle from '@screens/app/common/review/SpecialtyAndReviewSubtitle';
import {
  IReviewGenericDto,
  toImageEntityType,
} from '../../../../../../utils/domainEntities';

type Props = {
  resource: IReviewGenericDto;
};

const DoctorVerticalCard = ({ resource }: Props) => {
  return (
    <View style={[styles.contents]}>
      <View style={styles.topFlexBox}>
        <Avatar
          entityId={resource?.id}
          entityType={toImageEntityType(resource?.entityType)}
          type={ImageType.AVATAR_LARGE}
          size={AvatarSizeType.HEADER}
          style={styles.avatar}
        />
        <Text style={styles.title}>{resource?.name}</Text>
        <SpecialtyAndReviewSubtitle
          specialty={resource?.qualification}
          reviewValue={resource?.starReviewValue}
          style={styles.mt2}
        />
        <Text style={[styles.description, styles.mt2, styles.location1Typo]}>
          {resource?.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    flex: 1,
    // backgroundColor: Color.white,
    width: Sizes.card_size,
    paddingBottom: Padding.card,
    // height: '100%',
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_xs,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: BorderRadius.card,
  },
  avatar: {
    marginTop: scaleHeight(10),
  },
  topFlexBox: {
    flex: 1,
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  ml4: {
    marginLeft: Margin.m_5xs,
  },
  ml20: {
    marginLeft: Margin.m_3xl,
  },
  ml5: {
    marginLeft: Margin.m_4xs,
  },
  mt2: {
    marginTop: Margin.m_7xs,
  },
  ml24: {
    marginLeft: Margin.m_4xl,
  },
  mt5: {
    marginTop: Margin.m_4xs,
  },
  textTypo1: {
    fontWeight: '500',
    fontSize: FontSize.fontH5,
    lineHeight: 18,
    fontFamily: Fonts.URBANIST.Regular,
  },
  locationFlexBox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  location1Typo: {
    // lineHeight: 20,
    fontSize: FontSize.fontH6,
    fontWeight: '500',
    textAlign: 'left',
    fontFamily: Fonts.URBANIST.Regular,
  },

  icons16pxawardLayout: {
    height: 16,
    width: 16,
  },
  textTypo: {
    fontFamily: FontFamily.textH612pxRegular,
    fontWeight: '600',
    fontSize: FontSize.fontH5,
  },
  title: {
    fontSize: fontH4,
    lineHeight: 24,
    color: Color.accent,
    textAlign: 'center',
    fontFamily: Fonts.URBANIST.Bold,
    marginTop: scaleHeight(Margin.between_title_content),
  },
  specialty: {
    color: Color.darkgray_200,
    textAlign: 'center',
  },
  text: {
    color: Color.sandybrown_200,
    textAlign: 'left',
  },
  cardsratingsummary: {
    overflow: 'hidden',
  },
  job: {
    flexDirection: 'row',
  },
  description: {
    color: Color.dimgray_400,
    width: 215,
    textAlign: 'center',
    selfAlign: 'center',
  },
  iconscustom24ptlocation: {
    overflow: 'hidden',
  },
  location1: {
    color: Color.darkslateblue_200,
  },
  componentslocationsmall: {
    display: 'none',
    overflow: 'hidden',
  },
  text1: {
    color: Color.dodgerblue_200,
    display: 'none',
    lineHeight: 18,
    fontFamily: FontFamily.textH612pxRegular,
    fontWeight: '600',
    textAlign: 'left',
  },
  avatarIcon: {
    width: 85,
    height: 91,
  },
  frame: {
    height: '100%',
    width: '100%',
    // top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    backgroundColor: Color.colorPrimaryClassicBlue1,
  },
  text2: {
    marginTop: -8,
    top: '50%',
    left: '16.08%',
    lineHeight: 18,
    color: Color.white,
    textAlign: 'center',
    fontFamily: FontFamily.textH612pxRegular,
    fontWeight: '600',
    position: 'absolute',
  },
  buttonssecondarydefault: {
    width: 191,
    height: 40,
    display: 'none',
  },
  buttonfloatingprimaryIcon: {
    width: 40,
    height: 40,
  },
});

export default DoctorVerticalCard;
