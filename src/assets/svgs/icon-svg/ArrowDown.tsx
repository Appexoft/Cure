import * as React from 'react'
import { SvgXml } from 'react-native-svg'

const getXmlString = (width: number, height: number): string => {
    return `
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L5 5L9 1" stroke="#ABA4AC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `
}

export default ({ width, height }: any) => <SvgXml xml={getXmlString(width, height)} />