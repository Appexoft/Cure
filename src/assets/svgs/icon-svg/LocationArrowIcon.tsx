import * as React from 'react'
import { SvgXml } from 'react-native-svg'

const getXmlString = (width: number, height: number): string => {
    return `<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.853691 3.04146L9.02036 0.708126C9.48702 0.591459 9.89536 0.999792 9.77869 1.46646L7.44536 9.63313C7.27036 10.1581 6.57036 10.2165 6.33702 9.69146L4.70369 5.84146L0.853691 4.20813C0.270358 3.91646 0.328691 3.21646 0.853691 3.04146Z" fill="white"/>
        </svg>
    `
}

export default ({ width, height }: any) => <SvgXml xml={getXmlString(width, height)} />