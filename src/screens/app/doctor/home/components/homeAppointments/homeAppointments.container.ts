import { connect } from 'react-redux';
import HomeAppointmentsComponent from '@screens/app/doctor/home/components/homeAppointments/HomeAppointments.component';
import { withTranslation } from 'react-i18next';
import { fetchAppointments } from '@screens/app/doctor/home/reducer';
const mapStateToProps = (state) => ({
  practitioner: state.app.doctor.crt.practitioner,
  appointments: state.app.doctor.crt.appointments,
  appointmentsTotalItems: state.app.doctor.crt.appointmentsTotalItems,
  loading: state.app.doctor.crt.loading,
});

export default connect(mapStateToProps, {
  fetchAppointments,
})(
  withTranslation(['main', 'common', 'validation'])(HomeAppointmentsComponent),
);
