import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsChartLineStacked = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path
      fill="#333"
      d="M6 41a1 1 0 0 0 1 1h34v-2H8v-.638l9.331-11.198 11.353 3.785a1 1 0 0 0 1.084-.309l10-12-1.536-1.28-9.563 11.476-11.353-3.785a1 1 0 0 0-1.084.309L8 36.238v-6.851l9.289-10.218 10.37 3.77a1 1 0 0 0 1.11-.299l10-12-1.537-1.28-9.55 11.46-10.34-3.76a1 1 0 0 0-1.082.267L8 26.413V7H6v34Z"
    />
  </Svg>
);
export default SvgSymbolsChartLineStacked;
