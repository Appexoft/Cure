import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fontH2 } from '../../../../utils/themeUtils';
import { SheetManager } from 'react-native-actions-sheet';
import {
  ACTION_SHEET_SWITCH_ACCOUNT,
  EntityType,
  IAppointment,
  IPractitioner,
  TableSearchDto,
} from '../../../../utils/domainEntities';
import { HeaderSwitchAccount } from '@components/header/header-switch-account';
import { useTranslation } from 'react-i18next';
import {
  Agenda,
  CalendarProvider,
  ExpandableCalendar,
  TimelineList,
  TimelineProps,
} from 'react-native-calendars';
import AgendaEventItem from '@screens/app/doctor/calendar/components/AgendaEventItem';
import { Color } from '../../../../utils/GlobalStyles';
import { CalendarUtils } from 'react-native-calendars/src';

export enum ViewType {
  DAY,
  WEEK,
}

interface Props {
  items: IAppointment[];
  totalItems: number;

  practitioner: IPractitioner;

  fetchData: (data: TableSearchDto) => void;

  loading: boolean;
  updateSuccess: boolean;
  error: string;
}
export const FORMAT_DATE = 'YYYY-MM-DD';
export const FORMAT_DATE_TIMELINE = 'YYYY-MM-DD hh:mm:ss';
const INITIAL_TIME = { hour: 9, minutes: 0 };

const today = new Date();
export const getDate = (offset = 0) =>
  CalendarUtils.getCalendarDateString(
    new Date().setDate(today.getDate() + offset),
  );

const AgendaPage = (props: Props) => {
  const { t } = useTranslation();

  const {
    items,
    practitioner,
    fetchData,
  } = props;

  const [viewType, setViewType] = useState(ViewType.WEEK); // todo save this on local storage?
  const [emptyDates, setEmptyDates] = useState({});
  const [crtDate, setCrtDate] = useState(new Date());
  const [crtDateAsString, setCrtDateAsString] = useState(
    moment(new Date()).format(FORMAT_DATE),
  );
  const [startDate, setStartDate] = useState(
    moment(new Date()).startOf('month').toDate(),
  );
  const [endDate, setEndDate] = useState(
    moment(new Date()).add(2, 'M').endOf('month').toDate(),
  );
  const [weekEvents, setWeekEvents] = useState({});
  const [dayEvents, setDayEvents] = useState({});

  const fillZeroes = (value: number) => {
    const valueAsNumber = parseInt(value);
    if (valueAsNumber >= 10) {
      return value + '';
    }
    if (valueAsNumber < 10 && valueAsNumber > 0) {
      return '0' + value;
    }
    return '';
  };

  /**
   * Prefill the empty dates (required for agenda)
   */
  useEffect(() => {
    let daysOfCalendar = { ...emptyDates };

    for (
      let d = new Date(startDate);
      d <= endDate;
      d.setDate(d.getDate() + 1)
    ) {
      const crtMonth = d.getMonth() + 1;
      const crtKey =
        d.getFullYear() +
        '-' +
        fillZeroes(crtMonth) +
        '-' +
        fillZeroes(d.getDate());
      daysOfCalendar[crtKey] = [];
    }
    setEmptyDates(daysOfCalendar);
  }, [startDate, endDate]);

  /**
   * Fetch appointments upon loading
   */
  useEffect(() => {
    if (practitioner && practitioner.id && fetchData) {
      const filters = [
        { id: 'startDate', value: startDate.getTime() },
        { id: 'endDate', value: endDate.getTime() },
      ];

      let data: TableSearchDto = {
        sortBy: [{ id: 'createdDate', desc: true }],
        filters: filters,
        byEntity: {
          entityType: EntityType.PRACTITIONER_ENTITY,
          id: practitioner.id,
          ids: [],
        },
        pageSize: 999999,
        pageIndex: 0,
      };
      fetchData(data);
    }
  }, [practitioner, fetchData, viewType, startDate, endDate]);

  /**
   * Format new appointments for the calendar
   */
  useEffect(() => {
    if (items) {
      let crtWeekEvents = { ...emptyDates, ...weekEvents };

      items.forEach((item: IAppointment) => {
        const momentDate = moment(new Date(item.startDate));
        const key = momentDate.format(FORMAT_DATE);

        crtWeekEvents[key] = {
          id: item.id,
          name: item.nameText,
          title: item.nameText,
          summary: item.nameText,
          height: item.durationInMin <= 30 ? 80 : 110,
          day: moment(new Date(item.startDate)).format(FORMAT_DATE),
          duration: item.durationInMin,
          patient: item.patient,
          patientId: item.patientId,
          startDate: item.startDate,
          endDate: item.endDate,
          icon: item.qualificationMedicalField.icon,
          isLast: false,
        };
      });
      setWeekEvents(crtWeekEvents);
      setDayEvents(crtWeekEvents);
    }
  }, [endDate, items, startDate]);

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>{t('common:noAppointments')}</Text>
      </View>
    );
  };

  const onDateChanged = (date: string, source: string) => {
    console.log('TimelineCalendarScreen onDateChanged: ', date, source);
  };

  const onMonthChange = (month: any, updateSource: any) => {
    console.log('TimelineCalendarScreen onMonthChange: ', month, updateSource);
  };

  const timelineProps: Partial<TimelineProps> = {
    format24h: true,
    scrollToFirst: true,
    unavailableHours: [
      { start: 0, end: 6 },
      { start: 22, end: 24 },
    ],
    overlapEventsSpacing: 10,
    rightEdgeSpacing: 25,
    timelineLeftInset: 50,
    showNowIndicator: true,
    theme: {
      todayTextColor: Color.main,
      dayTextColor: Color.main,
      agendaDayTextColor: Color.main,
    },
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderSwitchAccount
        title={t('header:calendar')}
        leftContent
        onLeftPress={() => {
          SheetManager.hide(ACTION_SHEET_SWITCH_ACCOUNT);
          SheetManager.show(ACTION_SHEET_SWITCH_ACCOUNT);
        }}
        onRightPress={() => {
          setViewType(viewType === ViewType.DAY ? ViewType.WEEK : ViewType.DAY);
        }}
        rightIconName={viewType === ViewType.WEEK ? 'columns' : 'calendar'}
      />

      {viewType === ViewType.WEEK && (
        <View
          style={{
            padding: 15,
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'space-around',
          }}>
          <Text
            style={{ fontSize: fontH2, fontWeight: 'bold', marginRight: 10 }}>
            {moment(crtDate).format('dddd, MMM D')}
          </Text>
        </View>
      )}

      <View style={{ flex: 1 }}>
        {viewType === ViewType.WEEK && (
          <Agenda
            selected={crtDateAsString}
            items={weekEvents}
            loadItemsForMonth={(month) => {
              setStartDate(
                moment(new Date(month.timestamp)).startOf('month').toDate(),
              );
              setEndDate(
                moment(new Date(month.timestamp))
                  .add(2, 'M')
                  .endOf('month')
                  .toDate(),
              );
              console.log(
                'New start month:' +
                  (startDate.getMonth() + 1) +
                  ', new End month:' +
                  (endDate.getMonth() + 1),
              );
            }}
            // Callback that fires when the calendar is opened or closed
            onCalendarToggled={(calendarOpened) => {
              console.log('calendarOpened');
            }}
            onDayPress={(day) => {
              console.log('day pressed:', day);
              const date = new Date(day.timestamp);
            }}
            // Callback that gets called when day changes while scrolling agenda list
            onDayChange={(day) => {
              console.log('day changed:', day);
              const date = new Date(day.timestamp);
            }}
            hideKnob={false}
            // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
            onRefresh={() => console.log('refreshing...')}
            renderItem={(e) => <AgendaEventItem event={e} />}
            renderEmptyDate={renderEmptyDate}
            // Agenda theme
            theme={{
              agendaDayTextColor: Color.main,
              agendaDayNumColor: 'green',
              agendaTodayColor: Color.main,
            }}
          />
        )}

        {viewType === ViewType.DAY && (
          <CalendarProvider
            date={crtDateAsString}
            onDateChanged={onDateChanged}
            onMonthChange={onMonthChange}
            showTodayButton
            disabledOpacity={0.6}
            // numberOfDays={3}
          >
            <ExpandableCalendar
              firstDay={1}
            />
            <TimelineList
              events={dayEvents}
              showNowIndicator={true}
              timelineProps={timelineProps}
              scrollToNow
              initialTime={INITIAL_TIME}
            />
          </CalendarProvider>
        )}
      </View>
    </View>
  );
};

export default AgendaPage;

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
