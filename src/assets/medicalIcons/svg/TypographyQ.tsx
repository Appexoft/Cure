import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgTypographyQ = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M9 24c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15 0 3.056-.915 5.9-2.485 8.272l1.606 1.607a3 3 0 1 1-4.242 4.242l-1.607-1.606A14.934 14.934 0 0 1 24 39c-8.284 0-15-6.716-15-15Zm15-13c-7.18 0-13 5.82-13 13s5.82 13 13 13c2.921 0 5.615-.962 7.785-2.588l.694-.52 2.814 2.815a1 1 0 0 0 1.414-1.414l-2.814-2.814.52-.694A12.938 12.938 0 0 0 37 24c0-7.18-5.82-13-13-13Zm0 4a9 9 0 1 0 0 18c1.39 0 2.706-.315 3.88-.877l-2.001-2.002a3 3 0 1 1 4.242-4.242l2.002 2.001A8.961 8.961 0 0 0 33 24a9 9 0 0 0-9-9Zm-11 9c0-6.075 4.925-11 11-11s11 4.925 11 11c0 2.24-.67 4.327-1.823 6.067l-.676 1.02-3.794-3.794a1 1 0 0 0-1.414 1.414l3.794 3.794-1.02.676A10.953 10.953 0 0 1 24 35c-6.075 0-11-4.925-11-11Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTypographyQ;
