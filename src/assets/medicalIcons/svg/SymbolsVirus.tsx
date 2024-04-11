import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsVirus = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path
      fill="#333"
      d="M20 25a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM25 19a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM29 24a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M21 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v3.033a14.937 14.937 0 0 1 8.876 3.677l2.145-2.145-.707-.707a1 1 0 1 1 1.414-1.414l2.828 2.828a1 1 0 0 1-1.414 1.414l-.707-.707-2.145 2.145A14.938 14.938 0 0 1 38.967 23H42v-1a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-1h-3.033a14.938 14.938 0 0 1-3.677 8.876l2.145 2.145.707-.707a1 1 0 1 1 1.414 1.414l-2.828 2.828a1 1 0 0 1-1.414-1.414l.707-.707-2.145-2.145A14.938 14.938 0 0 1 25 38.967V42h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1v-3.033a14.937 14.937 0 0 1-8.876-3.677l-2.145 2.145.707.707a1 1 0 1 1-1.414 1.414l-2.828-2.828a1 1 0 1 1 1.414-1.414l.707.707 2.145-2.145A14.937 14.937 0 0 1 9.033 25H6v1a1 1 0 1 1-2 0v-4a1 1 0 0 1 2 0v1h3.033a14.937 14.937 0 0 1 3.677-8.876l-2.145-2.145-.707.707a1 1 0 0 1-1.414-1.414l2.828-2.828a1 1 0 1 1 1.414 1.414l-.707.707 2.145 2.145A14.937 14.937 0 0 1 23 9.033V6h-1a1 1 0 0 1-1-1Zm12.872 10.542A12.943 12.943 0 0 1 36.962 23H36a1 1 0 0 0 0 2h.962a12.944 12.944 0 0 1-3.09 7.458l-.68-.68a1 1 0 0 0-1.414 1.415l.68.68A12.944 12.944 0 0 1 25 36.963V36a1 1 0 1 0-2 0v.962a12.943 12.943 0 0 1-7.458-3.09l.68-.68a1 1 0 0 0-1.414-1.414l-.68.68A12.944 12.944 0 0 1 11.037 25H12a1 1 0 1 0 0-2h-.962a12.944 12.944 0 0 1 3.09-7.458l.68.68a1 1 0 0 0 1.414-1.414l-.68-.68A12.944 12.944 0 0 1 23 11.038V12a1 1 0 1 0 2 0v-.962a12.944 12.944 0 0 1 7.458 3.09l-.68.68a1 1 0 0 0 1.414 1.414l.68-.68Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSymbolsVirus;