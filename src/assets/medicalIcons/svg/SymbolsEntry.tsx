import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsEntry = (props: SVGProps<SVGSVGElement>) => (
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
      d="M23 6.775v34.45l11-3.666V10.442L23 6.775Zm-.684-2.336A1 1 0 0 0 21 5.387v37.226a1 1 0 0 0 1.316.948l13-4.333a1 1 0 0 0 .684-.949V9.721a1 1 0 0 0-.684-.949l-13-4.333Z"
      clipRule="evenodd"
    />
    <Path
      fill="#333"
      d="M27 23c0 1.105-.448 2-1 2s-1-.895-1-2 .448-2 1-2 1 .895 1 2Z"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M21 8h-9v31h9v-2h-7V10h7V8Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSymbolsEntry;
