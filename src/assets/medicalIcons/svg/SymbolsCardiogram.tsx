import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsCardiogram = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3h4a3 3 0 0 1 3 3v31a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h4Zm0 2h-4a1 1 0 0 0-1 1v10.989h5.633l3.388-6.024 2.117 7.41 2.59-3.33h5.49a1 1 0 1 1 0 2h-4.511l-4.41 5.668-1.883-6.59-1.612 2.866H12V41a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1h-4a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3Zm3-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-8Zm-4 25a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H17a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSymbolsCardiogram;
