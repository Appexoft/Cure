import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgTypographyZ = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 9h20a3 3 0 0 1 2.717 1.727l-.906.425.906-.425a3 3 0 0 1-.412 3.194L20.405 33H34a3 3 0 0 1 0 6H14a3 3 0 0 1-2.717-1.727l.903-.423-.903.422a3 3 0 0 1 .412-3.192L27.595 15H14a3 3 0 0 1 0-6Zm20 2H14a1 1 0 0 0 0 2h15.73a1 1 0 0 1 .768 1.64L13.232 35.36A1 1 0 0 0 14 37h20a1 1 0 1 0 0-2H18.27a1 1 0 0 1-.768-1.64l17.266-20.72A1 1 0 0 0 34 11Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTypographyZ;
