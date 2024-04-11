import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgTypographyV = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.23 37.154a3 3 0 0 0 5.54 0l10-24a3 3 0 0 0-5.54-2.308L24 28.2l-7.23-17.354a3 3 0 0 0-5.54 2.308l10 24ZM24 37a1 1 0 0 1-.923-.615l-10-24a1 1 0 1 1 1.846-.77l8.154 19.57a1 1 0 0 0 1.846 0l8.154-19.57a1 1 0 0 1 1.846.77l-10 24A1 1 0 0 1 24 37Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTypographyV;
