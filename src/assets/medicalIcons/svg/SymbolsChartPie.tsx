import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsChartPie = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24ZM23 6.027C13.524 6.547 6 14.394 6 24c0 2.922.696 5.682 1.932 8.122L23 23.422V6.028Zm16.066 8.12C36.022 9.502 30.888 6.35 25 6.027v16.241l14.066-8.121ZM24 42c-6.304 0-11.851-3.24-15.066-8.147l31.134-17.975A17.924 17.924 0 0 1 42 24c0 9.941-8.059 18-18 18Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSymbolsChartPie;
