import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = ({ color, ...props }: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path opacity={0.01} fill="#000" d="M0 0h24v24H0z" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 22H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 2 0h6a1 1 0 1 1 2 0h4a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1ZM7 5H4v3h16V5h-3a1 1 0 1 1-2 0H9a1 1 0 0 1-2 0Zm-3 5h16v10H4V10Zm3 4v-2h2v2H7Zm0 4v-2h2v2H7Zm6-6h-2v2h2v-2Zm-2 4h2v2h-2v-2Zm6-2v-2h-2v2h2Zm-2 4v-2h2v2h-2Z"
      fill={color}
    />
  </Svg>
);

export const SvgCalendar = React.memo(SvgComponent);
