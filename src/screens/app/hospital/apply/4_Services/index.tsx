import React, { memo, useCallback, useState } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import { Color } from '../../../../../utils/GlobalStyles';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import TextInputCustom from '@components/input/TextInputCustom';
import { useNavigation } from '@react-navigation/native';
import ROUTES from '../../../../../utils/routes';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SvgUser from '@assets/svgs/SignIn/SvgUser';
import { validateValue } from '../../../../../utils/validations/FormValidations';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import useAuth from '@screens/auth/authContext/useAuth';
import { StackNavigationProp } from '@react-navigation/stack';
import { OrganisationParamList } from '../../organisation.types';

const PersonalDetails = memo(({ t }) => {
  const { navigate } =
    useNavigation<StackNavigationProp<OrganisationParamList>>();
  const { isLoggedIn, userEntity, isLoading, setIsLoading } = useAuth();

  const [firstname, setFirstname] = useState(userEntity.firstName);
  const [lastname, setLastname] = useState(userEntity.lastName);
  const [yearsExperience, setYearsExperience] = useState(0);

  return (
    <KeyboardAwareScrollView bounces={false} style={styles.container}>
      <TextInputCustom
        svg={<SvgUser />}
        placeholder={t('firstname')}
        validate={(text) => {
          return !!validateValue(text, 1);
        }}
        value={firstname}
        onChangedText={(data) => setFirstname(data)}
        validationMsg={t('validation:firstNameInvalid')}
      />
      <TextInputCustom
        svg={<SvgUser />}
        placeholder={t('lastname')}
        validate={(text) => {
          return !!validateValue(text, 1);
        }}
        value={lastname}
        onChangedText={(data) => setLastname(data)}
        validationMsg={t('validation:lastNameInvalid')}
      />

      <ButtonPrimary style={styles.buttonPrimacy} title={'Next'} />
    </KeyboardAwareScrollView>
  );
});

const mapStateToProps = (state) => ({});

export default connect(
  mapStateToProps,
  {},
)(withTranslation(['auth', 'common', 'validation'])(PersonalDetails));

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.main,
    paddingTop: scaleHeight(32),
  },
  buttonPrimacy: {
    width: scaleWidth(295),
    alignSelf: 'center',
    marginTop: scaleHeight(32),
  },
  input: {
    marginTop: scaleHeight(40),
  },
});
