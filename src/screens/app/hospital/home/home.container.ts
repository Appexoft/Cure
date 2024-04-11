import { connect } from 'react-redux';
import HomePage from '@screens/app/hospital/home/home';
import { withTranslation } from 'react-i18next';
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
})(withTranslation(['main', 'common', 'validation'])(HomePage));
