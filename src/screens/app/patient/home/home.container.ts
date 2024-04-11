import { connect } from 'react-redux';
import HomePage from '@screens/app/patient/home/home';
import { withTranslation } from 'react-i18next';
import { searchData } from '@screens/app/patient/search/reducer';
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  fetchInitialSearchResults: searchData,
})(withTranslation(['main', 'common', 'validation'])(HomePage));
