import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import {
  fetchPractitionerFavorites,
  fetchPractitionerRoleFavorites,
  fetchOrganizationFavorites,
  updateFavorites,
} from '@screens/app/patient/favorites/reducer';
import { PatientsComponent } from '@screens/app/doctor/patients/patients.component';

const mapStateToProps = (state: any) => ({
  practitioner: state.app.doctor.crt.practitioner,

  updateSuccess: state.app.patient.favorites.updateSuccess,
  loading: state.app.patient.favorites.loading,
  error: state.app.patient.favorites.errorMessage,
});

export default connect(mapStateToProps, {
  fetchPractitionerFavorites,
  fetchPractitionerRoleFavorites,
  fetchOrganizationFavorites,
  updateFavorites,
})(withTranslation(['main', 'common', 'validation'])(PatientsComponent));
