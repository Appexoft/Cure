import { combineReducers } from 'redux';
import signUp from '@screens/auth/SignUp/signUpSlice';
import crt from '@screens/auth/authContext/crtSlice';

export default combineReducers({
  signUp: signUp,
  crt,
});
