import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgBodyLungs = (props: SVGProps<SVGSVGElement>) => (
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
      d="M23 6h2v14.5c0 1.398.564 1.942 1.004 2.199.049.028.098.054.148.078l-.004-.375V22.4c-.038-3.528-.111-10.4 5.327-10.4 7.45 0 12.773 26.006 9.58 28.66-3.194 2.654-9.58 1.061-12.773-2.123-2.578-2.571-2.355-8.579-2.195-12.891v-.002c.01-.262.02-.518.028-.767a4.271 4.271 0 0 1-1.119-.45 3.815 3.815 0 0 1-.996-.835c-.297.352-.64.626-.996.834-.4.234-.794.37-1.12.451l.029.768c.16 4.313.383 10.321-2.195 12.892-3.193 3.185-9.58 4.777-12.773 2.123C3.752 38.007 9.075 12 16.525 12c5.439 0 5.365 6.872 5.327 10.4a318.934 318.934 0 0 1-.004.377c.05-.024.1-.05.148-.078.44-.257 1.004-.801 1.004-2.199V6Zm8.475 8c-.954 0-1.49.3-1.866.687-.434.446-.796 1.164-1.05 2.178-.445 1.775-.426 3.817-.41 5.464.002.285.004.558.004.816 0 .76-.033 1.67-.069 2.617l-.04 1.128c-.044 1.376-.07 2.816-.003 4.208.066 1.4.223 2.685.516 3.762.297 1.088.694 1.818 1.137 2.26 1.279 1.275 3.297 2.305 5.355 2.704 2.035.395 3.673.103 4.633-.627l.016-.04a3.71 3.71 0 0 0 .19-.789c.117-.775.147-1.856.068-3.188-.157-2.65-.727-6.011-1.63-9.32-.904-3.32-2.109-6.46-3.474-8.722-.683-1.132-1.357-1.96-1.982-2.485-.618-.52-1.076-.653-1.395-.653Zm-14.95 0c.954 0 1.49.3 1.866.687.434.446.796 1.164 1.05 2.178.445 1.775.426 3.817.41 5.465-.002.285-.004.558-.004.816 0 .76.033 1.67.069 2.616l.04 1.129c.044 1.375.07 2.815.004 4.208-.067 1.4-.224 2.685-.517 3.76-.297 1.09-.694 1.82-1.137 2.262-1.279 1.275-3.297 2.304-5.355 2.704-2.035.394-3.673.102-4.633-.628a3.709 3.709 0 0 1-.206-.829c-.117-.774-.147-1.855-.068-3.187.157-2.65.727-6.012 1.63-9.32.905-3.321 2.109-6.46 3.474-8.722.683-1.133 1.357-1.96 1.982-2.485.618-.52 1.076-.654 1.395-.654Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBodyLungs;
