import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsUiFolder = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24.712 10.555 27.154 15H39a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h13.082a3 3 0 0 1 2.63 1.555ZM40 18a1 1 0 0 0-1-1H8v19a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V18ZM9 11a1 1 0 0 0-1 1v3h16.872l-1.913-3.482a1 1 0 0 0-.877-.518H9Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSymbolsUiFolder;
