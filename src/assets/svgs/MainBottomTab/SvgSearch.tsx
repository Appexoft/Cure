import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={23} height={23} fill="none" {...props}>
    <Path
      d="m10.887 4.341-.333.584a4.298 4.298 0 0 0-5.86 1.614l-.585-.332a4.972 4.972 0 0 1 6.778-1.866Z"
      fill="#fff"
    />
    <Path
      d="M14.481 2.623c-3.06-3.279-8.217-3.459-11.496-.4a8.134 8.134 0 1 0 11.338 11.662 8.134 8.134 0 0 0 .158-11.262Zm.662 5.782a6.612 6.612 0 0 1-6.84 6.38 6.572 6.572 0 0 1-4.605-2.1 6.62 6.62 0 0 1 .325-9.346 6.613 6.613 0 0 1 11.12 5.066Z"
      fill="#fff"
    />
    <Path
      d="m10.887 4.341-.333.584a4.298 4.298 0 0 0-5.86 1.614l-.585-.332a4.972 4.972 0 0 1 6.778-1.866ZM22.23 20.448l-5.53-5.717-2.202 2.054 5.532 5.72a1.496 1.496 0 0 0 1.047.476h.053a1.506 1.506 0 0 0 1.1-2.533Z"
      fill="#fff"
    />
    <Path
      d="m14.098 13.643-.493.46 1.982 2.124.493-.46-1.982-2.124ZM10.887 4.341l-.333.584a4.298 4.298 0 0 0-5.86 1.614l-.585-.332a4.972 4.972 0 0 1 6.778-1.866Z"
      fill="#fff"
    />
  </Svg>
);

export const SvgSearch = React.memo(SvgComponent);
