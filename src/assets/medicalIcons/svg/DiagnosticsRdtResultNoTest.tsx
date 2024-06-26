import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgDiagnosticsRdtResultNoTest = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path
      fill="#333"
      d="M36 24a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM30.752 23.25a.751.751 0 1 1 .002 1.502.751.751 0 0 1-.002-1.502Z"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20Zm-9.066 14.3A17.921 17.921 0 0 1 24 42c-9.941 0-18-8.059-18-18 0-4.443 1.61-8.51 4.278-11.65L15.647 18H14a6 6 0 0 0 0 12h13.048l7.886 8.3ZM11.657 10.898 18.406 18H34a6 6 0 0 1 0 12h-4.193l6.647 6.996A17.948 17.948 0 0 0 42 24c0-9.941-8.059-18-18-18-4.777 0-9.12 1.861-12.343 4.898ZM38 24a4 4 0 0 0-4-4H20.306l1.9 2H26a2 2 0 0 1 .006 4l1.9 2H34a4 4 0 0 0 4-4Zm-28 0a4 4 0 0 1 4-4h3.547l1.9 2H14a2 2 0 0 0 0 4h9.247l1.901 2H14a4 4 0 0 1-4-4Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgDiagnosticsRdtResultNoTest;
