import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSpecialtyGym = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path
      fill="#333"
      d="M19 32V16h-3v16h3ZM14 29V19h-3v4h-1v2h1v4h3ZM29 16v16h3V16h-3ZM34 29h3v-4h1v-2h-1v-4h-3v10ZM21 25h6v-2h-6v2Z"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Zm2 0a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSpecialtyGym;
