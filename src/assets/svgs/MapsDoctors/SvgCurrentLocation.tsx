import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={22} height={26} viewBox="0 0 22 26" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.022 5.066a5.61 5.61 0 00-5.602 5.603 5.61 5.61 0 005.602 5.602.95.95 0 00.948-.947.95.95 0 00-.948-.948 3.712 3.712 0 01-3.707-3.707 3.712 3.712 0 013.707-3.708 3.713 3.713 0 013.708 3.708c0 .884-.316 1.737-.89 2.406a.945.945 0 00.105 1.338c.4.342.995.294 1.338-.106a5.587 5.587 0 001.342-3.638 5.61 5.61 0 00-5.603-5.603zm7.31-2.07c-2.07-2-4.798-3.043-7.683-2.949-5.256.185-9.595 4.266-10.1 9.49a10.621 10.621 0 00.21 3.354c.164.71.395 1.406.7 2.07 1.07 2.516 3.397 6.392 8.426 10.562a1.777 1.777 0 002.275 0c5.029-4.175 7.356-8.046 8.425-10.563.306-.663.543-1.358.7-2.07a10.81 10.81 0 00.258-2.328 10.44 10.44 0 00-3.212-7.566zm1.158 9.205c0 .016-.005.026-.005.042-.006.026-.021.1-.048.216v.01a8.615 8.615 0 01-.59 1.738c-.98 2.312-3.127 5.882-7.82 9.8-4.691-3.913-6.84-7.488-7.819-9.8-.005-.01-.01-.02-.01-.026a8.515 8.515 0 01-.58-1.712v-.01l-.047-.216c0-.016-.005-.026-.005-.042a8.36 8.36 0 01-.132-2.486c.41-4.286 3.97-7.63 8.278-7.777a8.558 8.558 0 016.303 2.417 8.551 8.551 0 012.633 6.208c0 .548-.053 1.1-.158 1.638z"
        fill="#fff"
      />
    </Svg>
  );
}

const SvgCurrentLocation = React.memo(SvgComponent);
export default SvgCurrentLocation;
