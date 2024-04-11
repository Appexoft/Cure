import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import UserProfile from '@screens/app/patient/account/UserProfile/userProfile.component';

const mapStateToProps = (state) => ({});

export default connect(
  mapStateToProps,
  {},
)(withTranslation(['auth', 'common', 'validation', 'account'])(UserProfile));
