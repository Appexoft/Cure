import { registerSheet } from 'react-native-actions-sheet';
import AddEducationSheet from '@screens/app/doctor/onboarding/createAccount/education/sheet/addEducation.sheet';
import AddCertificateSheet from '@screens/app/doctor/onboarding/createAccount/certificates/sheet/addCertificate.sheet';
import SwitchAccountSheet from './switchAccountSheet/switchAccount.sheet';
import {
  ACTION_SHEET_ADD_CERTIFICATE,
  ACTION_SHEET_ADD_EDUCATION,
  ACTION_SHEET_APPOINTMENT_ACCEPT,
  ACTION_SHEET_APPOINTMENT_DETAILS,
  ACTION_SHEET_APPOINTMENT_RESCHEDULE,
  ACTION_SHEET_SWITCH_ACCOUNT,
} from '../../utils/domainEntities';
import AppointmentDetailsSheet from './appointments/AppointmentDetails/AppointmentDetailsSheet';
import RescheduleApointment from './appointments/RescheduleApointment';
import AcceptAppointmentSheet from './appointments/AcceptAppointment/AcceptAppointment';

registerSheet(ACTION_SHEET_ADD_EDUCATION, AddEducationSheet);
registerSheet(ACTION_SHEET_ADD_CERTIFICATE, AddCertificateSheet);
registerSheet(ACTION_SHEET_SWITCH_ACCOUNT, SwitchAccountSheet);
registerSheet(ACTION_SHEET_APPOINTMENT_DETAILS, AppointmentDetailsSheet);
registerSheet(ACTION_SHEET_APPOINTMENT_RESCHEDULE, RescheduleApointment);
registerSheet(ACTION_SHEET_APPOINTMENT_ACCEPT, AcceptAppointmentSheet);

export {};
