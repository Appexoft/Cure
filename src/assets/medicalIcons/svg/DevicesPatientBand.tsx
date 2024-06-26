import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgDevicesPatientBand = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M42 26.666a.5.5 0 0 1-.5.5H37v2h3.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-8.447v2h5.314c-2.84 2.517-7.337 2.826-10.623.826l-5.224-3.18-1.04 1.709 5.224 3.18c4.008 2.44 9.496 2.09 13.028-1.072.479-.429.972-.906 1.49-1.462h.278a2.5 2.5 0 0 0 2.5-2.5v-1c0-.313-.057-.612-.162-.888A2.498 2.498 0 0 0 44 26.666v-1c0-.888-.464-1.669-1.162-2.112.105-.276.162-.575.162-.887v-1a2.5 2.5 0 0 0-2-2.45v-.811a3 3 0 0 0-2.767-2.991l-3.194-.248h-1.275a29.653 29.653 0 0 0-13.21 3.104l.892 1.79a27.652 27.652 0 0 1 12.318-2.895h1.197l3.117.243a1 1 0 0 1 .922.997v.76h-2v2h3.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H37v2h4.5a.5.5 0 0 1 .5.5v1Z"
      clipRule="evenodd"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M21 21.166a2 2 0 0 1-2-2v-8a1 1 0 1 0-2 0v8a2 2 0 0 1-2 2v9a2 2 0 0 1 2 2v1h2v-1a2 2 0 0 1 2-2v-9Zm0 11a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2v-8a3 3 0 1 0-6 0v8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2v3h6v-3Z"
      clipRule="evenodd"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M19 22.166h-2v7h2v-7ZM20 18.166h-5v-2h5v2ZM6 20h9v2H6v-2ZM6 29h9v2H6v-2Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgDevicesPatientBand;
