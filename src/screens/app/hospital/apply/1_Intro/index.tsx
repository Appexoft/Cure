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
import WalkThroughScreenItem from '@screens/WalkThrough/components/WalkThroughScreen';
import SvgTriangleRight from '@assets/svgs/WalkThought/SvgTriangleRight';
import SvgTriangleLeft from '@assets/svgs/WalkThought/SvgTriangleLeft';
import { heightScreen } from '../../../../../utils/dimensions';
import AppIntroSlider from 'react-native-app-intro-slider';
import SvgDoctor1 from '@assets/svgs/WalkThrough/SvgDoctor1';
import SvgDoctor2 from '@assets/svgs/WalkThrough/SvgDoctor2';
import SvgDoctor3 from '@assets/svgs/WalkThrough/SvgDoctor3';
import { OrganisationParamList } from '../../organisation.types';
import { StackNavigationProp } from '@react-navigation/stack';

const DATA = [
  {
    id: '0',
    Svg: <SvgDoctor1 />,
    description1: 'Enroll as \nOrganisation',
    description: 'Start providing services \n as a doctor',
  },
  {
    id: '1',
    Svg: <SvgDoctor2 />,
    description1: 'Chat and\nmessages',
    description: 'Get payed for offering your time\nfor your patients',
  },
  {
    id: '2',
    Svg: <SvgDoctor3 />,
    description1: 'Automatic and secure\npayments',
    description: 'You can get multiple \nrevenue income channels',
  },
];

const WalkThrough = memo(({}) => {
  const [id, setID] = useState(0);
  const { navigate } =
    useNavigation<StackNavigationProp<OrganisationParamList>>();

  const onDone = useCallback(() => {
    navigate(ROUTES.ApplyAsOrg_Address);
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

  const renderItem = useCallback(({ item }) => {
    const { Svg, description, description1 } = item;
    return (
      <WalkThroughScreenItem
        Svg={Svg}
        description={description}
        description1={description1}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
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
      {/*<TouchableOpacity onPress={onSignIn} style={styles.skipView}>*/}
      {/*  <Text style={styles.txtSkip}>Skip!</Text>*/}
      {/*</TouchableOpacity>*/}
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
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '600',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(26),
    textTransform: 'uppercase',
    textAlign: 'center',
    color: Color.main,
  },
});
