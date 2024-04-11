import * as React from 'react';
import { memo } from 'react';
import { StyleSheet} from 'react-native';
import {
  Border,
  BorderRadius,
  Color,
  FontFamily,
  FontSize,
  Margin,
  Padding,
} from '../../../../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../../../../utils/size';
import { useTranslation } from 'react-i18next';
import Fonts from '../../../../../../utils/fonts';
import { fontH5 } from '../../../../../../utils/themeUtils';
import {
  IOrganization,
  IPractitioner,
  IPractitionerRole,
} from '../../../../../../utils/domainEntities';
import { ImageEntityType } from '../../../../../../utils/entityUtils';
import { GenericListCard } from '@screens/app/patient/detail/cards/common/GenericListCard';

type Props = {
  resource: IPractitionerRole;
  hospital?: IOrganization;
  practitioner: IPractitioner;
  isSelected: boolean;
  btnTitle?: string;
  onBtnPress?: () => void;
  navigation: any;
};

const ServiceEditItem = memo(
  ({
    resource,
    hospital,
     isSelected,
    onBtnPress,
  }: Props) => {
    const { t } = useTranslation('common');

    return (
      <GenericListCard
        resource={resource}
        entityType={ImageEntityType.PRACTITIONER_ROLE}
        avatarId={resource?.id}
        avatarUrl={resource?.images?.length > 0 ? resource?.images[0]?.imageUrl : null}
        isSelected={isSelected}
        title={resource?.qualificationMedicalField?.display1 + ' / ' + resource?.nameText}
        subtitle={hospital?.nameText + ' hospital'}
        reviewValue={resource?.reviewValue}
        reviewCount={resource?.reviewCountTotal}
        priceIndicator={resource?.priceIndicator}
        showPriceIndicator={true}
        address={resource?.mainAddress}
        showAddress={false}
        border={true}
        showBtn={true}
        btnTitle={t('common:edit')}
        onBtnPress={() => {
          console.log("edit");
        }}
        onPress={() => {
          if (onBtnPress) {
            onBtnPress(resource);
          } else {
          }
        }}
      />
    );
  },
);

const styles = StyleSheet.create({
  contents: {
    paddingLeft: scaleWidth(15),
    marginBottom: scaleHeight(Margin.between_entries),
  },
  buttonContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  serviceTitle: {
    fontSize: fontH5,
    lineHeight: 15,
    color: Color.accent,
    fontWeight: '700',
    textAlign: 'left',
    fontFamily: Fonts.URBANIST.SemiBold,
  },
  leftBorder: {
    borderTopRightRadius: Border.br_lg,
    borderBottomRightRadius: Border.br_lg,
    backgroundColor: Color.gray_200,
    width: 4,
    alignSelf: 'stretch',
  },

  buttonCard: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },

  mt8: {
    marginTop: Margin.m_2xs,
  },
  ml6: {
    marginLeft: Margin.m_3xs,
  },
  ml16: {
    marginLeft: Margin.m_2xl,
  },
  disabledTypo: {
    textAlign: 'left',
    fontFamily: Fonts.URBANIST.Regular,
  },
  buttonFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textFlexBox: {
    textAlign: 'center',
    color: Color.white,
  },

  hours300: {
    fontSize: fontH5,
    lineHeight: 18,
    color: Color.dimgray_400,
    fontWeight: '500',
    alignSelf: 'stretch',
  },
  pricing: {
    alignSelf: 'stretch',
  },
  about: {
    flex: 1,
  },
  iconly: {
    width: 16,
    height: 16,
    display: 'none',
  },
  text: {
    fontSize: FontSize.fontH4,
    lineHeight: 21,
    fontFamily: FontFamily.textH612pxRegular,
    fontWeight: '500',
  },
  primaryButton: {
    backgroundColor: Color.lightsteelblue_100,
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_lg,
    display: 'none',
    borderRadius: Border.br_lg,
    alignItems: 'center',
  },
  label: {
    fontSize: FontSize.fontH6,
    letterSpacing: 0.1,
    lineHeight: 22,
    fontFamily: FontFamily.textInputError1,
    textAlign: 'center',
    color: Color.white,
    fontWeight: '700',
  },
  button: {
    width: scaleWidth(120),
    marginTop: scaleHeight(5),
  },
  cards: {
    backgroundColor: Color.white,
    borderStyle: 'solid',
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_xs,
    borderRadius: BorderRadius.card,
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default ServiceEditItem;
