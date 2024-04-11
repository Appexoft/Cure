import React, { memo, useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color, FontSize, Margin } from '../../../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import FONTS from '../../../../../utils/fonts';
import Fonts from '../../../../../utils/fonts';
import ROUTES from '../../../../../utils/routes';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import TimeBookItem from '@screens/app/patient/appointments/createAppointment/components/TimeBookItem';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import DayBookItem from '@screens/app/patient/appointments/createAppointment/components/DayBookItem';
import { MONTH_NAMES_SHORT } from '../../../../../utils/entityUtils';
import { commonStyles } from '../../../../../utils/styles/commonStyles';
import { widthScreen } from '../../../../../utils/dimensions';
import useAuth from '@screens/auth/authContext/useAuth';
import useGetAppointments from '@screens/app/patient/home/components/homeAppointments/useGetAppointments';
import {
  getPriceDisplay,
  IPractitioner,
  IPractitionerRole,
} from '../../../../../utils/domainEntities';
import { useTranslation } from 'react-i18next';
import { DoctorCard } from '@screens/app/patient/detail/cards/doctor/DoctorCard';
import { ServiceCard } from '@screens/app/patient/detail/cards/service/ServiceCard';
import { getNextDays } from '../../../../../utils/GlobalUtils';
import moment from 'moment';

export interface ICreateAppointment {
  startDate: number;
  endDate: number;
  patientInstruction: string;

  practitionerId: bigint;
  practitionerRoleId: bigint;
  patientId: bigint;
}

const CreateAppointment = memo(
  ({
    route,
    navigation,
    practitionerAvailableTime,
    getPractitionerFutureAvailableTimeSlots,
    create,
    created,
  }) => {
    const {
      practitionerRole,
      practitioner,
    }: { practitionerRole: IPractitionerRole; practitioner: IPractitioner } =
      route.params;

    const { patient } = useAuth();
    const { t } = useTranslation();

    const [days, setDays] = useState(getNextDays(new Date(), 200)); 
    const [selectedDay, setSelectedDay] = useState(new Date());
    const [refetchAppointments, setRefetchAppointments] = useState(false);

    const [selectedHour, setSelectedHour] = useState(null);
    useGetAppointments(patient?.id, refetchAppointments);

    useEffect(() => {
      if (created && navigation) {
        setRefetchAppointments(true);
        navigation.navigate(ROUTES.Patient_BottomTab);
      }
    }, [created, navigation]);

    useEffect(() => {
      getPractitionerFutureAvailableTimeSlots(
        practitioner?.id,
        practitionerRole?.id,
        selectedDay,
      );
    }, [practitioner, practitionerRole, selectedDay]);

    /**
     * Will create a booking
     */
    const onBookNow = useCallback(() => {
      selectedDay.setHours(selectedHour);
      let startDay: Date = selectedDay;
      let endDay: Date = moment(startDay)
        .add(practitionerRole?.durationInMin, 'minutes')
        .toDate();

      let toCreate: ICreateAppointment = {
        startDate: startDay.getTime(),
        endDate: endDay.getTime(),

        patientInstruction: '',
        practitionerId: practitioner?.id,
        practitionerRoleId: practitionerRole?.id,
        patientId: patient?.id,
      };
      console.log('toCreate', toCreate);
      create(toCreate);
    }, [
      patient,
      practitioner,
      practitionerRole,
      selectedDay,
      selectedHour,
      create,
    ]);

    const getTitle = (title: string, subtitle?: string) => {
      return (
        <View style={[styles.cardTitle, commonStyles.widthDefault]}>
          <Text style={[styles.title]}>{title}</Text>
          {subtitle && <Text style={[styles.h3Subtitle]}>{subtitle}</Text>}
        </View>
      );
    };

    const isSameDay = (date1: Date, date2: Date) => {
      return (
        date1.getDay() === date2.getDay() &&
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
      );
    };

    return (
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        <View style={styles.topview}>
          {getTitle(t('patient:appointments:doctor'))}
          <DoctorCard practitioner={practitioner} isFirstElement={false} />

          {getTitle('Service')}
          <ServiceCard
            resource={practitionerRole}
            isFirstElement={false}
          />

          <View>
            {/* Price */}
            {getTitle(
              'Price',
              getPriceDisplay(
                practitionerRole?.priceValue,
                practitionerRole?.priceCurrency,
              ),
            )}
            {getTitle('Duration', practitionerRole.durationInMin + ' minutes')}
          </View>
        </View>
        <View style={styles.topview}>
          {/* Selected date */}
          <View style={commonStyles.mt5}>
            {getTitle(
              `${
                MONTH_NAMES_SHORT[selectedDay.getMonth()]
              } ${selectedDay.getFullYear()}`,
            )}
          </View>
        </View>
        <View style={styles.datesView}>
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
                    getPractitionerFutureAvailableTimeSlots(
                      practitioner?.id,
                      practitionerRole?.id,
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
        <View style={styles.timeView}>
          {practitionerAvailableTime.map((item, index) => {
            const itemDate = new Date(item);
            return (
              <TimeBookItem
                active={itemDate.getHours() === selectedHour}
                onChoose={(date: Date) => {
                  setSelectedHour(itemDate.getHours());
                }}
                key={index}
                durationInMins={practitionerRole.durationInMin}
                time={itemDate}
              />
            );
          })}
        </View>
        <ButtonPrimary
          style={styles.buttonPrimary}
          onPress={onBookNow}
          disabled={selectedHour === null}
          title={'Book Now'}
        />
      </ScrollView>
    );
  },
);
export default CreateAppointment;

const styles = ScaledSheet.create({
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + scaleHeight(24),
  },
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
  },
  datesView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: scaleWidth(10),
    marginLeft: scaleWidth(30),
    width: '100%',
  },

  title: {
    textAlign: 'left',
    fontSize: FontSize.fontH4,
    color: Color.gray_700,
    fontFamily: Fonts.URBANIST.Regular,
    fontWeight: '700',
    lineHeight: 24,
  },

  h3Subtitle: {
    textAlign: 'left',
    fontSize: FontSize.fontH4,
    color: Color.accent,
    fontFamily: Fonts.URBANIST.Regular,
    fontWeight: '600',
    lineHeight: 25,
    marginLeft: scaleWidth(Margin.m_10),
  },
  cardTitle: {
    marginBottom: scaleHeight(Margin.m_5),
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },

  topview: {
    flexDirection: 'column',
    marginTop: scaleHeight(Margin.between_statusBar_content),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  svgVideo: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(16),
    backgroundColor: Color.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgMessage: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(16),
    backgroundColor: Color.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgpractitionerImg: {
    width: scaleWidth(120),
    height: scaleWidth(120),
    borderRadius: scaleWidth(60),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  practitionerName: {
    textAlign: 'center',
    marginTop: scaleHeight(10),
    fontStyle: 'normal',
    fontWeight: '600',
    fontFamily: FONTS.URBANIST.SemiBold,
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(32),
    color: Color.main,
    marginBottom: scaleHeight(22),
  },
  calendarView: {
    marginHorizontal: scaleWidth(16),
    borderRadius: scaleWidth(6),
    overflow: 'hidden',
  },
  headerStyle: {
    backgroundColor: Color.blueAccent,
    marginHorizontal: scaleWidth(-6),
  },
  buttonPrimary: {
    width: scaleWidth(295),
    alignSelf: 'center',
    marginTop: scaleHeight(24),
  },
  timeView: {
    width: widthScreen,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: scaleHeight(16),
    marginHorizontal: scaleWidth(16),
  },
  week: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scaleWidth(16),
    marginBottom: scaleHeight(8),
  },
  dayHeader: {
    color: Color.main,
    fontFamily: FONTS.URBANIST.SemiBold,
    fontSize: scaleHeight(14),
    textAlign: 'center',
  },
});
