import React, { useState } from 'react';
import { scaleHeight, scaleWidth } from '../../../../../../utils/size';
import FONTS from '../../../../../../utils/fonts';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import moment from 'moment';
import { ScaledSheet } from 'react-native-size-matters';
import {Color} from "../../../../../../utils/GlobalStyles";

const CalendarItem = () => {
  const currentDateObject: DateData = {
    year: moment().year(),
    month: moment().month(),
    day: moment().day(),
    timestamp: moment().valueOf(),
    dateString: moment().format(),
  };
  const [dateSelect, setDateSelect] = useState<DateData>(currentDateObject);
  const markedDay = {
    [dateSelect.dateString]: { selected: true, marked: true },
  };
  LocaleConfig.locales.en = {
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  };
  LocaleConfig.defaultLocale = 'en';
  return (
    <Calendar
      style={styles.calendarView}
      firstDay={1}
      startFromMonday={true}
      current={dateSelect.dateString}
      markedDates={markedDay}
      onDayPress={(dateChose) => setDateSelect(dateChose)}
      theme={{
        arrowColor: '#FFF',
        'stylesheet.calendar.header': {
          week: styles.week,
        },
        selectedDayBackgroundColor: Color.main,
        calendarBackground: Color.third,
        textDayFontFamily: FONTS.HIND.Regular,
        textDayFontSize: scaleHeight(12),
        textMonthFontFamily: FONTS.HIND.Regular,
        textMonthFontWeight: '500',
        textMonthFontSize: scaleHeight(18),
        textDayHeaderFontFamily: FONTS.HIND.Regular,
        textDayHeaderFontSize: scaleHeight(12),
        monthTextColor: Color.main,
        dayTextColor: Color.main,
        todayTextColor: Color.main,
        textDisabledColor: '#D5D5D5',
        selectedDayTextColor: Color.third,
      }}
    />
  );
};

export default CalendarItem;

const styles = ScaledSheet.create({
  calendarView: {
    borderBottomLeftRadius: scaleWidth(16),
    borderBottomRightRadius: scaleWidth(16),
    overflow: 'hidden',
    paddingBottom: scaleHeight(20),
  },
  week: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scaleWidth(16),
    marginTop: scaleHeight(24),
    marginBottom: scaleHeight(14),
  },
  dayHeader: {
    color: Color.main,
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '600',
    fontSize: scaleHeight(14),
    textAlign: 'center',
  },
});
