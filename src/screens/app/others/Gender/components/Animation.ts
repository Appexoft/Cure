import { Animated, Dimensions } from 'react-native';
import { getInputRangeFromIndexes } from 'react-native-snap-carousel'; // 3.7.2
import { CarouselProps } from 'react-native-snap-carousel/lib/typescript/carousel/types';

const SLIDER_WIDTH = Dimensions.get('window').width;
const TRANSLATE_VALUE = Math.round((SLIDER_WIDTH * 0.3) / 4);

export function scrollInterpolator<TData>(
  index: number,
  carouselProps: CarouselProps<TData>,
) {
  const range = [1, 0, -1];
  const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
  const outputRange = range;

  return { inputRange, outputRange };
}
export function animatedStyles<TData>(
  index: number,
  animatedValue: Animated.Value,
  carouselProps: CarouselProps<TData>,
) {
  const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';
  let animatedOpacity = {};
  let animatedTransform = {};

  if (carouselProps.inactiveSlideOpacity < 1) {
    animatedOpacity = {
      opacity: animatedValue.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [
          carouselProps.inactiveSlideOpacity,
          1,
          carouselProps.inactiveSlideOpacity,
        ],
      }),
    };
  }

  if (carouselProps.inactiveSlideScale < 1) {
    animatedTransform = {
      transform: [
        {
          scale: animatedValue.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [
              carouselProps.inactiveSlideScale,
              1,
              carouselProps.inactiveSlideScale,
            ],
          }),
          [translateProp]: animatedValue.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [
              TRANSLATE_VALUE * carouselProps.inactiveSlideScale,
              0,
              -TRANSLATE_VALUE * carouselProps.inactiveSlideScale,
            ],
          }),
        },
      ],
    };
  }

  return {
    ...animatedOpacity,
    ...animatedTransform,
  };
}
