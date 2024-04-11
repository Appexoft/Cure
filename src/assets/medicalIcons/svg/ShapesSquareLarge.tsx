import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgShapesSquareLarge = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 8v32h32V8H8ZM7 6a1 1 0 0 0-1 1v34a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgShapesSquareLarge;
