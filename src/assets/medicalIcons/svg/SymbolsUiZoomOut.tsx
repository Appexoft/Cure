import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSymbolsUiZoomOut = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path fill="#333" d="M33 22H21v-2h12v2Z" />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M42 21c0 8.284-6.716 15-15 15-3.782 0-7.238-1.4-9.876-3.71l-1.828 1.828.004 2.825-6.472 6.471-4.242-4.242 6.524-6.524 2.707.12 1.893-1.892A14.943 14.943 0 0 1 12 21c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15Zm-2 0c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13ZM8.828 40.586l-1.414-1.414 4.486-4.487 1.397.063.002 1.367-4.47 4.47Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSymbolsUiZoomOut;
