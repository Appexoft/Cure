import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgShapesTriangleLarge = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 5a1 1 0 0 1 .894.553l18 36A1 1 0 0 1 42 43H6a1 1 0 0 1-.894-1.447l18-36A1 1 0 0 1 24 5Zm0 3.236L7.618 41h32.764L24 8.236Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgShapesTriangleLarge;
