import React from 'react';
import { Text, View } from 'react-native';
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
import {ACTION_SHEET_APPOINTMENT_ACCEPT, IAppointment} from '../../../../utils/domainEntities';
import Icon from 'react-native-vector-icons/Feather';
import { apiService } from '../../../../services';
import { API_APPOINTMENT } from '../../../../services/api/ApiConstants';
import { connect } from 'react-redux';
import { setAppointmentStatus } from '../RescheduleApointment/reducer';
import TimeCard from '@components/cards/TimeCard';
import { DoctorCard } from '@screens/app/patient/detail/cards/doctor/DoctorCard';
import {InterfaceType} from "../../../../utils/entityUtils";

function AcceptAppointmentSheet(props: SheetProps<{}>) {
  const { t } = useTranslation();
  const resource: IAppointment = props.payload;
  const crtInterface = 'PRACTITIONER';

  const handleAccept = async () => {
    crtInterface === InterfaceType.PATIENT
      ? await apiService
          .makePOSTRequest(`${API_APPOINTMENT}/confirmByPatient`, {
            appointmentId: resource?.id,
          })
          .then((res) => {
            res && console.log('res', res);
            props.setStatus(
              res.success.data.id,
              res.success.data.status,
              res.success.data.endDate,
              res.success.data.startDate,
            );
          })
          .finally(() => SheetManager.hide(ACTION_SHEET_APPOINTMENT_ACCEPT))
      : await apiService
          .makePOSTRequest(`${API_APPOINTMENT}/confirmByPractitioner`, {
            appointmentId: resource?.id,
          })
          .then((res) => {
            res && console.log('res', res);
            props.setStatus(
              res.success.data.id,
              res.success.data.status,
              res.success.data.endDate,
              res.success.data.startDate,
            );
          })
          .finally(() => SheetManager.hide(ACTION_SHEET_APPOINTMENT_ACCEPT));
  };

  return (
    <ActionSheet
      closable={true}
      backgroundInteractionEnabled={false}
      gesturesEnabled={true}
      headerAlwaysVisible={true}
      closeOnTouchBackdrop={true}
      useBottomSafeAreaPadding
      id={'AppointmentAcceptSheet'}>
      {/* Practitioner */}
      <Text style={styles.mainText}>{t('appointments:checkHealth')}</Text>

      <View style={{ marginTop: 10 }}>
        <DoctorCard
          practitioner={resource?.practitioner}
          isFirstElement={false}
        />
      </View>

      {/* Time */}
      <TimeCard
        startDate={resource?.startDate}
        title="appointments:oldDate"
        endDate={resource?.endDate}
      />

      <View style={{ alignItems: 'center', marginVertical: 14 }}>
        <Icon size={30} name="arrow-down" />
      </View>

      {/*New Time */}
      <TimeCard
        startDate={resource?.startDate}
        title="appointments:newDate"
        endDate={resource?.endDate}
      />

      <View style={[styles.buttonsSection]}>
        <TwoButtons
          titleButton1={t('appointments:cancel')}
          titleButton2={t('appointments:accept')}
          onPressButton1={() => {}}
          onPressButton2={() => handleAccept()}
        />
      </View>
    </ActionSheet>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setStatus: (id, status, endDate, startDate) =>
    dispatch(setAppointmentStatus(id, status, endDate, startDate)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AcceptAppointmentSheet);

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
