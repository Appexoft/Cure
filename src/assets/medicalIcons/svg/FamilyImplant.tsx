import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgFamilyImplant = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 10a4 4 0 0 1 8 0v28a4 4 0 0 1-8 0V10Zm4-2a2 2 0 0 0-2 2v28a2 2 0 1 0 4 0V10a2 2 0 0 0-2-2Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFamilyImplant;
