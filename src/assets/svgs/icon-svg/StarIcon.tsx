import * as React from 'react'
import { SvgXml } from 'react-native-svg'

const getXmlString = (width: number, height: number): string => {
    return `
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.75 6.75012L8 1.72412L6.25 6.75012H1L5.27875 10.0996L3.597 15.2761L8 12.0771L12.403 15.2761L10.7212 10.0996L15 6.75012H9.75Z" fill="#FFA26B"/>
        </svg>
    `
}

export default ({ width, height }: any) => <SvgXml xml={getXmlString(width, height)} />