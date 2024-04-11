import * as React from 'react';
import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
import ButtonPrimary from '@components/btns/ButtonPrimary';
import { useTranslation } from 'react-i18next';
import { PriceLine } from '@components/price/PriceLine';
import Fonts from '../../../../../../utils/fonts';
import { fontH5 } from '../../../../../../utils/themeUtils';
import ROUTES from '../../../../../../utils/routes';
import TitleAndReviewLine from '@screens/app/common/review/TitleAndReviewLine';
import { commonStyles } from '../../../../../../utils/styles/commonStyles';
import {
  IPractitioner,
  IPractitionerRole,
} from '../../../../../../utils/domainEntities';
import ReviewLine from '@screens/app/common/review/ReviewLine';

type Props = {
  resource: IPractitionerRole;
  practitioner: IPractitioner;
  btnTitle?: string;
  onBtnPress?: () => void;
  navigation: any;
};

const ServiceListItem = memo(
  ({ resource, practitioner, btnTitle, onBtnPress, navigation }: Props) => {
    const { t } = useTranslation('common');

    return (
      <View key={resource?.id} style={[styles.contents]}>
        <View style={[styles.cards, commonStyles.directionColumn]}>
          <View>
            <View style={styles.leftBorder} />
            <View style={[commonStyles.directionRow, commonStyles.mlr5]}>
              <Text>
                {resource?.qualificationMedicalField?.display1 +
                  ' / ' +
                  resource?.nameText}
              </Text>
              <PriceLine
                value={resource?.priceValue}
                currency={resource?.priceCurrency}
              />
            </View>
          </View>

          <View style={[commonStyles.directionRow, styles.buttonContainer]}>
            <ReviewLine value={resource.reviewValue} />
            <View style={[styles.button, styles.buttonFlexBox]}>
              <ButtonPrimary
                // style={styles.btnDoctorSwitch}
                title={btnTitle ? btnTitle: t('common:book')}
                // iconRight={"calendar"}
                onPress={() => {
                  if (onBtnPress) {
                    onBtnPress();
                  } else {
                    if (navigation) {
                      navigation.navigate(ROUTES.Patient_Appointments_Create, {
                        practitionerRole: resource,
                        practitioner: practitioner,
                      });
                    }
                  }
                }}
              />
            </View>
          </View>
        </View>
      </View>
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
    // borderColor: Color.gray_50,
    // borderWidth: 1,
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_xs,
    borderRadius: BorderRadius.card,
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default ServiceListItem;
