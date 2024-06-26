import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.333 2.833a.917.917 0 100-1.833.917.917 0 000 1.833zm1.834 5.5a1.833 1.833 0 11-3.667 0 1.833 1.833 0 013.667 0zm7.333 0a1.833 1.833 0 11-3.667 0 1.833 1.833 0 013.667 0zM8.333 17.5a1.833 1.833 0 100-3.667 1.833 1.833 0 000 3.667zm9.167-1.833a1.833 1.833 0 11-3.667 0 1.833 1.833 0 013.667 0zM1.917 9.25a.917.917 0 100-1.833.917.917 0 000 1.833zm.916 6.417a.917.917 0 11-1.833 0 .917.917 0 011.833 0zm19.25-6.417a.917.917 0 100-1.833.917.917 0 000 1.833zM23 15.667a.917.917 0 11-1.833 0 .917.917 0 011.833 0zm-6.417-13.75a.917.917 0 11-1.833 0 .917.917 0 011.833 0zM8.333 23a.917.917 0 100-1.833.917.917 0 000 1.833zm8.25-.917a.917.917 0 11-1.833 0 .917.917 0 011.833 0z"
        fill="#FFCF5C"
      />
    </Svg>
  );
}

const SvgPoint = React.memo(SvgComponent);
export default SvgPoint;
