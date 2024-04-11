import * as React from 'react'
import { SvgXml } from 'react-native-svg'

const getXmlString = (width: number, height: number): string => {
    return `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 6L18 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `
}

export default ({ width, height }: any) => <SvgXml xml={getXmlString(width, height)} />