import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import openMap from "react-native-open-maps";
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import { useTranslation } from 'react-i18next';
import { ScaledSheet } from 'react-native-size-matters';
import { Color, FontSize } from '../../../../utils/GlobalStyles';
import {
  getWidthByPercent,
  scaleHeight,
  scaleWidth,
} from '../../../../utils/size';
import FONTS from '../../../../utils/fonts';
import TwoButtons from '@components/btns/TwoButtons';
import { getQualificationDisplay } from '../../../../utils/fhir/fhirTypes';
import {
  ACTION_SHEET_APPOINTMENT_DETAILS,
  ACTION_SHEET_APPOINTMENT_RESCHEDULE, IAppointment,
} from '../../../../utils/domainEntities';
import HeartIcon from '@assets/svgs/icon-svg/HeartIcon';
import { DoctorCard } from '@screens/app/patient/detail/cards/doctor/DoctorCard';
import TimeCard from '@components/cards/TimeCard';
import MapCard from '@components/cards/MapCard';

function AppointmentDetailsSheet(props: SheetProps<{}>) {
  const { t } = useTranslation();
  const resource: IAppointment | undefined = props.payload;

  const onReschedule = useCallback(() => {
    SheetManager.hide(ACTION_SHEET_APPOINTMENT_DETAILS);
    setTimeout(() => {
      SheetManager.show(ACTION_SHEET_APPOINTMENT_RESCHEDULE, {
        payload: resource,
      });
    }, 300);
  }, [SheetManager]);

  const onCancel = useCallback(() => {
    SheetManager.hide(ACTION_SHEET_APPOINTMENT_DETAILS);
  }, [SheetManager]);

  const onOpenMap = useCallback((lat: number, long: number) => {
    if (lat && long) {
      openMap({ latitude: lat, longitude: long });
    } else {
      console.error('Latitude and longitude is not given, cannot open map');
    }
  }, []);

  const statusMap = {
    PENDING_APPROVAL_BY_DOCTOR: {
      text: <Text>{t('appointments:status:pending_approval_by_doctor')}</Text>,
      bg: Color.yellow,
    },
    PENDING_APPROVAL_BY_PATIENT: {
      text: <Text>{t('appointments:status:pending_approval_by_patient')}</Text>,
      bg: Color.yellow,
    },
    BOOKED: {
      text: <Text>{t('appointments:status:booked')}</Text>,
      bg: Color.green,
    },
    ARRIVED: {
      text: <Text>{t('appointments:status:arrived')}</Text>,
      bg: Color.green,
    },
    FULFILLED: {
      text: <Text>{t('appointments:status:fulfilled')}</Text>,
      bg: Color.green,
    },
    CANCELLED: {
      text: <Text>{t('appointments:status:cancelled')}</Text>,
      bg: Color.red,
    },
    NO_SHOW: {
      text: <Text>{t('appointments:status:no_show')}</Text>,
      bg: Color.yellow,
    },
    WAITLIST: {
      text: <Text>{t('appointments:status:waitlist')}</Text>,
      bg: Color.blue,
    },
  };

  const appointmentStatus = (status: any) => {
    return (
      <View
        style={{
          backgroundColor: statusMap[status].bg,
          flexDirection: 'row',
          marginTop: scaleHeight(24),
          marginHorizontal: scaleWidth(15),
          paddingVertical: scaleHeight(15),
          paddingHorizontal: scaleWidth(10),
          borderRadius: scaleWidth(16),
          alignItems: 'center',
          borderWidth: scaleWidth(1),
          borderColor: Color.border,
        }}>
        {statusMap[status].text}
      </View>
    );
  };

  return (
    <ActionSheet
      closable={true}
      backgroundInteractionEnabled={false}
      gesturesEnabled={true}
      headerAlwaysVisible={true}
      closeOnTouchBackdrop={true}
      useBottomSafeAreaPadding
      id={'AppointmentDetailSheet'}>
      {/* Practitioner */}
      <Text style={styles.mainText}>{t('appointments:checkHealth')}</Text>
      {resource?.status && appointmentStatus(resource?.status)}
      <View style={{ marginTop: 10 }}>
        <DoctorCard
          practitioner={resource?.practitioner}
          isFirstElement={false}
        />
      </View>

      {/* Time */}
      <TimeCard startDate={resource?.startDate} endDate={resource?.endDate} />

      {/* Map */}
      <MapCard resource={resource} onOpenMap={onOpenMap} />

      <View style={styles.servicesSection}>
        {/* todo fetch healthcare services!! ? */}
        <View style={styles.orderView}>
          <Text style={styles.txtOrderServices}>
            {t('appointments:services')}
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
          <Text style={styles.txtTotal}>{t('appointments:total')}</Text>
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
    </ActionSheet>
  );
}

export default AppointmentDetailsSheet;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
  },
  mainText: {
    marginHorizontal: scaleWidth(15),
    fontSize: scaleHeight(18),
    fontFamily: FONTS.URBANIST.Bold,
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
    // position: 'absolute',
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
