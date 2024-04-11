import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import AddCertificateComponent from '@screens/app/doctor/onboarding/createAccount/certificates/sheet/addCertificate.component';
import {
  addPractitionerCertificates,
  updatePractitionerCertificates,
  fetchPractitionerCertificate,
} from '@screens/app/doctor/onboarding/createAccount/reducer';
const mapStateToProps = (state: any) => ({
  practitioner: state.app.doctor.onboarding.practitioner,
  certificatesItems: state.app.doctor.onboarding.certificatesItems,
  updateSuccess: state.app.doctor.onboarding.updateSuccess,
  loading: state.app.doctor.onboarding.loading,
  error: state.app.doctor.onboarding.errorMessage,
});

export default connect(mapStateToProps, {
  addPractitionerCertificates,
  updatePractitionerCertificates,
  fetchPractitionerCertificate,
})(withTranslation(['main', 'common', 'validation'])(AddCertificateComponent));
