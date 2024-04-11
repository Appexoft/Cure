import { connect } from 'react-redux';
import SignIn from '@screens/auth/SignIn/signIn';
import { withTranslation } from 'react-i18next';

const mapStateToProps = (state) => ({});

export default connect(
  mapStateToProps,
  {},
)(withTranslation(['auth', 'common', 'validation'])(SignIn));
