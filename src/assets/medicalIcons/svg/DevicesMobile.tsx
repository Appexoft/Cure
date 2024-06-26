import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgDevicesMobile = (props: SVGProps<SVGSVGElement>) => (
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
      d="m31.963 6.339-16 .013a1 1 0 0 0-.999 1l.028 34a1 1 0 0 0 1.001 1l16-.013a1 1 0 0 0 1-1.001l-.029-34a1 1 0 0 0-1-1ZM15.962 4.352a3 3 0 0 0-2.998 3.002l.028 34a3 3 0 0 0 3.003 2.998l16-.013a3 3 0 0 0 2.997-3.003l-.028-34a3 3 0 0 0-3.002-2.997l-16 .013Z"
      clipRule="evenodd"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M16.964 7.351a1 1 0 0 0-.999 1l.022 27a1 1 0 0 0 1.001 1l14-.011a1 1 0 0 0 1-1.001l-.023-27a1 1 0 0 0-1-1l-14 .012Zm6.228 20.189.79.656.788-.652.016-.014c1.58-1.315 2.878-2.396 3.785-3.413s1.406-1.952 1.405-2.97c-.002-1.656-1.423-2.954-3.233-2.953-1.025 0-2.01.439-2.652 1.13l-.117.125-.117-.126c-.643-.69-1.629-1.125-2.653-1.125-1.81.002-3.23 1.303-3.228 2.959 0 1.018.5 1.952 1.41 2.967.911 1.018 2.217 2.1 3.806 3.416ZM23.992 41.345a2 2 0 1 0-.003-4 2 2 0 0 0 .003 4Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgDevicesMobile;
