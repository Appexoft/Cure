import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgEmotionsConfused = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.5 21a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-2.5.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM30.5 21a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-2.5.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Zm0 2c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Z"
      clipRule="evenodd"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="m21.32 34.514-.044.035a1 1 0 0 1-1.26-1.554l.134-.108c1.184-.96 2.411-1.955 4.274-2.459 1.922-.52 4.409-.494 8.144.323a1 1 0 1 1-.428 1.954c-3.592-.786-5.715-.746-7.193-.346-1.45.392-2.387 1.15-3.627 2.155Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgEmotionsConfused;
