import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { ServicesTabsComponent } from '@screens/app/doctor/services/servicesTabs.component';
import {
  fetchServicesOfPractitioner,
  fetchHospitalsOfPractitioner,
} from '@screens/app/doctor/services/reducer';

const mapStateToProps = (state: any) => ({
  practitioner: state.app.doctor.crt.practitioner,

  services: state.app.doctor.servicesHospitalsTabs.services,
  servicesTotalItems: state.app.doctor.servicesHospitalsTabs.servicesTotalItems,

  practitionerHospitals:
    state.app.doctor.servicesHospitalsTabs.practitionerHospitals,
  practitionerHospitalsTotalItems:
    state.app.doctor.servicesHospitalsTabs.practitionerHospitalsTotalItems,

  items: state.app.doctor.servicesHospitalsTabs.items,
  totalItems: state.app.doctor.servicesHospitalsTabs.totalItems,

  updateSuccess: state.app.doctor.servicesHospitalsTabs.updateSuccess,
  loading: state.app.doctor.servicesHospitalsTabs.loading,
  error: state.app.doctor.servicesHospitalsTabs.errorMessage,
});

export default connect(mapStateToProps, {
  fetchServicesOfPractitioner,
  fetchHospitalsOfPractitioner,
})(withTranslation(['main', 'common', 'validation'])(ServicesTabsComponent));
