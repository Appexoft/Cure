import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgTypographyX = (props: SVGProps<SVGSVGElement>) => (
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
      d="M31.695 10.08a3 3 0 0 1 4.61 3.84L27.905 24l8.4 10.08a3 3 0 1 1-4.61 3.84L24 28.687l-7.695 9.235a3 3 0 1 1-4.61-3.841l8.4-10.08-8.4-10.08a3 3 0 0 1 4.61-3.84L24 19.313l7.695-9.235Zm2.945 1.152a1 1 0 0 0-1.408.128l-.768-.64.768.64-8.464 10.156a1 1 0 0 1-1.536 0L14.768 11.36a1 1 0 1 0-1.536 1.28l8.933 10.72a1 1 0 0 1 0 1.28l-8.933 10.72a1 1 0 1 0 1.536 1.28l8.464-10.156a1 1 0 0 1 1.536 0l8.464 10.156a1 1 0 0 0 1.536-1.28l-8.933-10.72a1 1 0 0 1 0-1.28l8.933-10.72a1 1 0 0 0-.128-1.408Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTypographyX;
