import React, { memo, useState } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import { Color } from '../../../../../utils/GlobalStyles';
import TextInputCustom from '@components/input/TextInputCustom';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SvgUser from '@assets/svgs/SignIn/SvgUser';
import {
  validateUrl,
  validateValue,
} from '../../../../../utils/validations/FormValidations';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import useAuth from '@screens/auth/authContext/useAuth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View } from 'react-native';
import { fontH2 } from '../../../../../utils/themeUtils/index';
import FONTS from '../../../../../utils/fonts';
import OrgTypeDropdown from '@screens/app/common/dropdowns/OrgTypeDropdown';
import CountryDropdown from '@screens/app/common/dropdowns/CountryDropdown';
import { StackNavigationProp } from '@react-navigation/stack';
import { OrganisationParamList } from '../../organisation.types';
import {commonStyles} from "../../../../../utils/styles/commonStyles";

const OrgDetails = memo(({ t }) => {
  const { navigate } =
    useNavigation<StackNavigationProp<OrganisationParamList>>();
  const { isLoggedIn, userEntity, isLoading, setIsLoading } = useAuth();

  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [yearsExperience, setYearsExperience] = useState(0);

  const [orgCompanyType, setOrgCompanyType] = useState('');
  const [orgIdentifier, setOrgIdentifier] = useState('');
  const [orgRegCountry, setOrgRegCountry] = useState('');

  return (
    <KeyboardAwareScrollView bounces={false} style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {t('header:applyAsOrg:orgDetailsComp:title')}
        </Text>
      </View>

      <TextInputCustom
        style={styles.txtInput1}
        svg={<Icon name="domain" size={16} />}
        placeholder={t('common:name')}
        validate={(text) => {
          return !!validateValue(text, 1);
        }}
        value={name}
        onChangedText={(data) => setName(data)}
        validationMsg={t('validation:nameInvalid')}
      />
      <TextInputCustom
        style={styles.txtInput1}
        svg={<Icon name="web" size={16} />}
        placeholder={t('common:website')}
        validate={(text) => {
          return !!validateUrl(text);
        }}
        value={website}
        onChangedText={(data) => setWebsite(data)}
        validationMsg={t('validation:urlInvalid')}
      />

      <View style={styles.subtitleContainer}>
        <Text style={commonStyles.subTitle}>
          {t('header:applyAsOrg:orgDetailsComp:registration')}
        </Text>
      </View>

      <OrgTypeDropdown
        value={orgCompanyType}
        setValue={setOrgCompanyType}
      />

      <CountryDropdown
        value={orgRegCountry}
        setValue={setOrgRegCountry}
        placeholderKey={
          'header:applyAsOrg:orgDetailsComp:selectRegistrationCountry'
        }
      />

      <TextInputCustom
        style={styles.txtInput1}
        svg={<SvgUser />}
        placeholder={t('header:applyAsOrg:orgDetailsComp:identifier')}
        validate={(text) => {
          return !!validateValue(text, 1);
        }}
        value={orgIdentifier}
        onChangedText={(data) => setOrgIdentifier(data)}
        validationMsg={t('validation:urlInvalid')}
      />
    </KeyboardAwareScrollView>
  );
});

const mapStateToProps = (state) => ({});

export default connect(
  mapStateToProps,
  {},
)(withTranslation(['auth', 'common', 'validation'])(OrgDetails));

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.main,
    paddingTop: scaleHeight(32),
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  buttonPrimacy: {
    width: scaleWidth(295),
    alignSelf: 'center',
    marginTop: scaleHeight(32),
  },
  input: {
    marginTop: scaleHeight(40),
  },
  txtInput1: {
    marginTop: scaleHeight(20),
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scaleHeight(20),
  },
  subtitleContainer: {
    marginTop: scaleHeight(20),
  },
  title: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: fontH2,
  },
});
