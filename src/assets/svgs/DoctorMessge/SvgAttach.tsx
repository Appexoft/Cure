import * as React from 'react';
import Svg, { Path, Mask, G, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={23} height={24} viewBox="0 0 23 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.97 23.83c-1.6 0-3.101-.62-4.226-1.745A5.935 5.935 0 010 17.859c0-1.6.62-3.1 1.744-4.225l12.36-12.36c1.768-1.767 4.516-1.688 6.391.187s1.956 4.623.188 6.392L9.072 19.463a2.801 2.801 0 01-3.957 0 2.802 2.802 0 010-3.956l7.865-7.865a.679.679 0 11.96.96l-7.865 7.865a1.442 1.442 0 000 2.036c.562.561 1.475.56 2.036 0l11.611-11.61c1.22-1.222 1.14-3.144-.187-4.471-1.328-1.328-3.25-1.408-4.47-.187l-12.36 12.36a4.585 4.585 0 00-1.347 3.264c0 1.238.479 2.397 1.347 3.265a4.585 4.585 0 003.265 1.347 4.584 4.584 0 003.265-1.346l12.36-12.36a.679.679 0 11.96.96l-12.36 12.36a5.934 5.934 0 01-4.225 1.744z"
        fill="#000"
      />
      <Mask
        id="prefix__a"
        maskUnits={'userSpaceOnUse'}
        x={0}
        y={0}
        width={23}
        height={24}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.97 23.83c-1.6 0-3.101-.62-4.226-1.745A5.935 5.935 0 010 17.859c0-1.6.62-3.1 1.744-4.225l12.36-12.36c1.768-1.767 4.516-1.688 6.391.187s1.956 4.623.188 6.392L9.072 19.463a2.801 2.801 0 01-3.957 0 2.802 2.802 0 010-3.956l7.865-7.865a.679.679 0 11.96.96l-7.865 7.865a1.442 1.442 0 000 2.036c.562.561 1.475.56 2.036 0l11.611-11.61c1.22-1.222 1.14-3.144-.187-4.471-1.328-1.328-3.25-1.408-4.47-.187l-12.36 12.36a4.585 4.585 0 00-1.347 3.264c0 1.238.479 2.397 1.347 3.265a4.585 4.585 0 003.265 1.347 4.584 4.584 0 003.265-1.346l12.36-12.36a.679.679 0 11.96.96l-12.36 12.36a5.934 5.934 0 01-4.225 1.744z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path fill="#989796" d="M-1 0h24v24H-1z" />
      </G>
    </Svg>
  );
}

const SvgAttach = React.memo(SvgComponent);
export default SvgAttach;
