import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsPavedRoadAlt = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path
      fill="#333"
      d="M33 7a1 1 0 0 1 2 0v34a1 1 0 1 1-2 0V7ZM13 7a1 1 0 0 1 2 0v34a1 1 0 1 1-2 0V7ZM23 11a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-4ZM23 22a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-4ZM23 33a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-4Z"
    />
  </Svg>
);
export default SvgSymbolsPavedRoadAlt;
