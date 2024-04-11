import { connect } from 'react-redux';
import HomePage from '@screens/app/doctor/home/home';
import { withTranslation } from 'react-i18next';
import {
  fetchPractitioner,
  fetchAppointments,
} from '@screens/app/doctor/home/reducer';
const mapStateToProps = (state) => ({
  practitioner: state.app.doctor.crt.practitioner,
  appointments: state.app.doctor.crt.appointments,
  appointmentsTotalItems: state.app.doctor.crt.appointmentsTotalItems,
  loading: state.app.doctor.crt.loading,
});

export default connect(mapStateToProps, {
  fetchPractitioner,
  fetchAppointments,
})(withTranslation(['main', 'common', 'validation'])(HomePage));
