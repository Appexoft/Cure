import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsDefault = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 10a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v14.055a8.948 8.948 0 0 1 2 .457V10a4 4 0 0 0-4-4H12a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h11.515a8.968 8.968 0 0 1-1.003-2H12a2 2 0 0 1-2-2V10Z"
      clipRule="evenodd"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M12 14a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Zm-1 6a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1ZM31 40a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0 2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      clipRule="evenodd"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M34.997 29.028a1 1 0 0 0-1.414 0l-.79.79 1.413 1.415.791-.791a1 1 0 0 0 0-1.414ZM33.5 31.94l-1.414-1.414-5.069 5.069v1.414h1.414l5.07-5.069Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSymbolsDefault;
