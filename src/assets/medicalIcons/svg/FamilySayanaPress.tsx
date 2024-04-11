import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgFamilySayanaPress = (props: SVGProps<SVGSVGElement>) => (
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
      d="m25 4-2 2v5h-1a1 1 0 0 0-1 1v5h-2v2h-3a4 4 0 0 0-4 4v17a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V23a4 4 0 0 0-4-4h-3v-2h-2v-5a1 1 0 0 0-1-1h-1V4Zm0 7h-2v8h2v-8ZM14 23a2 2 0 0 1 2-2h6a1 1 0 0 0 1 1v3.083a6.002 6.002 0 0 0 0 11.834V39h2v-2.083a6.002 6.002 0 0 0 0-11.834V22a1 1 0 0 0 1-1h6a2 2 0 0 1 2 2v17a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V23Zm14 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFamilySayanaPress;
