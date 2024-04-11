import { connect } from 'react-redux';
import SearchPage from '@screens/app/patient/search/search.component';
import { withTranslation } from 'react-i18next';
import { searchData, setFilters, getCities } from '@screens/app/patient/search/reducer';
const mapStateToProps = (state: any) => ({
  doctors: state.app.patient.search.doctors,
  doctorsTotalItems: state.app.patient.search.doctorsTotalItems,

  services: state.app.patient.search.services,
  servicesTotalItems: state.app.patient.search.servicesTotalItems,

  hospitals: state.app.patient.search.hospitals,
  hospitalsTotalItems: state.app.patient.search.hospitalsTotalItems,

  loading: state.app.patient.search.loading,
  error: state.app.patient.search.errorMessage,

  filterObj: state.app.patient.search.filterObj,
});

export default connect(mapStateToProps, {
  onFetchData: searchData,
  setFilters,
  getCities,
})(withTranslation(['main', 'common', 'validation'])(SearchPage));
