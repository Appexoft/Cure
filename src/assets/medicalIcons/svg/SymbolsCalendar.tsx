import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsCalendar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 25h-2v2h2v-2Zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2ZM25 25h-2v2h2v-2Zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2ZM33 25h-2v2h2v-2Zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2ZM17 33h-2v2h2v-2Zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2ZM25 33h-2v2h2v-2Zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2ZM33 33h-2v2h2v-2Zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Z"
      clipRule="evenodd"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M10 11a1 1 0 0 0-1 1v27a1 1 0 0 0 1 1h28c.55 0 1-.449 1-1.002V12.002c0-.554-.45-1.002-1-1.002h-3V9h3c1.658 0 3 1.347 3 3.002v26.996A3.002 3.002 0 0 1 38 42H10a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h5v2h-5Zm21 0H19V9h12v2Z"
      clipRule="evenodd"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M39 20H9v-2h30v2Z"
      clipRule="evenodd"
    />
    <Path
      fill="#333"
      d="M15 7a1 1 0 1 1 2 0v7a1 1 0 1 1-2 0V7ZM31 7a1 1 0 1 1 2 0v7a1 1 0 1 1-2 0V7Z"
    />
  </Svg>
);
export default SvgSymbolsCalendar;
