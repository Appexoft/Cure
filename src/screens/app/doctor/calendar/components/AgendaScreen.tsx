import React, { useEffect } from 'react';
import moment from 'moment';
import { StyleSheet, Text, View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents } from '@screens/app/doctor/calendar/calendarSlice';
import AgendaEventItem from '@screens/app/doctor/calendar/components/AgendaEventItem';

const AgendaScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
  }, [getAllEvents]);

  const events = useSelector((state) => state.app.events.events.events);

  const today = moment().format('YYYY-MM-DD');

  const formatedEvents = events?.reduce((acc: any, item: any) => {
    const key = moment(new Date(item.startDate)).format('YYYY-MM-DD');
    const formattedData = {
      id: item.id,
      name: item.nameText,
      day: moment(new Date(item.startDate)).format('YYYY-MM-DD'),
      duration: item.durationInMin,
      patient: item.patient,
      patientId: item.patientId,
      startDate: item.startDate,
      endDate: item.endDate,
      icon: item.qualificationMedicalField.icon,
      height: item.durationInMin <= 30 ? 80 : 110,
      isLast: false,
    };

    if (acc[key]) {
      acc[key].push(formattedData);
    } else {
      acc[key] = [formattedData];
    }
    return acc;
  }, {});

  if (formatedEvents[today]) {
    const eventsForToday = formatedEvents[today];
    if (eventsForToday.length > 0) {
      eventsForToday[eventsForToday.length - 1].isLast = true;
    }
  }

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        renderItem={(e) => <AgendaEventItem event={e} />}
        items={formatedEvents}
        renderEmptyDate={renderEmptyDate}
      />
    </View>
  );
};

export default AgendaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
