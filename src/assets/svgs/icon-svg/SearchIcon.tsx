import * as React from 'react'
import { SvgXml } from 'react-native-svg'

const getXmlString = (width: number, height: number): string => {
    return `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#B4B6C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.0004 20.9999L16.6504 16.6499" stroke="#B4B6C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
}

export default ({ width, height }: any) => <SvgXml xml={getXmlString(width, height)} />