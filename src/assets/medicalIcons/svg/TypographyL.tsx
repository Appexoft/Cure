import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgTypographyL = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 12a3 3 0 1 1 6 0v21h9a3 3 0 1 1 0 6H18a3 3 0 0 1-3-3V12Zm3-1a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h12a1 1 0 1 0 0-2H20a1 1 0 0 1-1-1V12a1 1 0 0 0-1-1Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTypographyL;
