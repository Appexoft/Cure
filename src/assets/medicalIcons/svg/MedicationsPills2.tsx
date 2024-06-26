import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgMedicationsPills2 = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path
      fill="#333"
      d="M20.304 15.308a1 1 0 0 0-.762-1.85l-7.846 3.234a1 1 0 0 0 .762 1.85l7.846-3.234Z"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#333"
      d="M35.91 33.925a1 1 0 1 0 .449-1.949l-8.27-1.901a1 1 0 1 0-.448 1.949l8.27 1.901Z"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M32 42c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMedicationsPills2;
