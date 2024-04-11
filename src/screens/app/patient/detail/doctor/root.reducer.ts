import { combineReducers } from 'redux';
import services from '@screens/app/patient/detail/doctor/services/reducer';
import detail from '@screens/app/patient/detail/doctor/reducer';

export default combineReducers({
  // ## Generator Reducers
  services,
  detail,
});
