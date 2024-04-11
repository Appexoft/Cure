import { marginStyles } from '../../../../../../utils/styles/marginStyles';
import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import {
  AddressLine,
  CardTitle,
  PriceScale,
  RateTextWithIcon,
  SubLabelText,
} from '@components/index';
import { useTranslation } from 'react-i18next';
import { commonStyles } from '../../../../../../utils/styles/commonStyles';
import { CardSubtitle } from '@components/text/CardSubtitle';
import Avatar from '@screens/app/common/avatar/Avatar';
import {
  AvatarSizeType,
  ImageEntityType,
  ImageType,
  PRICE_INDICATOR,
} from '../../../../../../utils/entityUtils';
import { ScaledSheet } from 'react-native-size-matters';
import {
  Border,
  Color,
  FontSize,
  Margin,
  Padding,
} from '../../../../../../utils/GlobalStyles';
import {
  getPageWidth,
  scaleHeight,
  scaleWidth,
} from '../../../../../../utils/size';
import {
  IAddress,
  IPractitioner,
  PriceCurrency,
} from '../../../../../../utils/domainEntities';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import TwoButtons from '@components/btns/TwoButtons';
import ReviewLine from '@screens/app/common/review/ReviewLine';
import PriceLine from '@components/PriceLine';
import { ShortLine } from '@components/line/ShortLine';
import { getAddressesAsString } from '../../../../../../utils/fhir/fhirTypes';
import DateInterval from '@components/time/DateInterval';
import Fonts from '../../../../../../utils/fonts';

type Props = {
  resource: IPractitioner;
  entityType: ImageEntityType;
  avatarId: string;
  avatarUrl?: string;
  title: string;
  subtitle: string;

  reviewValue: number;
  reviewCount: number;
  hideReview?: boolean;

  priceIndicator?: PRICE_INDICATOR;
  showPriceIndicator: boolean;

  address?: IAddress;
  showAddress?: boolean;
  showDistanceAway?: boolean;

  isSelected?: boolean;

  showBtn?: boolean;
  btnTitle?: string;
  onBtnPress?: () => void;

  // Other
  isFirstElement?: boolean;
  onPress?: any;

  style?: any;
  border?: boolean;
};

export const GenericHLargeCard: React.FC<Props> = React.memo(
  ({
    isFirstElement,
    resource,
    onPress,
    avatarId,
    avatarUrl,
    entityType,
    title,
    subtitle,
    hideReview,
    reviewValue,
    reviewCount,
    priceIndicator,
    showPriceIndicator,
    address,
    showAddress,
    showDistanceAway,
    isSelected,
    showBtn,
    btnTitle,
    onBtnPress,
    style,
    border,
  }) => {
    const { t } = useTranslation('common');

    return (
      <View style={[styles.content]}>
        <TouchableOpacity
          onPress={() => {
            if (onPress) {
              onPress();
            }
          }}>
          <View style={styles.photo}>
            <View style={[styles.photo, styles.ml8]}>
              <Avatar
                entityId={avatarId}
                url={avatarUrl}
                entityType={entityType || ImageEntityType.PRACTITIONER}
                type={ImageType.AVATAR_LARGE}
                size={AvatarSizeType.LIST_LARGE}
              />
            </View>

            <View style={styles.ml8}>
              <CardTitle text={title} />
              <CardSubtitle text={subtitle} />
              {resource?.yearsExperience && (
                <CardSubtitle
                  text={
                    resource?.yearsExperience +
                    ' ' +
                    t('common:yearsExperience')
                  }
                />
              )}
              {/*<Text style={styles.title}>{resource?.nameText}</Text>*/}
              {resource &&
                resource.consultationPriceValue &&
                resource.consultationPriceValue !== -1 &&
                resource.consultationPriceCurrency && (
                  <Text style={[styles.text1, styles.mt8, styles.text1Typo]}>
                    <PriceLine
                      value={resource?.consultationPriceValue}
                      currency={resource.consultationPriceCurrency}
                    />
                    <Text style={[styles.consultationFee, commonStyles.ml5]}>
                      {t('common:consultationFee')}
                    </Text>
                  </Text>
                )}
            </View>
          </View>
          <View style={[styles.addressWrapper, styles.mt12]}>
            <View style={styles.addressWrapper1}>
              <View style={commonStyles.directionColumn}>
                <ShortLine
                  icon={'navigation'}
                  iconColor={Color.white}
                  bgColorStyle={commonStyles.colorPastel7}
                  text={getAddressesAsString(address, false)}

                />
              </View>
            </View>
            <View style={styles.status}>
              <View style={styles.done}>
                <Text style={[styles.done1, styles.text1Typo]}>Done</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <View style={[commonStyles.mt10]}>
          <TwoButtons
            titleButton1={t('account:buttons:cancel')}
            titleButton2={t('account:buttons:reschedule')}
            onPressButton1={() => {}}
            onPressButton2={() => {}}
          />
        </View>
      </View>
    );
  },
);

export const styles = ScaledSheet.create({
  contents: {
    backgroundColor: Color.white,
    height: scaleHeight(150),
  },
  horizontalTopContainer: {},
  container: {
    borderRadius: 16,
    alignSelf: 'center',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: scaleHeight(Margin.m_5),
  },
  border: {
    borderWidth: 1,
    borderColor: Color.gray_150,
    borderRadius: 20,
  },
  button: {
    width: scaleWidth(120),
    marginTop: scaleHeight(5),
  },
  buttonFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  noBorder: {
    borderRadius: 20,
  },
  selected: {
    borderColor: Color.main,
    borderRadius: 20,
    borderWidth: 2,
  },
  notSelected: {},
  rightWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  centerWrapper: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    marginLeft: 8,
  },
  imageStyles: {
    width: scaleWidth(50),
    height: scaleWidth(50),
    borderRadius: scaleWidth(8),
    marginHorizontal: 16,
  },
  priceText: {
    color: Color.third,
    fontWeight: 'bold',
  },

  content: {
    marginRight: scaleWidth(Margin.between_entries),
    width: scaleWidth(getPageWidth() - 60),
    borderRadius: Border.br_lg,
    backgroundColor: Color.white,
    borderStyle: 'solid',
    borderColor: '#efeff6',
    borderWidth: 1,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_md,
  },

  consultationFee: {
    fontSize: FontSize.fontH5,
    lineHeight: 21,
    color: Color.darkslategray_300,
    textAlign: 'left',
    fontFamily: Fonts.URBANIST.Regular,
    fontWeight: '200',
    flexWrap: 'wrap',
  },

  ml4: {
    marginLeft: Margin.m_5xs,
  },
  ml8: {
    marginLeft: Margin.m_2xs,
  },
  mt8: {
    marginTop: Margin.m_2xs,
  },
  mt12: {
    marginTop: Margin.m_md,
  },
  hrTypo: {
    fontWeight: '500',
    lineHeight: 18,
    fontSize: FontSize.fontH5,
    textAlign: 'left',
    fontFamily: Fonts.URBANIST.Regular,
  },
  text1Typo: {
    lineHeight: 18,
    fontSize: FontSize.fontH5,
    textAlign: 'left',
  },
  title: {
    fontSize: FontSize.fontH4,
    lineHeight: 21,
    color: Color.darkslategray_300,
    textAlign: 'left',
    fontFamily: Fonts.URBANIST.Regular,
    fontWeight: '700',
    width: scaleWidth(200),
    flexWrap: 'wrap',
  },
  drAdamAnderson: {
    color: Color.colourAccent,
  },
  starIcon: {
    width: 18,
    height: 18,
    overflow: 'hidden',
  },
  photo: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  text1: {
    color: Color.colourMain,
    fontFamily: Fonts.URBANIST.Regular,
    fontWeight: '700',
    lineHeight: 18,
    fontSize: FontSize.fontH5,
  },
  addressWrapper1: {
    justifyContent: 'space-between',
  },
  done1: {
    fontFamily: Fonts.URBANIST.Regular,
    color: Color.white,
  },
  done: {
    backgroundColor: Color.lightsteelblue_200,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_xs,
    flexDirection: 'row',
  },
  status: {
    display: 'none',
    alignItems: 'flex-end',
  },
  hr: {
    color: Color.lightgray_200,
  },
  addressWrapper: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    alignSelf: 'stretch',
    flexDirection: 'row',
    width: scaleWidth(250),
  },
});
