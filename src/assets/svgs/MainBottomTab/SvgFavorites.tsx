import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = ({ color, ...props }: SvgProps) => (
  <Svg width={20} height={19} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.987 6.171c.009-.112.013-.222.013-.354C17.986 3.696 16.314 2 14.276 2a3.668 3.668 0 0 0-2.768 1.273L10 5.002l-1.507-1.73A3.668 3.668 0 0 0 5.723 2C3.687 2 2.015 3.697 2 5.81c0 .059.008.3.014.373.19 2.527 2.236 5.144 7.986 10.17 5.75-5.026 7.796-7.643 7.987-10.182ZM10 1.958 11.188.923c.9-.59 1.965-.923 3.088-.923C17.423 0 19.98 2.593 20 5.803c0 .199-.006.363-.02.53-.275 3.662-3.409 6.99-9.342 12.116L10 19l-.637-.55C3.428 13.321.295 9.993.02 6.332.009 6.196 0 5.898 0 5.81.022 2.593 2.577 0 5.724 0c1.123 0 2.188.334 3.088.923L10 1.958Z"
      fill={color}
    />
  </Svg>
);

export const SvgFavorites = React.memo(SvgComponent);
