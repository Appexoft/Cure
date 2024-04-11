import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgShapesTriangleSmall = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 11a1 1 0 0 1 .894.553l12 24A1 1 0 0 1 36 37H12a1 1 0 0 1-.894-1.447l12-24A1 1 0 0 1 24 11Zm0 3.236L13.618 35h20.764L24 14.236Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgShapesTriangleSmall;
