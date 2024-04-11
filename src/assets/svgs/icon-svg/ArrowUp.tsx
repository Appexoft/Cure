import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const getXmlString = (width: number, height: number): string => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M13.5 11.25L9 6.75L4.5 11.25" stroke="#03A9F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
    `;
};

export default ({ width, height }: any) => (
  <SvgXml xml={getXmlString(width, height)} />
);
