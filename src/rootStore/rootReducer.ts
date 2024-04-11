import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import menu from './reducers/menuSlice';
import theme from './reducers/themeSlice';
import auth from '@screens/auth/auth.reducer';
import app from '@screens/app/root.reducer';

export default combineReducers({
  // ## Generator Reducers
  menu,
  theme,
  auth,
  app,
});
