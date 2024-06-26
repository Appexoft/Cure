import type { SVGProps } from 'react';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgShapesInformationCampaign = (props: SVGProps<SVGSVGElement>) => (
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
      d="M38 24c0 7.732-6.268 14-14 14s-14-6.268-14-14 6.268-14 14-14 14 6.268 14 14Zm2 0c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Zm-8.757 4.243a6 6 0 1 1 0-8.486l1.414-1.414a8 8 0 1 0 0 11.314l-1.414-1.414ZM15 21v10h2V21h-2Zm2.5-2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgShapesInformationCampaign;
