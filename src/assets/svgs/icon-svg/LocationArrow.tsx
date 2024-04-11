import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const getXmlString = (width: number, height: number): string => {
  return `<svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="gps">
  <path id="Path" d="M5.08389 18.2926L0.417228 1.95929C0.183894 1.02595 1.00056 0.209285 1.93389 0.442618L18.2672 5.10929C19.3172 5.45929 19.4339 6.85929 18.3839 7.32595L10.6839 10.5926L7.41723 18.2926C6.83389 19.4593 5.43389 19.3426 5.08389 18.2926Z" fill="#03A9F4"/>
  </g>
  </svg>
    `;
};

export default ({ width, height }: any) => (
  <SvgXml xml={getXmlString(width, height)} />
);
