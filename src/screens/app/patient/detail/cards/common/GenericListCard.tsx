import { marginStyles } from '../../../../../../utils/styles/marginStyles';
import React from 'react';
import { Pressable, View } from 'react-native';
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
import { Color, Margin } from '../../../../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../../../../utils/size';
import {
  IAddress,
  IPractitioner,
} from '../../../../../../utils/domainEntities';
import ButtonPrimary from '@components/btns/ButtonPrimary';
// import {SvgDoctor} from '@svgs/SvgDoctor';

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

export const GenericListCard: React.FC<Props> = React.memo(
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
      <Pressable
        onPress={() => {
          if (onPress) {
            onPress();
          }
        }}
        style={[
          isSelected
            ? styles.selected
            : border
            ? styles.border
            : styles.noBorder,

          ,
          styles.contents,
        ]}>
        <View
          key={resource?.id}
          style={[styles.container, isFirstElement && marginStyles.marginTop]}>
          <View style={commonStyles.avatarContainer}>
            <Avatar
              entityId={avatarId}
              url={avatarUrl}
              entityType={entityType || ImageEntityType.PRACTITIONER}
              type={ImageType.AVATAR_SMALL}
              size={AvatarSizeType.LIST_LARGE}
            />
          </View>

          <View style={styles.centerWrapper}>
            <CardTitle text={title} />
            <CardSubtitle text={subtitle} />
            {showAddress && (
              <AddressLine
                address={address}
                showShortAddress={true}
                showDistanceAway={showDistanceAway}
              />
            )}
          </View>
          <View style={[styles.rightWrapper, commonStyles.mr5]}>
            {!hideReview && !showBtn && (
              <>
                <RateTextWithIcon rate={reviewCount > 0 ? reviewValue : 0} />
                <SubLabelText text={`${reviewCount} ${t('reviews')}`} />
              </>
            )}
            {showPriceIndicator && (
              <PriceScale
                priceScale={priceIndicator || PRICE_INDICATOR.AVERAGE}
              />
            )}
          </View>
          {showBtn && (
            <View
              style={[
                styles.rightWrapper,
                styles.button,
                styles.buttonFlexBox,
              ]}>
              <ButtonPrimary
                title={btnTitle ? btnTitle : t('common:book')}
                onPress={() => {
                  if (onBtnPress) {
                    onBtnPress();
                  }
                }}
              />
            </View>
          )}
        </View>
      </Pressable>
    );
  },
);

export const styles = ScaledSheet.create({
  contents: {
    backgroundColor: Color.white,
  },
  container: {
    borderRadius: 16,
    alignSelf: 'center',
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
});
