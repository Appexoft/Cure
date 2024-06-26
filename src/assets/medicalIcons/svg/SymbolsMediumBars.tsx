import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsMediumBars = (props: SVGProps<SVGSVGElement>) => (
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
      d="M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9Zm3-1a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-4ZM19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21Zm5-1-3 3v2.172l5.159-5.16A1.004 1.004 0 0 0 26 20h-2Zm3 2-6 6v2.172l6-6V22Zm0 5-6 6v2.172l6-6V27Zm0 5-6 6v1c0 .32.15.605.384.788L27 34.172V32Zm0 5-3 3h2a1 1 0 0 0 1-1v-2ZM6 33a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6Zm3-1a1 1 0 0 0-1 1v2.172L11.172 32H9Zm4.707.293L8 38v1c0 .32.15.605.384.788L14 34.172V33a.997.997 0 0 0-.293-.707ZM14 37l-3 3h2a1 1 0 0 0 1-1v-2Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSymbolsMediumBars;
