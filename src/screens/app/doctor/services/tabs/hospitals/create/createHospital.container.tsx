import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { createOrganisation } from '@screens/app/doctor/services/reducer';
import CreateHospitalComponent from '@screens/app/doctor/services/tabs/hospitals/create/CreateHospital.component';

const mapStateToProps = (state: any) => ({
  practitioner: state.app.doctor.crt.practitioner,

  items: state.app.doctor.servicesHospitalsTabs.practitionerHospitals,
  totalItems:
    state.app.doctor.servicesHospitalsTabs.practitionerHospitalsTotalItems,
  organisation: state.app.doctor.servicesHospitalsTabs.organisation,

  updateSuccess: state.app.doctor.servicesHospitalsTabs.updateSuccess,
  loading: state.app.doctor.servicesHospitalsTabs.loading,
  loadingCrud: state.app.doctor.servicesHospitalsTabs.loadingCrud,
  error: state.app.doctor.servicesHospitalsTabs.errorMessage,
});

export default connect(mapStateToProps, {
  createOrganisation,
})(withTranslation(['main', 'common', 'validation'])(CreateHospitalComponent));
