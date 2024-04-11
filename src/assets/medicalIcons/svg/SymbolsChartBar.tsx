import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsChartBar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 42a1 1 0 0 1-1-1V7h2v33h3V25a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v15h2V21a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v19h2V13a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v27h2v2H7Zm30-2V14h-4v26h4Zm-10 0h-4V22h4v18Zm-10 0V26h-4v14h4Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSymbolsChartBar;
