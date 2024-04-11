import React, { memo, useState } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import { Color } from '../../../../../utils/GlobalStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import AddressPicker from '@screens/app/common/address/AddressPicker';

const PROFESSIONS = [
  { id: '0', code: '100', title: 'Clinical oncology' },
  { id: '1', code: '100', title: 'Urology' },
  { id: '2', code: '100', title: 'Dentistry' },
  { id: '3', code: '100', title: 'Dietetics and nutrition' },
  { id: '4', code: '100', title: 'Emergency medicine' },
  { id: '5', code: '100', title: 'General practice' },
  { id: '6', code: '100', title: 'Gynecological oncology' },
  { id: '7', code: '100', title: 'Medical specialty' },
  { id: '8', code: '100', title: 'Nursing' },
  { id: '9', code: '100', title: 'Obstetrics and gynecology' },
  { id: '10', code: '100', title: 'Occupational medicine' },
  { id: '11', code: '100', title: 'Osteopathic medicine' },
  { id: '12', code: '100', title: 'Otolaryngology' },
  { id: '13', code: '100', title: 'Pain management' },
  { id: '14', code: '100', title: 'Pathology' },
  { id: '15', code: '100', title: 'Psychiatry' },
  { id: '16', code: '100', title: 'Psychology' },
  { id: '17', code: '100', title: 'Psychosomatic' },
  { id: '18', code: '100', title: 'Radiological' },
  { id: '19', code: '100', title: 'Surgical' },
];

const Address = memo(({ t }) => {

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      bounces={false}
      style={styles.container}>
      <View>
        <Text>{t('header:applyAsOrg:addressComp:title')}</Text>
      </View>

      <AddressPicker />
    </KeyboardAwareScrollView>
  );
});

const mapStateToProps = (state) => ({});

export default connect(
  mapStateToProps,
  {},
)(withTranslation(['auth', 'common', 'validation'])(Address));

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.main,
    paddingTop: scaleHeight(32),
  },
  accordionGroup: {
    paddingLeft: scaleWidth(10),
    paddingRight: scaleWidth(10),
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
