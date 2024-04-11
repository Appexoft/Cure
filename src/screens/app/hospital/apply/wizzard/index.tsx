import React, { memo, useCallback, useState } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { Color } from '../../../../../utils/GlobalStyles';
import FONTS from '../../../../../utils/fonts/index';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import { useNavigation } from '@react-navigation/native';
import ROUTES from '../../../../../utils/routes';
import SvgTriangleRight from '@assets/svgs/WalkThought/SvgTriangleRight';
import SvgTriangleLeft from '@assets/svgs/WalkThought/SvgTriangleLeft';
import AppIntroSlider from 'react-native-app-intro-slider';

import ApplyAsOrg_Details from '@screens/app/hospital/apply/2_OrgDetails';
import ApplyAsOrg_Address from '@screens/app/hospital/apply/3_Address';
import ApplyAsOrg_Services from '@screens/app/hospital/apply/4_Services';
import ApplyAsOrg_InviteOthers from '@screens/app/hospital/apply/5_InviteOthers';
import { useTranslation } from 'react-i18next';
import { StackNavigationProp } from '@react-navigation/stack';
import { OrganisationParamList } from '../../organisation.types';

const WIZZARD_SCREENS = [
  {
    id: '0',
    comp: <ApplyAsOrg_Details />,
  },
  {
    id: '1',
    comp: <ApplyAsOrg_Address />,
  },
  {
    id: '2',
    comp: <ApplyAsOrg_Services />,
  },
  {
    id: '3',
    comp: <ApplyAsOrg_InviteOthers />,
  },
];

const WalkThrough = memo(({}) => {
  const [id, setID] = useState(0);
  const { navigate } =
    useNavigation<StackNavigationProp<OrganisationParamList>>();
  const { t, i18n } = useTranslation();

  const onDone = useCallback(() => {
    navigate(ROUTES.ApplyAsOrg_Details);
  }, [navigate]);

  const renderPrevButton = useCallback(() => {
    return (
      <View style={styles.prevButton}>
        <SvgTriangleLeft />
      </View>
    );
  }, []);

  const renderNextButton = useCallback(() => {
    return (
      <View style={styles.nextButton}>
        <SvgTriangleRight />
      </View>
    );
  }, []);

  const renderDoneButton = useCallback(() => {
    return (
      <View style={styles.doneButton}>
        <Text style={styles.txtGetStarted}>{t('common:getStarted')}</Text>
      </View>
    );
  }, []);

  const renderItem = useCallback(({ item }) => {
    const { comp } = item;
    return comp;
  }, []);

  return (
    <View style={styles.container}>
      <AppIntroSlider
        key={id}
        data={WIZZARD_SCREENS}
        renderItem={renderItem}
        showPrevButton={true}
        showNextButton={true}
        showDoneButton={true}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        onDone={onDone}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
});

export default WalkThrough;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backGround,
  },
  content: {
    flex: 1,
    backgroundColor: Color.backGround,
  },
  txtSkip: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '600',
    fontSize: 12,
    color: Color.third,
    textTransform: 'uppercase',
  },
  svgHealing: {
    left: scaleWidth(24),
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(24)
        : scaleHeight(24),
  },
  skipView: {
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'center',
    right: scaleWidth(24),
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(12)
        : scaleHeight(12),
    width: scaleWidth(48),
    height: scaleHeight(48),
  },
  dotStyle: {
    width: scaleWidth(8),
    height: scaleWidth(4),
    backgroundColor: Color.platinum,
    marginBottom: getBottomSpace(),
  },
  activeDotStyle: {
    backgroundColor: Color.third,
    width: scaleWidth(20),
    height: scaleHeight(4),
    marginBottom: getBottomSpace(),
  },
  prevButton: {
    backgroundColor: Color.third,
    width: scaleWidth(48),
    height: scaleWidth(48),
    borderRadius: scaleWidth(16),
    justifyContent: 'center',
    alignItems: 'center',
    left: 18,
    bottom: getBottomSpace(),
  },
  nextButton: {
    backgroundColor: Color.third,
    width: scaleWidth(48),
    height: scaleWidth(48),
    borderRadius: scaleWidth(16),
    justifyContent: 'center',
    alignItems: 'center',
    right: 18,
    bottom: getBottomSpace(),
  },
  doneButton: {
    backgroundColor: Color.third,
    width: scaleWidth(160),
    height: scaleWidth(48),
    borderRadius: scaleWidth(24),
    justifyContent: 'center',
    alignItems: 'center',
    right: 18,
    bottom: getBottomSpace(),
  },
  txtGetStarted: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '600',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(26),
    textTransform: 'uppercase',
    textAlign: 'center',
    color: Color.main,
  },
});
