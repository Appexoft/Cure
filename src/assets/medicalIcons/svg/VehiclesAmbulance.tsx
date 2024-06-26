import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgVehiclesAmbulance = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path
      fill="#333"
      d="M32 12.5a1 1 0 1 0 2 0V11a1 1 0 1 0-2 0v1.5ZM16 24v3h2v-3h3v-2h-3v-3h-2v3h-3v2h3Z"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M4 17a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v2h1v-1h1v-1a1 1 0 1 1 2 0v1h1v1h.718a3 3 0 0 1 2.035.796l5.282 4.875A3 3 0 0 1 44 26.876V35h-5.126a4.002 4.002 0 0 1-7.748 0H15.874a4.002 4.002 0 0 1-7.748 0H4V17Zm27.126 16a4.002 4.002 0 0 1 7.748 0H42v-5H30v5h1.126ZM30 26h11.526l-5.13-4.735a1 1 0 0 0-.678-.265H30v5Zm-3-10a1 1 0 0 1 1 1v16H15.874a4.002 4.002 0 0 0-7.748 0H6V17a1 1 0 0 1 1-1h20ZM12 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm25-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#333"
      d="M36.5 17a1 1 0 0 1 1-1H39a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1ZM35.828 12.759a1 1 0 1 0 1.343 1.482l.915-.828a1 1 0 0 0-1.343-1.482l-.915.828Z"
    />
  </Svg>
);
export default SvgVehiclesAmbulance;
