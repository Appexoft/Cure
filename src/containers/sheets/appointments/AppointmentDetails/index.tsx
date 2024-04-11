import React, { memo, useCallback } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color, FontSize } from '../../../../utils/GlobalStyles';
import {
  getPageWidth,
  getWidthByPercent,
  scaleHeight,
  scaleWidth,
} from '../../../../utils/size';
import FONTS from '../../../../utils/fonts';
import openMap from 'react-native-open-maps';
import AvatarIcon from '@assets/svgs/icon-svg/MockAvatar';
import StarIcon from '@assets/svgs/icon-svg/StarIcon';
import MapIcon from '@assets/svgs/icon-svg/MapIcon';
import CalendarIcon from '@assets/svgs/icon-svg/CalendarIcon';
import LocationArrowIcon from '@assets/svgs/icon-svg/LocationArrowIcon';
import { useTranslation } from 'react-i18next';
import { commonStyles } from '../../../../utils/styles/commonStyles';
import TwoButtons from '@components/btns/TwoButtons';
import {
  getAddressesAsString,
  getDatePretty,
  getHoursIntervalPretty,
  getQualificationDisplay,
} from '../../../../utils/fhir/fhirTypes';
import { IAppointment } from '../../../../utils/domainEntities';
import Avatar from '@screens/app/common/avatar/Avatar';
import {
  AvatarSizeType,
  ImageEntityType,
  ImageType,
} from '../../../../utils/entityUtils';
import HeartIcon from '@assets/svgs/icon-svg/HeartIcon';

const AppointmentDetails = memo(({ route, navigation }) => {
  const { t } = useTranslation();
  const { resource }: { resource: IAppointment } = route.params; // todo type this

  const onReschedule = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onCancel = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onOpenMap = useCallback((lat: number, long: number) => {
    if (lat && long) {
      openMap({ latitude: lat, longitude: long });
    } else {
      console.error('Latitude and longitude is not given, cannot open map');
    }
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={true}
      style={styles.container}>
      {/* Practitioner */}
      <View style={styles.practitionerSection}>
        <Avatar
          entityId={resource?.practitioner?.id}
          entityType={ImageEntityType.PRACTITIONER}
          type={ImageType.AVATAR_SMALL}
          size={AvatarSizeType.LIST_LARGE}
        />
        <View style={styles.textInfo}>
          <Text style={styles.txtDoctorName}>{resource?.nameText}</Text>
          <View style={styles.position}>
            <Text style={styles.txtSpecialized}>
              {resource?.practitioner?.qualificationMedicalField?.text}
            </Text>
            <View style={styles.ratingContainer}>
              <StarIcon />
              <Text style={styles.rating}>4.9</Text>
            </View>
          </View>
          <Text style={styles.description}>
            {resource?.practitioner?.description}
          </Text>
        </View>
      </View>

      <View style={styles.rowGeneric}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.svgView}>
            <CalendarIcon />
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>
              {getDatePretty(
                resource?.startDate ? new Date(resource?.startDate) : null,
              )}
            </Text>
            <Text style={styles.dateText}>
              {getHoursIntervalPretty(
                resource?.startDate ? new Date(resource?.startDate) : null,
                resource?.endDate ? new Date(resource?.endDate) : null,
              )}
            </Text>
          </View>
        </View>
      </View>

      {/* Map */}
      <View style={styles.rowGeneric}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.svgView}>
            <MapIcon />
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.locationText}>
              {getAddressesAsString(resource?.practitioner?.mainAddress, false)}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.locationBtn}
          onPress={() => {
            if (
              resource?.practitioner?.mainAddress?.lat &&
              resource?.practitioner?.mainAddress?.lon
            ) {
              onOpenMap(
                resource?.practitioner?.mainAddress?.lat,
                resource?.practitioner?.mainAddress?.lon,
              );
            }
          }}>
          <Text style={styles.btnText}>{t('account:buttons:directions')}</Text>
          <LocationArrowIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.servicesSection}>
        {/* todo fetch healthcare services!! ? */}
        <View style={styles.orderView}>
          <Text style={styles.txtOrderServices}>
            {t('appointment:services')}
          </Text>
        </View>
        <View>
          <View style={styles.descriptionView}>
            <View style={styles.servicesLeftBlock}>
              <View
                style={[styles.svgWrapper, { backgroundColor: Color.pastel4 }]}>
                <HeartIcon />
              </View>
              <Text style={styles.servicesTitle}>
                {getQualificationDisplay(resource?.qualificationService)}
              </Text>
            </View>
            <Text style={styles.servicesTitle}>
              {resource?.priceValue} {resource?.priceCurrency}
            </Text>
          </View>
        </View>
        <View style={styles.totalView}>
          <Text style={styles.txtTotal}>{t('appointment:total')}</Text>
          <Text style={[styles.txtTotal, { fontSize: 14 }]}>
            {resource?.priceValue} {resource?.priceCurrency}
          </Text>
        </View>
      </View>
      <View style={[styles.buttonsSection]}>
        <TwoButtons
          titleButton1={t('account:buttons:cancel')}
          titleButton2={t('account:buttons:reschedule')}
          onPressButton1={onCancel}
          onPressButton2={onReschedule}
        />
      </View>
    </ScrollView>
  );
});

export default AppointmentDetails;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
  },
  practitionerSection: {
    backgroundColor: Color.white,
    flexDirection: 'row',
    marginTop: scaleHeight(24),
    marginHorizontal: scaleWidth(15),
    paddingVertical: scaleHeight(15),
    paddingHorizontal: scaleWidth(10),
    borderRadius: scaleWidth(16),
    alignItems: 'center',
    borderWidth: scaleWidth(1),
    borderColor: Color.border,
  },
  textInfo: {
    marginLeft: scaleWidth(20),
  },
  position: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaleHeight(3),
    marginLeft: scaleWidth(20),
  },
  rating: {
    fontSize: 14,
    color: Color.sandybrown_200,
  },
  txtDoctorName: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(27),
    color: Color.accent,
  },
  txtSpecialized: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(14),
    color: Color.brown,
  },
  description: {
    maxWidth: '95%',
    fontSize: FontSize.fontH6,
    fontFamily: FONTS.URBANIST.Medium,
    color: Color.dimgray_400,
  },
  rowGeneric: {
    backgroundColor: Color.white,
    flexDirection: 'row',
    marginTop: scaleHeight(8),
    marginHorizontal: scaleWidth(15),
    paddingVertical: scaleHeight(8),
    paddingHorizontal: scaleWidth(8),
    borderRadius: scaleWidth(16),
    alignItems: 'center',
    borderWidth: scaleWidth(1),
    borderColor: Color.border,
    justifyContent: 'space-between',
  },
  svgView: {
    backgroundColor: Color.pastel1,
    width: scaleWidth(48),
    height: scaleWidth(48),
    borderRadius: scaleWidth(16),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  dateContainer: {
    marginLeft: scaleWidth(10),
    height: scaleWidth(48),
    justifyContent: 'space-around',
    paddingVertical: scaleHeight(5),
  },
  dateText: {
    fontFamily: FONTS.URBANIST.Medium,
    fontSize: FontSize.fontH6,
    color: Color.darkslateblue_200,
  },
  locationText: {
    fontFamily: FONTS.URBANIST.Medium,
    fontSize: FontSize.fontH6,
    color: Color.darkslateblue_200,
    width: getWidthByPercent(40),
  },
  locationBtn: {
    backgroundColor: Color.main,
    borderRadius: scaleWidth(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: scaleHeight(32),
    width: scaleWidth(100),
  },
  btnText: {
    fontFamily: FONTS.URBANIST.Bold,
    fontSize: FontSize.fontH6,
    color: Color.white,
    marginRight: scaleWidth(8),
  },
  servicesLeftBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  svgWrapper: {
    height: scaleHeight(35),
    width: scaleWidth(32),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scaleWidth(8),
  },
  servicesTitle: {
    fontFamily: FONTS.URBANIST.Medium,
    fontSize: FontSize.fontH6,
    marginLeft: scaleWidth(8),
  },
  txtTime: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: FontSize.fontH3,
    letterSpacing: 0.3,
    lineHeight: scaleHeight(27),
    color: Color.accent,
    marginLeft: scaleWidth(17),
  },
  servicesSection: {
    backgroundColor: Color.white,
    marginTop: scaleHeight(8),
    marginHorizontal: scaleWidth(15),
    borderRadius: scaleWidth(16),
    paddingHorizontal: scaleWidth(12),
    paddingVertical: scaleHeight(15),
    borderWidth: scaleWidth(1),
    borderColor: Color.border,
  },
  buttonsSection: {
    bottom: scaleHeight(10),
    marginTop: scaleHeight(50),
    width: getWidthByPercent(90),
    alignSelf: 'center',
  },
  orderView: {
    borderBottomWidth: scaleWidth(1),
    borderColor: Color.border,
  },
  txtOrderServices: {
    fontFamily: FONTS.URBANIST.Bold,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(20),
    color: Color.accent,
    marginBottom: scaleHeight(8),
  },
  descriptionView: {
    height: scaleHeight(32),
    marginTop: scaleHeight(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textDescription: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(26),
    color: Color.brown1,
  },
  price: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(29),
    color: Color.accent,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTime: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(22),
    color: Color.third,
  },
  totalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaleHeight(15),
    borderTopWidth: scaleWidth(1),
    borderColor: Color.border,
    paddingTop: scaleHeight(10),
  },
  txtTotal: {
    fontFamily: FONTS.URBANIST.Bold,
    fontSize: FontSize.fontH4,
    lineHeight: scaleHeight(21),
    color: Color.accent,
  },
  negativeBtn: {
    width: scaleWidth(165),
    height: scaleHeight(40),
    backgroundColor: Color.white,
    borderRadius: scaleWidth(10),
    borderWidth: scaleWidth(1),
    borderColor: Color.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeBtn: {
    width: scaleWidth(165),
    height: scaleHeight(40),
    backgroundColor: Color.accent,
    borderRadius: scaleWidth(10),
    borderWidth: scaleWidth(1),
    borderColor: Color.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtn2: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
  },
  buttonText: {
    fontFamily: FONTS.URBANIST.Medium,
    fontSize: FontSize.fontH6,
    color: Color.primaryNeutral600,
  },
  activebtnText: {
    fontFamily: FONTS.URBANIST.Bold,
    fontSize: FontSize.fontH6,
    color: Color.white,
  },
  btnContainer: {
    flexDirection: 'row',
    width: '93%',
    justifyContent: 'space-between',
    marginHorizontal: scaleWidth(15),
  },
});
