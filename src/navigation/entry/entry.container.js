import { connect } from 'react-redux';
import Entry from '@navigation/entry/entry';
import { withTranslation } from 'react-i18next';
import {
  setPatient,
  setUserEntity,
  setPermissions,
} from '@screens/auth/authContext/crtSlice';

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  setPatient,
  setUserEntity,
  setPermissions,
})(withTranslation(['main', 'common', 'validation'])(Entry));
