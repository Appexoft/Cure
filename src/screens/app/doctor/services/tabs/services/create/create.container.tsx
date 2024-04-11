import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import CreateComponent from '@screens/app/doctor/services/tabs/services/create/create.component';
import {
  createPractitionerRole,
  fetchServicesOfPractitioner,
} from '@screens/app/doctor/services/reducer';

const mapStateToProps = (state: any) => ({
  practitioner: state.app.doctor.crt.practitioner,

  items: state.app.doctor.servicesHospitalsTabs.items,
  totalItems: state.app.doctor.servicesHospitalsTabs.totalItems,

  practitionerRole: state.app.doctor.servicesHospitalsTabs.practitionerRole,
  updateSuccess: state.app.doctor.servicesHospitalsTabs.updateSuccess,
  loadingCrud: state.app.doctor.servicesHospitalsTabs.loadingCrud,
  loading: state.app.doctor.servicesHospitalsTabs.loading,
  error: state.app.doctor.servicesHospitalsTabs.errorMessage,
});

export default connect(mapStateToProps, {
  createPractitionerRole,
  fetchServicesOfPractitioner,
})(withTranslation(['main', 'common', 'validation'])(CreateComponent));
