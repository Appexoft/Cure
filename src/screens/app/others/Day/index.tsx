import React, { memo, useCallback, useState, useRef, useEffect } from 'react';
import { Animated, Platform, ScrollView, LogBox } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../utils/GlobalStyles';
import StaticsHealthItem from '@screens/app/others/Day/Components/StaticsHealthItem';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import SvgNurse from '@assets/svgs/SvgNurse';
import StaticsHealthChart from '@components/StaticsHealthChart';
import ROUTES from '../../../../utils/routes';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import SvgBlood from '@assets/svgs/Blood/SvgBlood';
import SvgScale from '@assets/svgs/SvgScale';

const NOTIFICATIONDATA = {
  title: 'Good Healh 👍',
  description: 'Keep track it everyday!',
  Svg: <SvgNurse width={scaleWidth(90)} height={scaleHeight(90)} />,
  imgDoctor: require('@assets/AppointmentCalendar/02.png'),
};

const Day = memo(({ navigation }) => {
  const [notificationData, setNotitficationData] = useState(NOTIFICATIONDATA);
  const [viewState, setViewState] = useState(false);
  const [view, setView] = useState(false);
  const [showChart1, setShowChart1] = useState(true);
  const [showChart2, setShowChart2] = useState(true);
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim1 = useRef(new Animated.Value(1)).current;

  const opacityStyle = {
    opacity: opacityAnim,
  };

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  const startAnimationOpacity = useCallback(() => {
    if (viewState === true) {
      Animated.timing(opacityAnim, {
        toValue: 1,
        timing: 400,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [opacityAnim, viewState]);

  const startAnimationOpacity1 = useCallback(() => {
    if (view === true) {
      Animated.timing(opacityAnim1, {
        toValue: 1,
        timing: 400,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(opacityAnim1, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [opacityAnim1, view]);

  const onChart1 = useCallback(() => {
    startAnimationOpacity();
    setViewState(!viewState);
    viewState === false ? setShowChart2(false) : setShowChart2(true);
  }, [startAnimationOpacity, setShowChart2, viewState]);

  const onChart2 = useCallback(() => {
    startAnimationOpacity1();
    setView(!view);
    view === false ? setShowChart1(false) : setShowChart1(true);
  }, [startAnimationOpacity1, setShowChart1, view]);

  const onSeeGoals = useCallback(() => {
    navigation.navigate(ROUTES.GoalSettings);
  }, [navigation]);

  const onEditGoal = useCallback(() => {
    navigation.navigate(ROUTES.SetGoal);
  }, [navigation]);

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <StaticsHealthItem
        style={styles.staticsHealthItem}
        title={notificationData.title}
        description={notificationData.description}
        imgDoctor={notificationData.imgDoctor}
        Svg={notificationData.Svg}
      />
      {showChart1 && (
        <StaticsHealthChart
          Svg={<SvgBlood width={12} height={16} />}
          glycemicIndex={'89'}
          percentage={73}
          onSeeGoals={onSeeGoals}
          onSeeDetails={onChart1}
          onPress={onChart1}
          onEditGoal={onEditGoal}
          style={opacityStyle}
        />
      )}
      {showChart2 && (
        <StaticsHealthChart
          Svg={<SvgScale color={Color.secondRed} />}
          glycemicIndex={'89'}
          percentage={25}
          onSeeGoals={onSeeGoals}
          onSeeDetails={onChart2}
          onPress={onChart2}
          style={opacityStyle}
          onEditGoal={() => {}}
        />
      )}
    </ScrollView>
  );
});
export default Day;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
  },
  staticsHealthItem: {
    marginTop: scaleHeight(166),
  },
  staticsHealthChart: {
    marginBottom: scaleHeight(16),
  },
  contentContainerStyle: {
    paddingBottom:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(100)
        : scaleHeight(100),
  },
});
