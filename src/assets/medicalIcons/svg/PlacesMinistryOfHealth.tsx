import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgPlacesMinistryOfHealth = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path fill="#333" d="M25 16v-2h2v-2h-2v-2h-2v2h-2v2h2v2h2Z" />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M24.625 5.22a1 1 0 0 0-1.25 0L8.65 17H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v10H7a1 1 0 0 0-1 1v3H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h38a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1v-3a1 1 0 0 0-1-1h-1V23h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1.65L24.626 5.22ZM36.149 17 24 7.28 11.85 17h24.3ZM8 19v2h32v-2H8Zm30 4h-2v10h2V23Zm-4 10V23H14v10h1a1 1 0 0 1 1 1v3h4v-8a4 4 0 0 1 8 0v8h4v-3a1 1 0 0 1 1-1h1Zm-12-4v8h4v-8a2 2 0 1 0-4 0Zm20 10v2H6v-2h36Zm-8-4v2h6v-2h-6Zm-24-2V23h2v10h-2Zm-2 2h6v2H8v-2Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPlacesMinistryOfHealth;
