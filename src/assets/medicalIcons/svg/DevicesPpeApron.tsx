import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgDevicesPpeApron = (props: SVGProps<SVGSVGElement>) => (
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
      d="m20.05 5.963.292.658a4.001 4.001 0 0 0 7.316 0l.292-.658.716.068A7 7 0 0 1 35 13v12a3 3 0 0 1-3 3h-1v11.72l-3.521 1.175a11 11 0 0 1-6.957 0L17 39.72V28h-1a3 3 0 0 1-3-3V13a7 7 0 0 1 6.334-6.969l.716-.067ZM33 25a1 1 0 0 1-1 1h-1V15h-2v7H19v-7h-2v11h-1a1 1 0 0 1-1-1V13a5.002 5.002 0 0 1 3.878-4.874A5.996 5.996 0 0 0 24 11a5.996 5.996 0 0 0 5.122-2.874A5.002 5.002 0 0 1 33 13v12Zm-6.154 13.997L29 38.28V24H19v14.28l2.154.717a9 9 0 0 0 5.692 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgDevicesPpeApron;
