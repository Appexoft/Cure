import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsAlertTriangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 6a1 1 0 0 1 .894.553l17 34A1 1 0 0 1 41 42H7a1 1 0 0 1-.894-1.447l17-34A1 1 0 0 1 24 6ZM8.618 40h30.764L24 9.236 8.618 40Z"
      clipRule="evenodd"
    />
    <Path
      fill="#333"
      d="M22 20a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V20ZM22 35.966C22 34.88 22.88 34 23.966 34h.068a1.966 1.966 0 1 1 0 3.933h-.067A1.966 1.966 0 0 1 22 35.966Z"
    />
  </Svg>
);
export default SvgSymbolsAlertTriangle;
