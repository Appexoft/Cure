import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsPrescriptionDocument = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 4a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1V15a1 1 0 0 0-.293-.707l-10-10A1 1 0 0 0 28 4H10Zm1 38V6h16v9a1 1 0 0 0 1 1h9v26H11Zm24.586-28L29 7.414V14h6.586ZM17 33h2v-7h1.586l5 5-3.293 3.293 1.414 1.414L27 32.414l3.293 3.293 1.414-1.414L28.414 31l3.293-3.293-1.414-1.414L27 29.586l-3.605-3.605A4 4 0 0 0 23 18h-5a1 1 0 0 0-1 1v14Zm6-9h-4v-4h4a2 2 0 1 1 0 4Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSymbolsPrescriptionDocument;
