import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { Color } from '../../utils/GlobalStyles';

const SvgComponent = ({ color, ...props }: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.696 7.345c.276-.28.373-.692.254-1.075a1.01 1.01 0 0 0-.81-.713l-3.39-.514a.444.444 0 0 1-.334-.253L8.901 1.584A.995.995 0 0 0 8 1a.995.995 0 0 0-.901.584L5.584 4.79a.445.445 0 0 1-.334.253l-3.39.514a1.01 1.01 0 0 0-.81.714c-.119.382-.022.794.254 1.074L3.756 9.84c.105.107.153.26.128.41l-.578 3.523c-.052.31.026.612.219.85.298.37.82.484 1.237.255l3.032-1.664a.437.437 0 0 1 .412 0l3.032 1.664a.96.96 0 0 0 .467.122.99.99 0 0 0 .77-.377c.193-.238.27-.54.22-.85l-.58-3.523a.476.476 0 0 1 .128-.41l2.453-2.495Z"
      fill={color || Color.orange}
    />
  </Svg>
);

export const SvgFillStar = React.memo(SvgComponent);
