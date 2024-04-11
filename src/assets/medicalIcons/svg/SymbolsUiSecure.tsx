import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsUiSecure = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path
      fill="#333"
      d="M15 26h18v-2H15v2ZM33 31H15v-2h18v2ZM15 36h18v-2H15v2Z"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M39 20a2 2 0 0 0-2-2h-2v-1c0-6.075-4.925-11-11-11s-11 4.925-11 11v1h-2a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V20Zm-24-3a9 9 0 1 1 18 0v1h-2v-1a7 7 0 1 0-14 0v3h20v20H11V20h4v-3Zm9-5a5 5 0 0 1 5 5v1H19v-1a5 5 0 0 1 5-5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSymbolsUiSecure;
