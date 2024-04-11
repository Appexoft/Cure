import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsInfo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Zm0 2c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
      clipRule="evenodd"
    />
    <Path
      fill="#333"
      d="M22 35a2 2 0 1 0 4 0V21a2 2 0 1 0-4 0v14ZM24 15a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
    />
  </Svg>
);
export default SvgSymbolsInfo;
