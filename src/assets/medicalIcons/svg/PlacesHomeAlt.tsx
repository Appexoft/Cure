import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgPlacesHomeAlt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M41.708 23.794 24.058 6.086 6.294 23.792a1 1 0 1 0 1.412 1.416L10 22.922V41a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-8.74a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V41a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V22.907l2.292 2.3a1 1 0 1 0 1.416-1.413ZM36 20.9 24.053 8.914 12 20.928V40h7v-7.74a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3V40h7V20.9Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPlacesHomeAlt;
