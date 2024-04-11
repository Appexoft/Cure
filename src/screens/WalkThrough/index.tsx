import React, { memo, useCallback, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Color } from '../../utils/GlobalStyles';
import FONTS from '../../utils/fonts/index';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { scaleHeight, scaleWidth } from '../../utils/size';
import { useNavigation } from '@react-navigation/native';
import ROUTES from '../../utils/routes';
import WalkThroughScreen from '@screens/WalkThrough/components/WalkThroughScreen';
import SvgTriangleRight from '@assets/svgs/WalkThought/SvgTriangleRight';
import SvgTriangleLeft from '@assets/svgs/WalkThought/SvgTriangleLeft';
import { heightScreen } from '../../utils/dimensions';
import AppIntroSlider from 'react-native-app-intro-slider';
import SvgHealing from '@assets/svgs/SvgHealing';
import SvgDoctor1 from '@assets/svgs/WalkThrough/SvgDoctor1';
import SvgDoctor2 from '@assets/svgs/WalkThrough/SvgDoctor2';
import SvgDoctor3 from '@assets/svgs/WalkThrough/SvgDoctor3';
import { RenderItem } from './WalkThrough.types';

const DATA = [
  {
    id: '0',
    Svg: <SvgDoctor1 />,
    description1: 'Cutting Prescription\nDoctors Costs',
    description: '5 Tips To Finding Effective Anti\nSnore Devices',
  },
  {
    id: '1',
    Svg: <SvgDoctor2 />,
    description1: 'Diabetes Cause And\nPrevention',
    description: 'Tips For Preventing And\nControlling High Blood Pressure',
  },
  {
    id: '2',
    Svg: <SvgDoctor3 />,
    description1: 'Genital Warts How To\nAvoid Them',
    description:
      'Skin Cancer Prevention 5 Ways\nTo Protect Yourself From Uv\nRays',
  },
];

const WalkThrough = memo(() => {
  const [id, setID] = useState(0);
  const { navigate } = useNavigation();

  const onSignIn = useCallback(() => {
    navigate(ROUTES.SignIn);
  }, [navigate]);

  const onDone = useCallback(() => {
    navigate(ROUTES.SignIn);
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
        <Text style={styles.txtGetStarted}>Get Started</Text>
      </View>
    );
  }, []);

  const renderItem = useCallback(({ item }: RenderItem) => {
    const { Svg, description, description1 } = item;
    return (
      <WalkThroughScreen
        Svg={Svg}
        description={description}
        description1={description1}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.txtSkip}>Skip!</Text>
      <SvgHealing style={styles.svgHealing} />
      <AppIntroSlider
        key={id}
        data={DATA}
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
      />
      <TouchableOpacity onPress={onSignIn} style={styles.skipView}>
        <Text style={styles.txtSkip}>Skip!</Text>
      </TouchableOpacity>
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
    fontFamily: FONTS.URBANIST.Regular,
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
    marginBottom: heightScreen * 0.75,
  },
  activeDotStyle: {
    backgroundColor: Color.third,
    width: scaleWidth(20),
    height: scaleHeight(4),
    marginBottom: heightScreen * 0.75,
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
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '600',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(26),
    textTransform: 'uppercase',
    textAlign: 'center',
    color: Color.main,
  },
});
