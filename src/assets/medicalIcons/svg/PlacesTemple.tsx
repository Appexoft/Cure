import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgPlacesTemple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 10.762c0 1.729.703 2.554 1.428 2.945.773.417 1.572.34 1.572.34v4s-1.8 3.939-3.882 4.595c-.693.218-1.418.072-2.118-.705 0 1.662.8 2.436 1.544 2.797.649.314 1.256.314 1.256.314H15v4s-1.404 4.096-3.676 4.629c-.698.164-1.478-.009-2.324-.74 0 1.66 1.025 2.434 1.982 2.795l.018.007v8.309h26v-8.309l.017-.006c.956-.36 1.983-1.135 1.983-2.796-.828.715-1.616.896-2.339.75-1.678-.338-3.005-2.436-3.661-3.692v-4.947h1.2s.607 0 1.256-.314C36.2 24.374 37 23.599 37 21.937c-.684.76-1.414.917-2.125.719-1.65-.46-3.203-2.824-3.875-3.976v-4.632s.799.076 1.572-.341C33.297 13.316 34 12.49 34 10.762c-.683.732-1.423 1.018-2.183.99-2.472-.093-5.14-3.518-6.632-5.77C24.45 4.872 24 4.048 24 4.048s-.45.824-1.185 1.934c-1.492 2.252-4.16 5.677-6.632 5.77-.76.028-1.5-.258-2.183-.99Zm15.522 9.342a11.012 11.012 0 0 1-.034-.056H18.214l-.017.03c-.375.662-.932 1.558-1.62 2.372a9.951 9.951 0 0 1-.546.598h15.794c-.193-.184-.37-.368-.53-.544-.733-.806-1.337-1.696-1.747-2.358l-.014-.023-.012-.019ZM26 16.048a1 1 0 0 1 1 1v1h2v-4H19v4h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 0 1 1-1Zm2 11a1 1 0 0 1 1 1v1h2v-4H17v4h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 0 1 1-1Zm-.215-15a15.548 15.548 0 0 1-1.77-1.695A26.62 26.62 0 0 1 24 7.795a26.62 26.62 0 0 1-2.016 2.558 15.548 15.548 0 0 1-1.769 1.695h7.57Zm5.12 21.41c.163.192.346.392.548.59h-19.09c.215-.225.405-.452.57-.667.616-.799 1.083-1.669 1.397-2.333h14.964c.36.674.904 1.583 1.61 2.41ZM21 38.048a2 2 0 0 0-2 2v2h-2v-6h14v6h-2v-2a2 2 0 0 0-2-2h-6Zm-8 4v-6h2v6h-2Zm20 0v-6h2v6h-2Zm-6-2v2h-6v-2h6Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPlacesTemple;