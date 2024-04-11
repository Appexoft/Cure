import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgPlacesCity = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path
      fill="#333"
      d="M22 13h-2v2h2v-2ZM24 13h2v2h-2v-2ZM30 13h-2v2h2v-2ZM20 17h2v2h-2v-2ZM26 17h-2v2h2v-2ZM28 17h2v2h-2v-2ZM22 21h-2v2h2v-2ZM24 21h2v2h-2v-2ZM30 21h-2v2h2v-2ZM20 25h2v2h-2v-2ZM26 25h-2v2h2v-2ZM20 29h2v2h-2v-2ZM26 29h-2v2h2v-2ZM20 33h2v2h-2v-2ZM26 33h-2v2h2v-2ZM20 37h2v2h-2v-2ZM26 37h-2v2h2v-2ZM31 30h3v-2h-3v2ZM34 34h-3v-2h3v2ZM31 38h3v-2h-3v2Z"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="m17 4 16 6v14h4a1 1 0 0 1 1 1v17h1a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1V21a1 1 0 0 1 1-1h2v-7h2v7h2V4Zm2 2.886 12 4.5V24h-3a1 1 0 0 0-1 1v17h-8V6.886ZM12 22v20h5V22h-5Zm24 20h-2v-2h-3v2h-2V26h7v16Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPlacesCity;
