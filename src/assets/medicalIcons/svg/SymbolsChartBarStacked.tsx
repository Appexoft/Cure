import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsChartBarStacked = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 24a1 1 0 0 0-1 1v15H8V7H6v34a1 1 0 0 0 1 1h34v-2h-2V13a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v27h-2V21a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v19h-2V25a1 1 0 0 0-1-1h-6Zm21 16h4V26h-4v14Zm4-16h-4V14h4v10Zm-14 6v10h4V30h-4Zm4-2h-4v-6h4v6Zm-14 6v6h4v-6h-4Zm4-2h-4v-6h4v6Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSymbolsChartBarStacked;
