import * as React from 'react'
import { SvgXml } from 'react-native-svg'

const getXmlString = (width: number, height: number): string => {
    return `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="#A6A8B6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="15" cy="12" r="3" fill="#E8505B"/>
    </svg>
  `
}

export default ({ width, height }: any) => <SvgXml xml={getXmlString(width, height)} />