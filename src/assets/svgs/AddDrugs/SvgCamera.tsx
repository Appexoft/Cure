import * as React from 'react';
import Svg, { Rect, Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={144} height={144} viewBox="0 0 144 144" fill="none" {...props}>
      <Rect
        x={0.5}
        y={0.5}
        width={143}
        height={143}
        rx={23.5}
        stroke="#969696"
        strokeDasharray="8 8 8 8"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M81.43 58.99h8.538A6.034 6.034 0 0196 65.026V85.69A6.315 6.315 0 0189.693 92H54.307A6.315 6.315 0 0148 85.69V65.025a6.034 6.034 0 016.032-6.034h7.132l.079-.334A7.54 7.54 0 0168.62 52.8h6.768c.973 0 1.769.796 1.769 1.768 0 .974-.796 1.77-1.769 1.77h-6.768a4.028 4.028 0 00-3.94 3.124l-.393 1.7a1.766 1.766 0 01-1.719 1.366h-8.537a2.5 2.5 0 00-2.495 2.497V85.69a2.774 2.774 0 002.77 2.771h35.386a2.774 2.774 0 002.77-2.771V65.025a2.499 2.499 0 00-2.495-2.497h-8.537a1.774 1.774 0 01-1.768-1.768c0-.973.796-1.77 1.768-1.77zm-2.555 15.405c0-.97.793-1.764 1.763-1.764.97 0 1.762.794 1.762 1.764C82.4 80.136 77.729 84.8 72 84.8s-10.4-4.654-10.4-10.395S66.271 64 72 64c.97 0 1.763.793 1.763 1.763 0 .97-.794 1.764-1.763 1.764-3.79 0-6.874 3.076-6.874 6.868 0 3.791 3.084 6.878 6.874 6.878 3.79 0 6.875-3.087 6.875-6.878z"
        fill="#969696"
      />
    </Svg>
  );
}

const SvgCamera = React.memo(SvgComponent);
export default SvgCamera;
