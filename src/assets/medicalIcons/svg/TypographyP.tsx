import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgTypographyP = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 12a3 3 0 0 1 3-3h10a9 9 0 1 1 0 18h-7v9a3 3 0 1 1-6 0V12Zm3-1a1 1 0 0 0-1 1v24a1 1 0 1 0 2 0V26a1 1 0 0 1 1-1h8a7 7 0 1 0 0-14H16Zm1 3a1 1 0 0 1 1-1h8a5 5 0 0 1 0 10h-8a1 1 0 0 1-1-1v-8Zm2 1v6h7a3 3 0 1 0 0-6h-7Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTypographyP;
