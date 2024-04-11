import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgConditionsTb = (props: SVGProps<SVGSVGElement>) => (
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
      d="M35 30.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M23 20.5V6h2v14.5c0 1.398.564 1.942 1.004 2.199.049.028.098.054.148.078l-.004-.377c-.038-3.528-.112-10.4 5.327-10.4 4.126 0 7.599 7.974 9.335 15.542.11.263.175.55.188.849 1.232 5.783 1.415 11.14.057 12.27-3.194 2.653-9.58 1.06-12.773-2.124-2.578-2.57-2.355-8.578-2.195-12.891v-.002c.01-.262.02-.518.028-.767a4.272 4.272 0 0 1-1.119-.45 3.813 3.813 0 0 1-.996-.835c-.297.352-.64.626-.996.834-.4.234-.794.37-1.12.451l.029.769c.16 4.313.383 10.32-2.195 12.891-3.193 3.185-9.58 4.777-12.773 2.123C3.752 38.007 9.075 12 16.525 12c5.439 0 5.365 6.872 5.327 10.4v.002l-.004.375c.05-.024.099-.05.148-.078.44-.257 1.004-.801 1.004-2.199Zm15.327 5.36.038.144a2.5 2.5 0 1 0 1.065 4.817c.27 1.566.449 3.05.526 4.36.079 1.332.049 2.413-.068 3.188a3.71 3.71 0 0 1-.206.828c-.96.73-2.598 1.022-4.633.628-2.058-.4-4.076-1.43-5.355-2.704-.443-.442-.84-1.172-1.137-2.261-.293-1.076-.45-2.361-.517-3.761-.066-1.393-.04-2.833.004-4.208.012-.377.027-.754.04-1.126v-.003c.012-.314.024-.625.034-.927A3.001 3.001 0 0 0 34 24a3 3 0 0 0-5.847-.95c0-.229-.002-.47-.005-.719-.015-1.648-.034-3.691.411-5.466.254-1.014.616-1.732 1.05-2.178.375-.386.912-.687 1.866-.687.319 0 .777.134 1.395.654.412.346.846.824 1.289 1.434A2.503 2.503 0 0 0 31 18.5a2.5 2.5 0 0 0 4.917.642c.927 1.962 1.748 4.292 2.41 6.719Zm.666 2.723a52.632 52.632 0 0 0-.08-.366.5.5 0 1 0 .08.366ZM16.525 14c.954 0 1.49.3 1.866.687.434.446.796 1.164 1.05 2.178.445 1.775.426 3.817.41 5.465-.002.285-.004.558-.004.816 0 .76.033 1.67.069 2.616l.04 1.129c.044 1.375.07 2.815.004 4.208-.067 1.4-.224 2.685-.517 3.76-.297 1.09-.694 1.82-1.137 2.262-1.279 1.275-3.297 2.304-5.355 2.704-2.035.394-3.673.102-4.633-.628a3.709 3.709 0 0 1-.206-.829c-.117-.774-.147-1.855-.068-3.187.157-2.65.727-6.012 1.63-9.32.905-3.321 2.109-6.46 3.474-8.722.683-1.133 1.357-1.96 1.982-2.485.618-.52 1.076-.654 1.395-.654ZM33.5 19a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM32 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgConditionsTb;
