import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgPeopleHealthWorker = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 30s-1.497-2.102-2-1.987c-5.404 1.23-11 4.782-11 8.557V42h36v-5.43c0-3.775-5.596-7.327-11-8.557-.503-.115-2 1.987-2 1.987H19Zm6.685 2H17.97l-.598-.84-.01-.013-.04-.055a15.482 15.482 0 0 0-.727-.915c-2.185.603-4.324 1.595-5.942 2.776C8.73 34.355 8 35.667 8 36.57V40h32v-3.43c0-.903-.73-2.215-2.652-3.617-1.618-1.18-3.757-2.173-5.942-2.776l-.075.086a14.075 14.075 0 0 0-.652.828l-.04.056-.01.012v.001l-.598.84h-4.346Z"
      clipRule="evenodd"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M32 38v-6h2v6h-2Z"
      clipRule="evenodd"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M36 36h-6v-2h6v2ZM24 24a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 2c5.523 0 10-4.477 10-10S29.523 6 24 6s-10 4.477-10 10 4.477 10 10 10Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPeopleHealthWorker;
