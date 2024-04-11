import { connect } from 'react-redux';
import VerifyEmail from '@screens/auth/VerifyEmail/verifyEmail.tsx';
import { withTranslation } from 'react-i18next';

const mapStateToProps = (state) => ({});

export default connect(
  mapStateToProps,
  {},
)(withTranslation(['auth', 'common', 'validation'])(VerifyEmail));
