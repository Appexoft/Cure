import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import moment from 'moment';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

export const parseDate = (date: Date) => {
  return timeAgo.format(date);
};

export const parseDateString = (date: Date) => {
  if (date) {
    return timeAgo.format(new Date(date));
  }
  return '';
};

export const getNextDays = (start: Date, count: number) => {
  let days = [];
  for (let i = 0; i < count; i++) {
    let thisDay = moment(start).add(i, 'days');
    days.push(thisDay.toDate());
  }
  return days;
};
