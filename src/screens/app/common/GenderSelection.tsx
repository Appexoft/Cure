import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-radio-buttons-group';
import { ScaledSheet } from 'react-native-size-matters';
import { Color, Margin, Sizes } from '../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../utils/size';
import { fontH5 } from '../../../utils/themeUtils';
import FONTS from '../../../utils/fonts';
import { Gender } from '../../../utils/domainEntities';
import { commonStyles } from '../../../utils/styles/commonStyles';

interface Props {
  value: Gender;
  setValue: (gender: Gender) => void;
  placeholderKey?: string;
}

const GenderSelection: React.FC<Props> = ({
  value,
  setValue,
  placeholderKey,
}) => {
  const { t } = useTranslation();
  function onPressRadioButton(e: Gender) {
    setValue(e);
  }

  return (
    <>
      <View style={styles.radioButtonsGroup}>
        <Text style={styles.radioButtonsText}>
          {t('account:personalInformation:gender')}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton
              id={Gender.MALE}
              onPress={onPressRadioButton}
              selected={value === Gender.MALE}
            />
            <Text>{t('account:personalInformation:genderOption:male')}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton
              id={Gender.FEMALE}
              onPress={onPressRadioButton}
              selected={value === Gender.FEMALE}
            />
            <Text>{t('account:personalInformation:genderOption:female')}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default GenderSelection;

const styles = ScaledSheet.create({
  container: {
    height: '100%',
    backgroundColor: Color.pageBackground,
    paddingTop: scaleHeight(10),
  },
  radioButtonsGroup: {
    width: Sizes.input_size,
    marginBottom: scaleHeight(5),
    marginTop: scaleHeight(Margin.between_entries),
  },
  radioButtonsText: {
    lineHeight: 15,
    fontWeight: '400',
    color: Color.inputLabel,
    fontSize: fontH5,
    textAlign: 'left',
    fontFamily: FONTS.URBANIST.Medium,
  },
  radioButtons: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  btnViewStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
    marginBottom: scaleHeight(50),
    marginRight: scaleWidth(30),
    marginLeft: scaleWidth(30),
  },
  btnSave: {
    textTransform: 'capitalize',
  },
});
