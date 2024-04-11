import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsClinicalFe = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path
      fill="#333"
      d="M11 30a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1ZM12 34a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H12ZM14 21v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3Z"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M15 6a3 3 0 0 0-3 3H9a3 3 0 0 0-3 3v27a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V12a3 3 0 0 0-3-3h-3a3 3 0 0 0-3-3h-8Zm8 6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8Zm-11-1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3h3a1 1 0 0 1 1 1v27a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h3ZM36 17a3 3 0 1 1 6 0v20.303l-3 4.5-3-4.5V17Zm3-1a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1Zm0 22.197 1-1.5V21h-2v15.697l1 1.5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSymbolsClinicalFe;
