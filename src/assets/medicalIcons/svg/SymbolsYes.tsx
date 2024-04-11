import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsYes = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M34.67 16.259a1 1 0 0 1 .072 1.412L21.386 32.432l-8.076-7.709a1 1 0 0 1 1.38-1.446l6.59 6.29L33.259 16.33a1 1 0 0 1 1.413-.07Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSymbolsYes;
