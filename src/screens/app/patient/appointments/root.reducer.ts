import { combineReducers } from 'redux';
import create from '@screens/app/patient/appointments/createAppointment/reducer';
import appointments from '../../../../containers/sheets/appointments/RescheduleApointment/reducer';

export default combineReducers({
  // ## Generator Reducers
  create,
  appointments,
});
