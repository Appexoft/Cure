import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { updateFavorites } from '@screens/app/patient/detail/doctor/reducer';
import DoctorDetailComponent from '@screens/app/patient/detail/doctor/doctorDetail.component';
import { fetchPractitionerFavorites } from '@screens/app/patient/favorites/reducer';

const mapStateToProps = (state: any) => ({
  practitionerFavorites: state.app.patient.favorites.practitionerFavorites,
  updateSuccess: state.app.patient.detail.doctor.detail.updateSuccess,
  loading: state.app.patient.detail.doctor.detail.loading,
  error: state.app.patient.detail.doctor.detail.errorMessage,
});

export default connect(mapStateToProps, {
  updateFavorites,
  fetchPractitionerFavorites,
})(withTranslation(['main', 'common', 'validation'])(DoctorDetailComponent));
