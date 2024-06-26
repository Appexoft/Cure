import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgTypographyY = (props: SVGProps<SVGSVGElement>) => (
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
      d="M31.695 10.08a3 3 0 0 1 4.61 3.84l-.769-.64.769.64L27 25.087V36a3 3 0 0 1-6 0V25.086l-9.305-11.165a3 3 0 0 1 .384-4.226l.64.769-.64-.769a3 3 0 0 1 4.226.384L24 19.314l7.695-9.235Zm2.945 1.152a1 1 0 0 0-1.408.128l-8.464 10.156a1 1 0 0 1-1.536 0L14.768 11.36a1 1 0 1 0-1.536 1.28l9.536 11.444a1 1 0 0 1 .232.64V36a1 1 0 1 0 2 0V24.724a1 1 0 0 1 .232-.64l9.536-11.444a1 1 0 0 0-.128-1.408Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTypographyY;
