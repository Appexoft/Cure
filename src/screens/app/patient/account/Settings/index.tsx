import React, { memo, useEffect, useState } from 'react';
import { Text, View, Platform, UIManager } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import {
  BorderRadius,
  Color,
  FontSize,
  Margin,
  Padding,
} from '../../../../../utils/GlobalStyles';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import FONTS from '../../../../../utils/fonts';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import { Dropdown } from 'react-native-element-dropdown';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import useAuth from '@screens/auth/authContext/useAuth';
import ROUTES from '../../../../../utils/routes';

const Settings = memo(({ navigation }) => {
  const { t } = useTranslation();
  const { handleChangeAppLanguage, userEntity } = useAuth();

  const data = [
    { label: t('languages:romanian'), value: 'RO_RO' },
    { label: t('languages:english'), value: 'EN_US' },
    { label: t('languages:german'), value: 'DE_DE' },
  ];

  const [language, setLanguage] = useState<undefined | string>();
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    const currentLang = data.find((lang) => lang.value === userEntity.locale);
    setLanguage(currentLang?.label);
    i18n.changeLanguage(currentLang?.value);
  }, [userEntity]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);

  const handleSaveChanges = (language: string | undefined) => {
    handleChangeAppLanguage(language);
    navigation.navigate(ROUTES.Patient_Account_Stack);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingTextStyle}>{t('common:language')}</Text>
      <Dropdown
        style={[
          styles.dropdown,
          isFocus && { borderColor: Color.settingsInputBorder },
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        containerStyle={{
          borderRadius: 16,
          backgroundColor: Color.border,
          marginTop: 8,
          overflow: 'hidden',
        }}
        itemContainerStyle={{ backgroundColor: Color.white }}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? language : '...'}
        searchPlaceholder={t('common:search')}
        value={language}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setLanguage(item.value);
          setIsFocus(false);
        }}
      />
      <View style={styles.btnViewStyle}>
        <ButtonPrimary
          titleStyle={styles.btnSave}
          title={t('common:save')}
          onPress={() => handleSaveChanges(language)}
        />
      </View>
    </View>
  );
});
export default Settings;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
    paddingTop: scaleHeight(20),
    paddingHorizontal: scaleWidth(15),
  },
  dropdown: {
    height: scaleHeight(50),
    borderColor: Color.dimgray,
    borderWidth: 0.5,
    borderRadius: BorderRadius.medium,
    paddingHorizontal: Padding.p_xs,
    marginTop: Margin.m_xs,
  },
  placeholderStyle: {
    fontSize: FontSize.fontH4,
  },
  selectedTextStyle: {
    fontSize: FontSize.fontH4,
  },
  iconStyle: {
    width: scaleWidth(20),
    height: scaleWidth(20),
  },
  inputSearchStyle: {
    fontSize: FontSize.fontH4,
    borderRadius: BorderRadius.large,
    paddingLeft: scaleWidth(10),
    backgroundColor: Color.white,
  },
  headingTextStyle: {
    fontFamily: FONTS.URBANIST.Bold,
    fontSize: FontSize.fontH3,
    paddingHorizontal: scaleWidth(5),
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
