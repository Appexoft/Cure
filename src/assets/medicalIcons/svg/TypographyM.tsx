import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgTypographyM = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 36V12a3 3 0 0 1 5.305-1.92L24 19.313l7.695-9.235A3 3 0 0 1 37 12v24a3 3 0 1 1-6 0V20.286l-4.695 5.634a3 3 0 0 1-4.61 0L17 20.287V36a3 3 0 1 1-6 0Zm2-24v24a1 1 0 1 0 2 0V17.524a1 1 0 0 1 1.768-.64l6.464 7.756a1 1 0 0 0 1.536 0l6.464-7.756a1 1 0 0 1 1.768.64V36a1 1 0 1 0 2 0V12a1 1 0 0 0-1.768-.64l-8.464 10.156a1 1 0 0 1-1.536 0L14.768 11.36A1 1 0 0 0 13 12Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTypographyM;
