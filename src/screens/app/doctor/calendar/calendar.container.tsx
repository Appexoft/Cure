import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import Calendar from '@screens/app/doctor/calendar/calendar.component';
import { fetchAppointments } from '@screens/app/doctor/calendar/reducer';

const mapStateToProps = (state: any) => ({
  practitioner: state.app.doctor.crt.practitioner,

  items: state.app.doctor.calendar.items,
  totalItems: state.app.doctor.calendar.totalItems,

  updateSuccess: state.app.doctor.calendar.updateSuccess,
  loading: state.app.doctor.calendar.loading,
  error: state.app.doctor.calendar.errorMessage,
});

export default connect(mapStateToProps, {
  fetchData: fetchAppointments,
})(withTranslation(['main', 'common', 'validation'])(Calendar));
