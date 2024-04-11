import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  memo,
  useMemo,
} from 'react';
import {
  Animated,
  Easing,
  LayoutAnimation,
  Platform,
  Text,
  TouchableOpacity,
  UIManager,
  View,
  LogBox,
  ViewStyle,
} from 'react-native';
import SvgPen from '@assets/svgs/StaticHealth/SvgPen';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../utils/size';
import { Color } from '../utils/GlobalStyles';
import FONTS from '../utils/fonts';
import SvgCircle from '@assets/svgs/StaticHealth/SvgCircle';
import ConditionIndexItem from '@components/ConditionIndexItem';

const Y = ['100', '50', '10', '0'];
const Y1 = ['250', '150', '100', '50', '10', '0'];
const X = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const VALUE = [16, 32, 48, 24, 40, 80, 64];
const VALUE1 = [26, 52, 78, 39, 65, 130, 104];

interface Props {
  onSeeGoals: () => void;
  onSeeDetails: () => void;
  onPress: () => void;
  onEditGoal: () => void;
  style: ViewStyle | { [key: string]: Animated.Value };
  percentage: number;
  glycemicIndex: string;
  Svg: JSX.Element;
}

const StaticsHealthChart = memo((props: Props) => {
  const {
    onSeeGoals,
    style,
    percentage,
    glycemicIndex,
    onPress,
    onEditGoal,
    Svg,
  } = props;
  const [viewState, setViewState] = useState(true);
  const [startAnim, setStartAnim] = useState(false);
  const [axisY, setAxisY] = useState(Y);
  const [axisX, setAxisX] = useState(X);
  const [value, setValue] = useState(VALUE);

  const heightAnim = useRef(new Animated.Value(scaleHeight(240))).current;
  const circleOpacity = useRef(new Animated.Value(0)).current;
  const editOpacity = useRef(new Animated.Value(1)).current;

  const heightStyle = {
    height: heightAnim,
  };
  const opacityStyle = {
    opacity: circleOpacity,
  };
  const editOpacityStyle = {
    opacity: editOpacity,
  };

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const onChart = () => {
    viewState
      ? LayoutAnimation.configureNext(LayoutAnimation.Presets.spring?.delete)
      : LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setViewState(!viewState);
    toggleAnimation();
    startAnimationOpacity();
  };

  const onSeeDetails = () => {
    toggleAnimation();
  };

  const toggleAnimation = useCallback(() => {
    setStartAnim(true);
    if (viewState === true) {
      Animated.timing(heightAnim, {
        toValue: scaleHeight(359),
        duration: 1500,
        useNativeDriver: true,
      }).start(() => {
        setViewState(false);
        setAxisY(Y1);
        setValue(VALUE1);
      });
    } else {
      Animated.timing(heightAnim, {
        toValue: scaleHeight(240),
        duration: 1500,
        useNativeDriver: true,
      }).start(() => {
        setViewState(true);
        setAxisY(Y);
        setValue(VALUE);
        setStartAnim(false);
      });
    }
  }, [heightAnim, viewState]);

  const startAnimationOpacity = useCallback(() => {
    if (viewState === true) {
      Animated.timing(circleOpacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start();
      Animated.timing(editOpacity, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(circleOpacity, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
      Animated.timing(editOpacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    }
  }, [circleOpacity, viewState, editOpacity]);

  const renderChartItem = useMemo(() => {
    return value.map((item, index) => {
      const heightAnimation = new Animated.Value(0);
      Animated.timing(heightAnimation, {
        easing: Easing.linear,
        toValue: item,
        duration: 200,
        useNativeDriver: false,
      }).start();
      return (
        <Animated.View
          key={index}
          style={[styles.chartItem, { height: heightAnimation }]}
        />
      );
    });
  }, [value]);

  const bottomX = viewState
    ? { bottom: scaleHeight(42) }
    : { bottom: scaleHeight(13) };
  const bottomY = viewState
    ? { bottom: scaleHeight(50) }
    : { bottom: scaleHeight(24) };
  const bottomChart = viewState
    ? { bottom: scaleHeight(64) }
    : { bottom: scaleHeight(42) };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          onChart();
          onPress();
        }}>
        <Animated.View style={[styles.chartView, style, heightStyle]}>
          <View style={styles.svgLeft}>{Svg}</View>
          <Animated.View style={[styles.svgRight, editOpacityStyle]}>
            <SvgPen />
          </Animated.View>
          <View style={[styles.axisYView, bottomY]}>
            {axisY.map((item, index) => {
              return (
                <Text style={styles.txtAxisY} key={index}>
                  {item}
                </Text>
              );
            })}
          </View>
          <View style={[styles.chartItemView, bottomChart]}>
            {renderChartItem}
          </View>
          <View style={[styles.axisXView, bottomX]}>
            {axisX.map((item, index) => {
              return (
                <Text key={index} style={styles.txtAxisX}>
                  {item}
                </Text>
              );
            })}
          </View>
          <Animated.View style={[styles.svgCircle, opacityStyle]}>
            <SvgCircle startAnim={startAnim} percentage={percentage} />
            <Text style={styles.txtGlycemicIndex}>
              {glycemicIndex}
              <Text style={styles.txtMgdl}>mg/dl</Text>
            </Text>
          </Animated.View>
          {viewState && (
            <View style={styles.btnView}>
              <TouchableOpacity
                onPress={() => {
                  onSeeDetails();
                }}
                activeOpacity={0.6}
                style={styles.btn1}>
                <Text style={styles.txtSeeDetails}>See Details</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onSeeGoals}
                activeOpacity={0.6}
                style={styles.btn2}>
                <Text style={styles.txtSetGoals}>Set Goals</Text>
              </TouchableOpacity>
            </View>
          )}
        </Animated.View>
      </TouchableOpacity>
      {!viewState && (
        <View style={styles.conditionIndexView}>
          <ConditionIndexItem
            title={'GOAL'}
            Svg={<SvgPen />}
            time={'12 May 2020'}
            parameter={'69'}
            unitOfMeasure={'mg/ml'}
            onPress={onEditGoal}
          />
          <ConditionIndexItem
            title={'PROGESS'}
            time={'16 Nov 2020'}
            parameter={'72'}
            unitOfMeasure={'mg/ml'}
          />
          <ConditionIndexItem
            title={'MIN'}
            time={'04 Jul 2020'}
            parameter={'25'}
            unitOfMeasure={'mg/ml'}
          />
          <ConditionIndexItem
            title={'MAX'}
            time={'16 Nov 2020'}
            parameter={'96'}
            unitOfMeasure={'mg/ml'}
          />
          <View style={styles.lineVertical} />
          <View style={styles.lineHorizontal} />
        </View>
      )}
    </View>
  );
});

export default StaticsHealthChart;

const styles = ScaledSheet.create({
  chartView: {
    marginHorizontal: scaleWidth(16),
    height: scaleHeight(240),
    backgroundColor: Color.main,
    borderRadius: scaleWidth(16),
    overflow: 'hidden',
    marginBottom: scaleHeight(16),
  },
  svgLeft: {
    width: scaleWidth(24),
    height: scaleWidth(24),
    borderRadius: scaleWidth(8),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: scaleHeight(16),
    left: scaleWidth(16),
    backgroundColor: Color.pageBackground,
  },
  svgRight: {
    width: scaleWidth(24),
    height: scaleWidth(24),
    borderRadius: scaleWidth(8),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: scaleHeight(16),
    right: scaleWidth(16),
    backgroundColor: Color.secondBlue,
  },
  txtAxisY: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '500',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    color: Color.silverChalice,
    marginBottom: scaleHeight(13),
    width: scaleWidth(24),
    height: scaleHeight(16),
  },
  axisYView: {
    marginLeft: scaleWidth(16),
    width: scaleHeight(24),
    position: 'absolute',
  },
  axisXView: {
    marginTop: scaleHeight(11),
    flexDirection: 'row',
    marginLeft: scaleWidth(39),
    position: 'absolute',
  },
  chartItemView: {
    flexDirection: 'row',
    marginLeft: scaleWidth(39),
    position: 'absolute',
    alignItems: 'flex-end',
  },
  txtAxisX: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '500',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    color: Color.silverChalice,
    marginRight: scaleWidth(20),
    width: scaleWidth(24),
    height: scaleHeight(16),
  },
  btnView: {
    width: '100%',
    height: scaleHeight(40),
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: Color.pageBackground,
    flexDirection: 'row',
  },
  btn1: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: Color.pageBackground,
  },
  btn2: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: Color.pageBackground,
  },
  txtSeeDetails: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(14),
    color: Color.silverChalice,
  },
  txtSetGoals: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(14),
    color: Color.third,
  },
  chartItem: {
    width: scaleWidth(4),
    backgroundColor: Color.secondBlue,
    marginRight: scaleWidth(30),
    marginLeft: scaleWidth(9),
    borderRadius: scaleWidth(4),
  },
  svgCircle: {
    alignSelf: 'center',
    marginTop: scaleHeight(24),
    width: scaleWidth(140),
    height: scaleWidth(140),
    alignItems: 'center',
  },
  txtGlycemicIndex: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(32),
    lineHeight: scaleHeight(51),
    textAlign: 'center',
    color: Color.third,
    position: 'absolute',
    top: scaleHeight(45),
  },
  txtMgdl: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(17),
    color: Color.silverChalice,
  },
  conditionIndexView: {
    backgroundColor: Color.main,
    borderRadius: scaleWidth(16),
    marginHorizontal: scaleWidth(16),
    marginTop: scaleHeight(8),
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: scaleHeight(21),
  },
  lineVertical: {
    width: 1,
    height: scaleHeight(176),
    backgroundColor: Color.pageBackground,
    alignSelf: 'center',
    position: 'absolute',
    right: scaleWidth(171),
    top: scaleHeight(24),
  },
  lineHorizontal: {
    width: scaleWidth(295),
    left: scaleWidth(24),
    height: 1,
    backgroundColor: Color.pageBackground,
    alignSelf: 'center',
    position: 'absolute',
  },
});
