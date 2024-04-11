import React, { memo, useEffect, useState } from 'react';
import { Text, Image, View, Platform, UIManager, SafeAreaView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color, FontSize } from '../../../../../utils/GlobalStyles';
import { useTranslation } from 'react-i18next';
import { AccordionList } from 'react-native-accordion-list-view';
import FONTS from '../../../../../utils/fonts';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import VersionNumber from 'react-native-version-number';

const About = memo(() => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoStyle}
        source={require('../../../../../../android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png')}
      />
      <Text style={styles.mainText}>{t('common:cure_care')}</Text>
      <Text style={styles.versionTextStyle}>ver. {VersionNumber.appVersion}</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </View>
  );
});
export default About;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
    alignItems: 'center',
    paddingTop: scaleHeight(20),
    paddingHorizontal: scaleWidth(15),
  },
  logoStyle: {
    width: scaleWidth(100),
    height: scaleHeight(100),
  },
  mainText: {
    fontSize: FontSize.fontH3,
    fontFamily: FONTS.URBANIST.Bold,
    marginTop: scaleHeight(15),
  },
  versionTextStyle: {
    marginTop: scaleHeight(8),
    fontSize: FontSize.fontH5,
    fontFamily: FONTS.URBANIST.Medium,
    color: Color.lightsteelblue_100,
  },
  description: {
    fontSize: FontSize.fontH5,
    fontFamily: FONTS.URBANIST.Medium,
    marginHorizontal: scaleWidth(12),
    marginTop: scaleHeight(15),
    lineHeight: scaleHeight(18),
    color: Color.dimgray_100
  }
});
