import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgShapesTriangleMedium = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 8a1 1 0 0 1 .894.553l15 30A1 1 0 0 1 39 40H9a1 1 0 0 1-.894-1.447l15-30A1 1 0 0 1 24 8Zm0 3.236L10.618 38h26.764L24 11.236Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgShapesTriangleMedium;
