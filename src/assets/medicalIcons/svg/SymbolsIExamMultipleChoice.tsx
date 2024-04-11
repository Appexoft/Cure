import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsIExamMultipleChoice = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path
      fill="#333"
      d="M20 15a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1ZM21 18a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8ZM20 28a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1ZM21 31a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M10 27a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5Zm2 1v3h3v-3h-3Z"
      clipRule="evenodd"
    />
    <Path
      fill="#333"
      d="M17.707 15.707a1 1 0 0 0-1.414-1.414L13 17.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L13 20.414l4.707-4.707Z"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M10 6a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4H10Zm-2 4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V10ZM36 16a3 3 0 1 1 6 0v20.303l-3 4.5-3-4.5V16Zm3-1a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1Zm0 22.197-1-1.5V20h2v15.697l-1 1.5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSymbolsIExamMultipleChoice;
