import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  ColorValue,
  Easing,
  RegisteredStyle,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { scaleHeight, scaleWidth } from '../utils/size';
import { Color } from '../utils/GlobalStyles';

interface Props {
  onComplete?: () => void;
  initialValue?: number;
  maxValue?: number;
  barAnimationDuration?: number;
  displayValue?: number;
  backgroundAnimationDuration?: number;
  width?: number;
  height?: number;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  isDotPrecent: boolean;
  numberSlider?: boolean;
  thumbStyle?: ViewStyle | RegisteredStyle<any>;
  box?: boolean;
  opacity?: number;
  underlyingColor?: ColorValue;
  style?: ViewStyle | RegisteredStyle<any>;
  backgroundColorOnComplete?: string;
}

export const Slider: React.FC<Props> = ({
  initialValue = 0,
  displayValue = 0,
  maxValue = 100,
  height = scaleHeight(2),
  width = scaleWidth(330),
  barAnimationDuration = 500,
  backgroundAnimationDuration = 2500,
  borderRadius = scaleWidth(10),
  borderWidth = scaleWidth(1),
  numberSlider = true,
  backgroundColor = Color.line,
  borderColor = Color.third,
  isDotPrecent,
  thumbStyle,
  style,
  underlyingColor,
  opacity,
  box,
  backgroundColorOnComplete,
  onComplete,
}) => {
  const [value, setValue] = useState(initialValue | 0);
  const [progress, setProgress] = useState(0);

  const widthAnimation = useRef(new Animated.Value(0)).current;
  const widthAnimationView = useRef(new Animated.Value(0)).current;
  const widthAnimationDot = useRef(new Animated.Value(0)).current;
  const backgroundAnimation = useRef(new Animated.Value(0)).current;
  const [backgroundInterpolationValue, setBackgroundInterpolationValue] =
    useState<Animated.AnimatedInterpolation>();

  useEffect(() => {
    if (progress > 0) {
      animateWidth();
    }
  }, [progress]);

  useEffect(() => {
    if (value !== progress) {
      if (value >= 0 && value <= maxValue) {
        setProgress(value);
        if (progress === maxValue) {
          const callback = onComplete;
          if (callback) {
            setTimeout(callback, barAnimationDuration);
          }
        }
      }
    }
  }, [progress]);

  useEffect(() => {
    animateWidth();
    if (backgroundColorOnComplete) {
      if (value === maxValue) {
        animateBackground();
      }
    }
  }, [value]);

  const animateWidth = () => {
    const toValue =
      scaleWidth(width * progress) / 100 - scaleWidth(borderWidth * 2);

    const toValueView = scaleWidth(width * progress) / 100 - scaleWidth(21);

    const toValueDot =
      scaleWidth(width * progress) / 100 - scaleWidth(isDotPrecent ? 13 : 7);

    Animated.timing(widthAnimation, {
      easing: Easing.linear,
      toValue: toValue > 0 ? toValue : 0,
      duration: barAnimationDuration,
      useNativeDriver: false,
    }).start();

    Animated.timing(widthAnimationView, {
      easing: Easing.linear,
      toValue: toValueView > 0 ? toValueView : 0,
      duration: barAnimationDuration,
      useNativeDriver: false,
    }).start();

    Animated.timing(widthAnimationDot, {
      easing: Easing.linear,
      toValue: toValueDot > 0 ? toValueDot : 0,
      duration: barAnimationDuration,
      useNativeDriver: false,
    }).start();
  };

  const animateBackground = () => {
    Animated.timing(backgroundAnimation, {
      toValue: 1,
      duration: backgroundAnimationDuration,
      useNativeDriver: false,
    }).start();
  };
  useEffect(() => {
    if (backgroundColorOnComplete) {
      setBackgroundInterpolationValue(
        backgroundAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [backgroundColor, backgroundColorOnComplete],
        }),
      );
    }
  });

  return (
    <View style={[{ marginTop: scaleHeight(2) }, style]}>
      {numberSlider && (
        <Animated.View
          style={{
            marginLeft: widthAnimationView,
            marginBottom: scaleHeight(7),
            justifyContent: 'center',
            alignItems: 'center',
            width: scaleWidth(42),
          }}>
          <Text
            style={{
              position: 'absolute',
              fontSize: scaleWidth(12),
              paddingBottom: scaleHeight(8),
              lineHeight: scaleWidth(21),
              fontWeight: 'bold',
            }}>
            {progress < maxValue ? progress : displayValue}%
          </Text>
        </Animated.View>
      )}
      <View
        style={{
          width: scaleWidth(width),
          height: scaleHeight(height),
          borderWidth: scaleWidth(borderWidth),
          borderColor: borderColor,
          borderRadius: scaleWidth(borderRadius),
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: scaleWidth(width),
            height: scaleHeight(height),
            borderWidth: scaleWidth(borderWidth),
            borderColor: borderColor,
            borderRadius: scaleWidth(borderRadius),
            justifyContent: 'center',
            backgroundColor: underlyingColor,
            opacity: opacity,
          }}
        />
        <Animated.View
          style={{
            height:
              scaleHeight(height) - scaleWidth(borderWidth) * scaleWidth(2),
            width: widthAnimation,
            backgroundColor: backgroundInterpolationValue || backgroundColor,
            borderBottomLeftRadius: borderRadius,
            borderTopLeftRadius: borderRadius,
            borderBottomRightRadius: borderRadius,
            borderTopRightRadius: borderRadius,
            position: 'absolute',
          }}
        />
        {box && (
          <Animated.View
            style={{
              marginLeft: widthAnimationDot,
              alignItems: 'center',
              position: 'absolute',
            }}>
            <View
              style={
                thumbStyle
                  ? thumbStyle
                  : {
                      height: isDotPrecent ? scaleWidth(26) : scaleWidth(14),
                      width: isDotPrecent ? scaleWidth(26) : scaleWidth(14),
                      borderRadius: isDotPrecent
                        ? scaleWidth(13)
                        : scaleWidth(0),
                      backgroundColor: backgroundColor,
                      borderColor: Color.main,
                      borderWidth: scaleWidth(1),
                      borderStyle: 'solid',
                      // borderColor: Color.main,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }
              }>
              {isDotPrecent && (
                <Text
                  style={{
                    fontSize:
                      initialValue === 100 ? scaleWidth(9) : scaleWidth(10),
                    lineHeight: scaleWidth(18),
                    textAlign: 'center',
                    color: Color.main,
                    fontWeight: 'bold',
                  }}>
                  {`${progress < maxValue ? progress : displayValue}%`}
                </Text>
              )}
            </View>
          </Animated.View>
        )}
      </View>
    </View>
  );
};
