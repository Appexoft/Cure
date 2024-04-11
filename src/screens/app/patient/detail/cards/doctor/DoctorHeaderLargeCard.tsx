import * as React from 'react';
import { fhirR4 } from '@smile-cdr/fhirts';
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
  LogBox,
} from 'react-native';
import {
  Margin,
  FontSize,
  FontFamily,
  Color,
  Padding,
  Sizes,
  BorderRadius,
} from '../../../../../../utils/GlobalStyles';
import {
  getNameForPractitioner,
  getQualificationForPractitioner,
} from '../../../../../../utils/fhir/fhirTypes';
import { useEffect } from 'react';
import Avatar from '@screens/app/common/avatar/Avatar';
import {
  AvatarSizeType,
  ImageEntityType,
  ImageType,
} from '../../../../../../utils/entityUtils';
import {scaleHeight, scaleWidth} from '../../../../../../utils/size';
import ReviewLine from '@screens/app/common/review/ReviewLine';
import { IPractitioner } from '../../../../../../utils/domainEntities';
import SpecialtyAndReviewSubtitle from '@screens/app/common/review/SpecialtyAndReviewSubtitle';
import Fonts from "../../../../../../utils/fonts";
import {AddressLine} from "@components/location/AddressLine";

type DoctorHeaderLargeCardType = {
  resource: IPractitioner;

  /** Style props */
  cardsDoctorHeaderLargeHorTop?: number | string;
};

const DoctorHeaderLargeCard = ({ resource }: DoctorHeaderLargeCardType) => {

  return (
    <View style={[styles.contents]}>
      <View style={styles.topFlexBox}>
        <View>
          {/*<Text style={styles.title}>{getNameForPractitioner(resource)}</Text>*/}
          <SpecialtyAndReviewSubtitle
            specialty={getQualificationForPractitioner(resource)}
            reviewValue={resource?.reviewValue}
          />
          <Text style={[styles.description, styles.mt2, styles.bodyText]}>
            {resource?.description}
          </Text>
          <AddressLine
            address={resource.mainAddress}
            showShortAddress={true}
            showDistanceAway={false}
          />
        </View>
        <Avatar
          entityId={resource?.id}
          entityType={ImageEntityType.PRACTITIONER}
          type={ImageType.AVATAR_LARGE}
          size={AvatarSizeType.HEADER}
          style={styles.avatar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    backgroundColor: Color.white,
    width: '100%',
    paddingHorizontal: scaleWidth(25),
    paddingVertical: Padding.p_xs,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: BorderRadius.card,
  },
  avatar: {
    marginTop: scaleHeight(10),
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
    fontFamily: FontFamily.textInputError1,
  },
  locationFlexBox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  bodyText: {
    lineHeight: 20,
    fontSize: FontSize.fontH6,
    fontWeight: '500',
    textAlign: 'left',
    fontFamily: Fonts.URBANIST.Regular,
  },
  topFlexBox: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
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
    fontSize: FontSize.fontH4,
    lineHeight: 24,
    fontWeight: '700',
    color: Color.gray_700,
    textAlign: 'left',
    fontFamily: FontFamily.textInputError1,
  },
  qualification: {
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

export default DoctorHeaderLargeCard;
