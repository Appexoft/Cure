import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgTypographyU = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 12a3 3 0 1 1 6 0v16a5 5 0 0 0 10 0V12a3 3 0 1 1 6 0v16c0 6.075-4.925 11-11 11s-11-4.925-11-11V12Zm3-1a1 1 0 0 0-1 1v16a9 9 0 1 0 18 0V12a1 1 0 1 0-2 0v16a7 7 0 1 1-14 0V12a1 1 0 0 0-1-1Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTypographyU;
