import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSpecialtyFinanceDept = (props: SVGProps<SVGSVGElement>) => (
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
      d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
      clipRule="evenodd"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M17 10a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2H17Zm14 2H17v9h14v-9Zm-9.727 12.636a1.636 1.636 0 1 1-3.273 0 1.636 1.636 0 0 1 3.273 0ZM24 26.273A1.636 1.636 0 1 0 24 23a1.636 1.636 0 0 0 0 3.273Zm6-1.637a1.636 1.636 0 1 1-3.273 0 1.636 1.636 0 0 1 3.273 0Zm-10.364 6a1.636 1.636 0 1 0 0-3.272 1.636 1.636 0 0 0 0 3.272Zm6-1.636a1.636 1.636 0 1 1-3.273 0 1.636 1.636 0 0 1 3.273 0Zm2.728 1.636a1.636 1.636 0 1 0 0-3.272 1.636 1.636 0 0 0 0 3.272ZM30 33.364a1.636 1.636 0 1 1-3.273 0 1.636 1.636 0 0 1 3.273 0Zm-10.364-1.637a1.636 1.636 0 1 0 0 3.273H24a1.636 1.636 0 0 0 0-3.273h-4.364Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSpecialtyFinanceDept;
