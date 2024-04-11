import { combineReducers } from 'redux';
import home from '@screens/app/patient/home/homeSlice';

export default combineReducers({
  // ## Generator Reducers
  home,
});

/**
 * import ApplyAsOrg_Wizzard from '@screens/app/organisation/apply/wizzard';
 * import ApplyAsOrg_Details from '@screens/app/organisation/apply/2_Details';
 * import ApplyAsOrg_Type from '@screens/app/doctor/apply/3_Profession';
 * import ApplyAsOrg_KYC from '@screens/app/organisation/apply/4_KYC';
 * import ApplyAsOrg_Services from '@screens/app/organisation/apply/5_Services';
 * import ApplyAsOrg_InviteOthers from '@screens/app/organisation/apply/6_InviteOthers';
 */
