import { connect } from 'react-redux';
import SignUp from '@screens/auth/SignUp/signUp';
import { withTranslation } from 'react-i18next';

const mapStateToProps = (state) => ({});

export default connect(
  mapStateToProps,
  {},
)(withTranslation(['auth', 'common', 'validation'])(SignUp));
