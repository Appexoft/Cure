import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgDevicesBloodPressure = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <Path
      fill="#333"
      d="M8 19.035c0-2.65.885-5.189 2.345-7.047C11.8 10.136 13.787 9 16.03 9c3.103 0 5.51 2.02 7.071 5.202L24 16.03l.898-1.828C26.459 11.02 28.866 9 31.968 9c2.245 0 4.232 1.136 5.688 2.988C39.116 13.846 40 16.385 40 19.035c0 .394-.02.786-.056 1.174a10.56 10.56 0 0 1 1.76 1.738c.192-.945.296-1.916.296-2.912 0-3.075-1.021-6.054-2.772-8.282C37.473 8.518 34.944 7 31.968 7 28.466 7 25.802 8.963 24 11.734 22.2 8.964 19.535 7 16.031 7c-2.975 0-5.503 1.518-7.259 3.752C7.022 12.98 6 15.96 6 19.035c0 6.84 4.535 12.336 8.85 16.034a45.822 45.822 0 0 0 7.948 5.436 28.259 28.259 0 0 0 .71.368l.042.02.011.005.005.003.448.215.444-.227.003-.002.011-.005.04-.022.152-.08c.13-.07.319-.172.558-.307.477-.27 1.156-.666 1.969-1.18a51.18 51.18 0 0 0 1.898-1.261A10.5 10.5 0 0 1 27.2 36.9c-.38.254-.74.488-1.077.701a43.846 43.846 0 0 1-2.135 1.27 40.572 40.572 0 0 1-2.124-1.205 43.803 43.803 0 0 1-5.712-4.116C11.965 29.962 8 24.975 8 19.034Z"
    />
    <Path
      fill="#333"
      d="M34 31a2 2 0 1 0-.676-3.883l-2.299-2.299-1.414 1.414 2.42 2.42A2 2 0 0 0 34 31Z"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M33.5 37a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm0-2a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgDevicesBloodPressure;
