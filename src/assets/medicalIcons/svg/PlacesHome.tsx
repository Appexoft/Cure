import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgPlacesHome = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path
      fill="#333"
      d="M24.507 10.138a1 1 0 0 0-1.014 0L5.631 20.645l1.014 1.724L24 12.16 41.355 22.37l1.014-1.724L36 16.9V12a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1.957l-6.493-3.819ZM14 25h11v6H14v-6Z"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="m24 14-14 8v14H5a1 1 0 1 0 0 2h36a1 1 0 1 0 0-2h-3V22l-14-8Zm0 2.303-12 6.858V36h16V25h6v11h2V23.16l-12-6.857Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPlacesHome;
