import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import AddEducationComponent from '@screens/app/doctor/onboarding/createAccount/education/sheet/addEducation.component';
import {
  addPractitionerEducation,
  updatePractitionerEducation,
  fetchPractitionerEducation,
} from '@screens/app/doctor/onboarding/createAccount/reducer';
const mapStateToProps = (state: any) => ({
  practitioner: state.app.doctor.onboarding.practitioner,
  educationItems: state.app.doctor.onboarding.educationItems,
  updateSuccess: state.app.doctor.onboarding.updateSuccess,
  loading: state.app.doctor.onboarding.loading,
  error: state.app.doctor.onboarding.errorMessage,
});

export default connect(mapStateToProps, {
  addPractitionerEducation,
  updatePractitionerEducation,
  fetchPractitionerEducation,
})(withTranslation(['main', 'common', 'validation'])(AddEducationComponent));
