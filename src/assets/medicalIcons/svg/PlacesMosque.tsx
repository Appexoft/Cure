import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgPlacesMosque = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 6.048s.485.85 1.122 2.138c.877 1.77 2.043 4.369 2.635 6.721.098.389.18.77.243 1.14v15h2V25.7c-.64-1.191-1-2.608-1-4.224 0-3.585 3.175-6.189 5.836-8.37.647-.53 1.264-1.036 1.797-1.525.127-.117.25-.232.367-.347V8.048h2v3.186c.117.115.24.23.367.347.533.489 1.15.995 1.797 1.525 2.66 2.181 5.836 4.785 5.836 8.37 0 1.616-.36 3.033-1 4.224v5.348h2v-15c.054-.364.131-.745.228-1.137.56-2.273 1.755-4.92 2.652-6.726.635-1.28 1.12-2.137 1.12-2.137s.485.85 1.122 2.138c.877 1.77 2.043 4.369 2.635 6.721.098.389.18.77.243 1.14v26H6v-26c.054-.363.131-.744.228-1.136.56-2.273 1.755-4.92 2.652-6.726C9.515 6.905 10 6.048 10 6.048Zm18 34v-.528a2 2 0 0 0-1.106-1.789L24 36.284l-2.894 1.447A2 2 0 0 0 20 39.52v.528h8Zm2 0h4v-7H14v7h4v-.528a4 4 0 0 1 2.211-3.578L24 34.048l3.789 1.894A4 4 0 0 1 30 39.52v.528Zm6-23.532c.808-.195 1.404-.293 2-.293.596 0 1.192.098 2 .293v23.532h-4V16.516Zm-28 0v23.532h4V16.516c-.808-.195-1.404-.293-2-.293-.596 0-1.192.098-2 .293Zm.456-2.142c.396-1.26.962-2.633 1.543-3.896.563 1.232 1.122 2.597 1.528 3.893A8.591 8.591 0 0 0 10 14.223c-.508 0-1.01.054-1.544.15Zm9.475 10.674c-.582-.946-.931-2.132-.931-3.572 0-1.161.505-2.272 1.466-3.442.98-1.193 2.278-2.266 3.638-3.381l.027-.023c.633-.519 1.29-1.057 1.869-1.589.579.532 1.236 1.07 1.869 1.59l.027.022c1.36 1.115 2.659 2.188 3.638 3.38.96 1.17 1.466 2.282 1.466 3.443 0 1.44-.35 2.626-.93 3.572H17.93Zm.069 2v4h1v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1h1v-4H18Zm20-16.57c-.582 1.263-1.148 2.636-1.544 3.896A8.617 8.617 0 0 1 38 14.223c.502 0 1 .053 1.527.147-.406-1.295-.965-2.66-1.528-3.892Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPlacesMosque;
