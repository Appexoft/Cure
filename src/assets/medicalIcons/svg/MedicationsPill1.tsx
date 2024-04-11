import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgMedicationsPill1 = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path
      fill="#333"
      d="M34.207 15.707a1 1 0 0 0-1.414-1.414l-18.5 18.5a1 1 0 0 0 1.414 1.414l18.5-18.5Z"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20Zm-2 0c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMedicationsPill1;
