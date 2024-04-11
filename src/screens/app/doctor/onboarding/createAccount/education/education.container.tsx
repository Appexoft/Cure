import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import Education from '@screens/app/doctor/onboarding/createAccount/education/education.component';
import {
  fetchPractitionerEducation,
  deletePractitionerEducation,
} from '@screens/app/doctor/onboarding/createAccount/reducer';
const mapStateToProps = (state: any) => ({
  practitioner: state.app.doctor.onboarding.practitioner,
  educationItems: state.app.doctor.onboarding.educationItems,
  updateSuccess: state.app.doctor.onboarding.updateSuccess,
  loading: state.app.doctor.onboarding.loading,
  error: state.app.doctor.onboarding.errorMessage,
});

export default connect(mapStateToProps, {
  fetchPractitionerEducation,
  deletePractitionerEducation,
})(withTranslation(['main', 'common', 'validation'])(Education));
