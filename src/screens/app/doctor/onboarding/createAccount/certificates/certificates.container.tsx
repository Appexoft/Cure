import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import Certificates from '@screens/app/doctor/onboarding/createAccount/certificates/certificates.component';
import {
  fetchPractitionerCertificate,
  deletePractitionerCertificate,
} from '@screens/app/doctor/onboarding/createAccount/reducer';
const mapStateToProps = (state: any) => ({
  practitioner: state.app.doctor.onboarding.practitioner,
  items: state.app.doctor.onboarding.certificatesItems,
  updateSuccess: state.app.doctor.onboarding.updateSuccess,
  loading: state.app.doctor.onboarding.loading,
  error: state.app.doctor.onboarding.errorMessage,
});

export default connect(mapStateToProps, {
  fetch: fetchPractitionerCertificate,
  deleteItem: deletePractitionerCertificate,
})(withTranslation(['main', 'common', 'validation'])(Certificates));
