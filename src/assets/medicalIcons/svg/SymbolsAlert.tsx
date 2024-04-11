import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsAlert = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path
      stroke="#333"
      strokeWidth={2}
      d="M21 8a3 3 0 1 1 6 0v22a3 3 0 1 1-6 0V8Zm0 32a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
    />
  </Svg>
);
export default SvgSymbolsAlert;
