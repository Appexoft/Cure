import { combineReducers } from 'redux';
import patient from '@screens/app/patient/root.reducer';
import doctor from '@screens/app/doctor/root.reducer';
import organisation from '@screens/app/hospital/root.reducer';
import events from '@screens/app/doctor/root.reducer';

export default combineReducers({
  // ## Generator Reducers
  patient,
  doctor,
  organisation,
  events,
});
