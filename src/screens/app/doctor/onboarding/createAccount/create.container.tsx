import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { updateFavorites } from '@screens/app/patient/detail/doctor/reducer';
import CreateAccount from '@screens/app/doctor/onboarding/createAccount/create.component';
import {
  updatePractitionerPersonalDetails,
  updatePractitionerProfession,
  updatePractitionerEducation,
  fetchPractitionerEducation,
  fetchPractitionerCertificates,
} from '@screens/app/doctor/onboarding/createAccount/reducer';
const mapStateToProps = (state: any) => ({
  practitioner: state.app.doctor.onboarding.practitioner,
  educationItems: state.app.doctor.onboarding.educationItems,
  certificatesItems: state.app.doctor.onboarding.certificatesItems,
  updateSuccess: state.app.doctor.onboarding.updateSuccess,
  loading: state.app.doctor.onboarding.loading,
  error: state.app.doctor.onboarding.errorMessage,
});

export default connect(mapStateToProps, {
  updateFavorites,
  updatePractitionerPersonalDetails,
  updatePractitionerProfession,
  updatePractitionerEducation,
  fetchPractitionerEducation,
  fetchPractitionerCertificates,
})(withTranslation(['main', 'common', 'validation'])(CreateAccount));
