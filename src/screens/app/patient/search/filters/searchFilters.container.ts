import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import {
  getCategories,
  getSubCategories,
  getCities,
  setFilters,
} from '@screens/app/patient/search/reducer';
import SearchFiltersComponent from '@screens/app/patient/search/filters/searchFilters.component';
const mapStateToProps = (state: any) => ({
  categories: state.app.patient.search.categories,
  categoriesTotalItems: state.app.patient.search.categoriesTotalItems,

  subCategories: state.app.patient.search.subCategories,
  subCategoriesTotalItems: state.app.patient.search.subCategoriesTotalItems,

  cities: state.app.patient.search.cities,
  citiesTotalItems: state.app.patient.search.citiesTotalItems,

  loading: state.app.patient.search.loading,
  error: state.app.patient.search.errorMessage,

  filterObj: state.app.patient.search.filterObj,
});

export default connect(mapStateToProps, {
  setFilters,
  getCategories,
  getSubCategories,
  getCities,
})(withTranslation(['main', 'common', 'validation'])(SearchFiltersComponent));
