import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { getNextDays } from '../../../../utils/GlobalUtils';
import { getPractitionerFutureAvailableTimeSlots } from '@screens/app/patient/appointments/createAppointment/reducer';
import DayBookItem from '@screens/app/patient/appointments/createAppointment/components/DayBookItem';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import fonts from '../../../../utils/fonts';
import { MONTH_NAMES_SHORT } from '../../../../utils/entityUtils';
import { Color, FontSize, Margin } from '../../../../utils/GlobalStyles';
import { commonStyles } from '../../../../utils/styles/commonStyles';
import TimeBookItem from '@screens/app/patient/appointments/createAppointment/components/TimeBookItem';
import { getPractitionerAvailableTimeSlots } from '@screens/app/patient/appointments/createAppointment/useGetAvailableTime';
import { setAppointmentStatus } from './reducer';
import { widthScreen } from '../../../../utils/dimensions';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import {ACTION_SHEET_APPOINTMENT_RESCHEDULE, IAppointment} from '../../../../utils/domainEntities';
import { API_APPOINTMENT } from '../../../../services/api/ApiConstants';
import { apiService } from '../../../../services';
import moment from 'moment';
import useAuth from '@screens/auth/authContext/useAuth';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { DoctorCard } from '@screens/app/patient/detail/cards/doctor/DoctorCard';

const RescheduleApointment = (props: SheetProps<{}>) => {
  const [days] = useState(getNextDays(new Date(), 200));
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(null);
  const [practitionerAvailableTime, setPractitionerAvailableTime] = useState({
    afternoon: [],
    morning: [],
  });

  const { t } = useTranslation();

  const resource: IAppointment = props.payload;

  const { crtInterface } = useAuth();

  const onReschedule = async () => {
    selectedDay.setHours(selectedHour);
    let startDay: Date = selectedDay;

    let endDay: Date = moment(startDay)
      .add(resource?.durationInMin, 'minutes')
      .toDate();

    let toReschedule = {
      appointmentId: resource?.id,
      newStartDate: startDay.getTime(),
      newEndDate: endDay.getTime(),
      rescheduledBy: crtInterface,
    };

    await apiService
      .makePOSTRequest(`${API_APPOINTMENT}/reschedule`, toReschedule)
      .then((res) => {
        res && console.log('res', res);
        props.setStatus(
          res.success.data.id,
          res.success.data.status,
          res.success.data.endDate,
          res.success.data.startDate,
        );
      })
      .finally(() => SheetManager.hide(ACTION_SHEET_APPOINTMENT_RESCHEDULE));

  };

  const handleCancelReschedule = () => {
    SheetManager.hide(ACTION_SHEET_APPOINTMENT_RESCHEDULE);
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getDay() === date2.getDay() &&
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const getTimeSlots = async () => {
    const avaliableTime = await getPractitionerAvailableTimeSlots(
      resource?.practitioner.id,
      resource?.practitionerRoleId,
      selectedDay,
    );

    const slots = avaliableTime.reduce(
      (
        acc: {
          afternoon: Date[];
          morning: Date[];
        },
        currentSlot: Date,
      ) => {
        if (new Date(currentSlot).getHours() <= 13) {
          acc.morning.push(currentSlot);
        } else {
          acc.afternoon.push(currentSlot);
        }
        return acc;
      },
      {
        afternoon: [],
        morning: [],
      },
    );

    console.log({ slots });

    setPractitionerAvailableTime(slots);
  };

  useEffect(() => {
    getTimeSlots();
  }, []);

  const getTitle = (title: string, subtitle?: string) => {
    return (
      <View style={[styles.cardTitle, commonStyles.widthDefault]}>
        <Text style={[styles.title]}>{title}</Text>
        {subtitle && <Text style={[styles.h3Subtitle]}>{subtitle}</Text>}
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
      id={'AppointmentRescheduleSheet'}>
      <Text style={styles.mainText}>{t('appointments:checkHealth')}</Text>
      <DoctorCard
        practitioner={resource?.practitioner}
        isFirstElement={false}
      />

      <View
        style={{
          borderWidth: 1,
          borderRadius: 15,
          borderColor: Color.disabled,
          marginHorizontal: scaleWidth(10),
          paddingHorizontal: scaleWidth(10),
          paddingVertical: scaleHeight(5),
          marginTop: 5,
        }}>
        <View style={[commonStyles.mb10, commonStyles.mt5]}>
          <Text style={[styles.mainText, { marginHorizontal: 0 }]}>
            {t('appointments:reschedule:rescheduleDates')}
          </Text>
          <Text style={{ color: Color.main }}>
            {t('appointments:reschedule:rescheduleMess')}
          </Text>
          <View style={styles.divider} />
        </View>
        <View style={[commonStyles.mb10]}>
          <View style={[styles.topview, { marginLeft: scaleWidth(10) }]}>
            {/* Selected date */}
            <View style={commonStyles.mt5}>
              {getTitle(
                `${
                  MONTH_NAMES_SHORT[selectedDay.getMonth()]
                } ${selectedDay.getFullYear()}`,
              )}
            </View>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={true}
            data={days}
            horizontal={true}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              console.log('Fetching next days..');
            }}
            keyExtractor={(item: Date) => `${item?.getTime()}`}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedDay(item);
                    console.log('Setting the selected day as:', item);
                    getPractitionerFutureAvailableTimeSlots(
                      resource?.practitioner?.id,
                      resource?.practitionerRoleId,
                      item,
                    );
                  }}>
                  <DayBookItem
                    active={isSameDay(item, selectedDay)}
                    date={item}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={[styles.slotTitle, commonStyles.widthDefault]}>
          <Text style={[styles.title]}>{t('appointments:slots:morning')}</Text>
        </View>
        <View style={styles.timeView}>
          {practitionerAvailableTime.morning.map((item, index) => {
            const itemDate = new Date(item);
            return (
              <TimeBookItem
                active={itemDate.getHours() === selectedHour}
                onChoose={(date: Date) => {
                  setSelectedHour(itemDate.getHours());
                }}
                key={index}
                durationInMins={resource.durationInMin}
                time={itemDate}
              />
            );
          })}
        </View>

        <View style={[styles.slotTitle, commonStyles.widthDefault]}>
          <Text style={[styles.title]}>
            {t('appointments:slots:afternoon')}
          </Text>
        </View>
        <View style={styles.timeView}>
          {practitionerAvailableTime.afternoon.map((item, index) => {
            const itemDate = new Date(item);
            return (
              <TimeBookItem
                active={itemDate.getHours() === selectedHour}
                onChoose={(date: Date) => {
                  setSelectedHour(itemDate.getHours());
                }}
                key={index}
                durationInMins={resource?.durationInMin}
                time={itemDate}
              />
            );
          })}
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 16,
          justifyContent: 'space-around',
          marginTop: 10,
        }}>
        <View style={{ width: '40%' }}>
          <ButtonPrimary
            onPress={() => handleCancelReschedule()}
            style={{ backgroundColor: Color.disabled }}
            title={t('appointments:cancel')}
          />
        </View>
        <View style={{ width: '40%' }}>
          <ButtonPrimary
            onPress={() => onReschedule()}
            title={t('appointments:confirm')}
          />
        </View>
      </View>
    </ActionSheet>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setStatus: (id, status, endDate, startDate) =>
    dispatch(setAppointmentStatus(id, status, endDate, startDate)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RescheduleApointment);

const styles = ScaledSheet.create({
  mainText: {
    marginHorizontal: scaleWidth(15),
    fontSize: scaleHeight(18),
    fontFamily: fonts.URBANIST.Bold,
    marginBottom: scaleHeight(10),
  },
  timeView: {
    width: widthScreen,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: scaleHeight(5),
  },
  topview: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtSpecialized: {
    fontFamily: fonts.URBANIST.Regular,
    fontSize: scaleHeight(14),
    color: Color.brown,
  },
  description: {
    maxWidth: '95%',
    fontSize: FontSize.fontH6,
    fontFamily: fonts.URBANIST.Medium,
    color: Color.dimgray_400,
  },
  h3Subtitle: {
    textAlign: 'left',
    fontSize: FontSize.fontH4,
    color: Color.accent,
    fontFamily: fonts.URBANIST.Regular,
    fontWeight: '600',
    lineHeight: 25,
    marginLeft: scaleWidth(Margin.m_10),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaleHeight(3),
    marginLeft: scaleWidth(20),
  },
  txtDoctorName: {
    fontFamily: fonts.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(27),
    color: Color.accent,
  },
  cardTitle: {
    marginBottom: scaleHeight(Margin.m_5),
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  slotTitle: {
    marginTop: scaleHeight(5),
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  rating: {
    fontSize: 14,
    color: Color.sandybrown_200,
  },
  position: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    textAlign: 'left',
    fontSize: FontSize.fontH4,
    color: Color.gray_700,
    fontFamily: fonts.URBANIST.Regular,
    fontWeight: '700',
    lineHeight: 24,
  },

  divider: {
    height: 1,
    backgroundColor: Color.disabled,
    marginTop: 6,
  },
  textInfo: {
    marginLeft: scaleWidth(20),
  },
  practitionerSection: {
    backgroundColor: Color.white,
    flexDirection: 'row',
    marginTop: scaleHeight(5),
    marginHorizontal: scaleWidth(10),
    paddingVertical: scaleHeight(15),
    paddingHorizontal: scaleWidth(10),
    borderRadius: scaleWidth(16),
    alignItems: 'center',
    borderWidth: scaleWidth(1),
    borderColor: Color.border,
  },
});
