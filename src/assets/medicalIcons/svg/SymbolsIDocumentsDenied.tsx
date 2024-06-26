import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsIDocumentsDenied = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path
      fill="#333"
      d="M22.707 20.293a1 1 0 0 0-1.414 1.414L24.586 25l-3.293 3.293a1 1 0 0 0 1.414 1.414L26 26.414l3.293 3.293a1 1 0 0 0 1.414-1.414L27.414 25l3.293-3.293a1 1 0 0 0-1.414-1.414L26 23.586l-3.293-3.293Z"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M38 15v21a3 3 0 0 1-3 3H17a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h11l10 10Zm-10 1a1 1 0 0 1-1-1V7H17a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V16h-8Zm1-7.172L34.172 14H29V8.828Z"
      clipRule="evenodd"
    />
    <Path fill="#333" d="M12 11v27a3 3 0 0 0 3 3h19v2H15a5 5 0 0 1-5-5V11h2Z" />
  </Svg>
);
export default SvgSymbolsIDocumentsDenied;
