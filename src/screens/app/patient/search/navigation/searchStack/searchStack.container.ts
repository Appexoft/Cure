import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { SearchStack } from '@screens/app/patient/search/navigation/searchStack/SearchStack';
const mapStateToProps = (state: any) => ({
  filterObj: state.app.patient.search.filterObj,
});

export default connect(
  mapStateToProps,
  {},
)(withTranslation(['main', 'common', 'validation'])(SearchStack));
