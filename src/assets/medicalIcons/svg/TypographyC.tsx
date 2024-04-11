import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgTypographyC = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.26 10.142a15 15 0 0 1 16.347 3.251 3 3 0 1 1-4.243 4.243 9.001 9.001 0 1 0 0 12.728 3 3 0 1 1 4.243 4.243A15 15 0 1 1 18.26 10.142Zm8.276 1.108a13 13 0 1 0 6.656 21.942 1 1 0 0 0-1.414-1.414 11 11 0 1 1 0-15.556 1 1 0 1 0 1.414-1.414 13 13 0 0 0-6.656-3.558Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTypographyC;
