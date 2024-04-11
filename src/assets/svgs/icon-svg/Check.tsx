import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const getXmlString = (width: number, height: number): string => {
  return `
  <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.5 1L4 6.5L1.5 4" fill="white"/>
  <path d="M9.5 1L4 6.5L1.5 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
    `;
};

export default ({ width, height }: any) => (
  <SvgXml xml={getXmlString(width, height)} />
);
