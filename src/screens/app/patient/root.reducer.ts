import { combineReducers } from 'redux';
import home from '@screens/app/patient/home/homeSlice';
import search from '@screens/app/patient/search/reducer';
import detail from '@screens/app/patient/detail/root.reducer';
import appointments from '@screens/app/patient/appointments/root.reducer';
import favorites from '@screens/app/patient/favorites/reducer';

export default combineReducers({
  // ## Generator Reducers
  home,
  search,
  detail,
  appointments,
  favorites,
});
