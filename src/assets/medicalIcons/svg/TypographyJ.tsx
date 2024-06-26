import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgTypographyJ = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27 12a3 3 0 1 1 6 0v18a9 9 0 1 1-18 0 3 3 0 0 1 6 0 3 3 0 1 0 6 0V12Zm3-1a1 1 0 0 0-1 1v18a5 5 0 0 1-10 0 1 1 0 1 0-2 0 7 7 0 1 0 14 0V12a1 1 0 0 0-1-1Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTypographyJ;
