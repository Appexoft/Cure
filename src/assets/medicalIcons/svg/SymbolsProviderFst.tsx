import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsProviderFst = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 8v7h7V8H8ZM7 6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7Zm26 27v7h7v-7h-7Zm-1-2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-9Zm-1.609-2.023-3.184-3.184-1.414 1.414 3.184 3.184 1.414-1.414Zm-8.714-8.714 3.977 3.977-1.414 1.415-3.977-3.978v4.218h-2v-7.632h7.632v2h-4.218Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSymbolsProviderFst;
