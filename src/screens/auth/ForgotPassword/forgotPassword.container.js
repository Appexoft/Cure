import { connect } from 'react-redux';
import ForgotPassword from '@screens/auth/ForgotPassword/forgotPassword.tsx';
import { withTranslation } from 'react-i18next';

const mapStateToProps = (state) => ({});

export default connect(
  mapStateToProps,
  {},
)(withTranslation(['auth', 'common', 'validation'])(ForgotPassword));
