import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsExercise = (props: SVGProps<SVGSVGElement>) => (
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
      d="M31 14a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h3a1 1 0 0 1 1 1v6h3v2h-3v6a1 1 0 0 1-1 1h-3v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-9H17v9a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2H8a1 1 0 0 1-1-1v-6H4v-2h3v-6a1 1 0 0 1 1-1h3v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9h14v-9ZM13 33h2V15h-2v18Zm-2-15H9v12h2V18Zm26 12V18h2v12h-2Zm-2-15v18h-2V15h2Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSymbolsExercise;
