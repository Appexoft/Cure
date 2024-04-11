import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import CreateAppointment from '@screens/app/patient/appointments/createAppointment/create.component';
import {
  getPractitioner,
  getPractitionerFutureAvailableTimeSlots,
  create,
} from '@screens/app/patient/appointments/createAppointment/reducer';
const mapStateToProps = (state: any) => ({
  practitioner: state.app.patient.appointments.create.practitioner,
  practitionerAvailableTime:
    state.app.patient.appointments.create.practitionerAvailableTime,

  created: state.app.patient.appointments.create.created,
  loading: state.app.patient.appointments.create.loading,
  error: state.app.patient.appointments.create.errorMessage,
});

export default connect(mapStateToProps, {
  getPractitioner,
  getPractitionerFutureAvailableTimeSlots,
  create,
})(withTranslation(['main', 'common', 'validation'])(CreateAppointment));
