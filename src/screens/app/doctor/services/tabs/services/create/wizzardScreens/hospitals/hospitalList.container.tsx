import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { fetchAllHospitals } from '@screens/app/doctor/services/reducer';
import HospitalListComponent from "@screens/app/doctor/services/tabs/services/create/wizzardScreens/hospitals/hospitalList.component";

const mapStateToProps = (state: any) => ({
  practitioner: state.app.doctor.crt.practitioner,

  allHospitals: state.app.doctor.servicesHospitalsTabs.allHospitals,
  allHospitalsTotalItems: state.app.doctor.servicesHospitalsTabs.allHospitalsTotalItems,

  updateSuccess: state.app.doctor.servicesHospitalsTabs.updateSuccess,
  loading: state.app.doctor.servicesHospitalsTabs.loading,
  error: state.app.doctor.servicesHospitalsTabs.errorMessage,
});

export default connect(mapStateToProps, {
  fetchAllHospitals,
})(withTranslation(['main', 'common', 'validation'])(HospitalListComponent));

// --------------- STYLES
