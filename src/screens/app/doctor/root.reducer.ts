import { combineReducers } from 'redux';
import crt from '@screens/app/doctor/home/reducer';
import onboarding from '@screens/app/doctor/onboarding/createAccount/reducer';
import home from '@screens/app/patient/home/homeSlice';
import servicesHospitalsTabs from '@screens/app/doctor/services/reducer';
import events from '@screens/app/doctor/calendar/calendarSlice';
import calendar from '@screens/app/doctor/calendar/reducer';

export default combineReducers({
  // ## Generator Reducers
  crt,
  onboarding,
  home,
  servicesHospitalsTabs,
  events,
  calendar,
});
