import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const getXmlString = (width: number, height: number): string => {
  return `<svg width="19" height="2" viewBox="0 0 19 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.75 1H18.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;
};

export default ({ width, height }: any) => (
  <SvgXml xml={getXmlString(width, height)} />
);
