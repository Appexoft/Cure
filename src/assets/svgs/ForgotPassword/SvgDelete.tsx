import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent({ color, width, height, ...props }: SvgProps) {
  return (
    <Svg
      width={width || 8}
      height={height || 8}
      viewBox="0 0 8 8"
      fill="none"
      {...props}>
      <Path
        d="M7.766.234a.799.799 0 00-1.13 0L4.005 2.865 1.374.234a.799.799 0 00-1.13 1.13l2.631 2.631L.244 6.626a.799.799 0 101.13 1.13l2.631-2.631 2.631 2.631a.799.799 0 001.13-1.13L5.135 3.995l2.631-2.631a.799.799 0 000-1.13z"
        fill={color || '#fff'}
      />
    </Svg>
  );
}

const SvgDelete = React.memo(SvgComponent);
export default SvgDelete;
