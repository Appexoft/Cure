import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgFamilyCopperIud = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path
      fill="#333"
      d="M23 6h-4.132l1-2H23a1 1 0 0 1 1 1 1 1 0 0 1 1-1h3.132l1 2H25v10.257l-2-1V6ZM10 5a1 1 0 0 0 1 1h1.632l1-2H11a1 1 0 0 0-1 1ZM14.868 6l1-2h1.764l-1 2h-1.764Z"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M20 40a4.002 4.002 0 0 1 3-3.874V25.493l2 1v9.633A4.002 4.002 0 0 1 24 44a4 4 0 0 1-4-4Zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
      clipRule="evenodd"
    />
    <Path
      fill="#333"
      d="m25 20.257-2-1v-1.764l2 1v1.764ZM25 22.493l-2-1v1.764l2 1v-1.764ZM38 5a1 1 0 0 0-1-1h-2.632l1 2H37a1 1 0 0 0 1-1ZM31.368 6l-1-2h1.764l1 2h-1.764Z"
    />
  </Svg>
);
export default SvgFamilyCopperIud;
