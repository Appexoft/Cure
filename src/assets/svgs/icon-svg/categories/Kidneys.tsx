import * as React from 'react'
import { SvgXml } from 'react-native-svg'

const getXmlString = (width: number, height: number): string => {
    return `
        <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.57827 21.78C1.43009 19.2153 4.64579 10.5585 10.302 9.12818C12.6485 8.53483 15.2376 10.5033 15.221 11.7255C15.2138 12.254 14.8484 12.7693 14.4677 13.3061C13.9679 14.0109 13.4417 14.7529 13.6652 15.6108C14.0588 17.122 14.4998 19.6719 13.3637 20.8823C12.2275 22.0927 11.0849 22.2542 9.57827 21.78ZM10.1612 20.7486C10.7482 20.9333 11.0366 20.9212 11.1947 20.8872C11.3571 20.8523 11.6741 20.7312 12.1351 20.2401C12.4146 19.9422 12.605 19.3137 12.5882 18.3742C12.5725 17.4921 12.3819 16.5507 12.1928 15.8243C11.8895 14.66 12.5123 13.6873 12.9568 13.0458C13.0333 12.9352 13.1032 12.8368 13.1675 12.746C13.316 12.5368 13.4353 12.3685 13.5407 12.1881C13.6813 11.9477 13.7198 11.8053 13.7211 11.7142C13.7215 11.6852 13.6952 11.5371 13.5007 11.2934C13.318 11.0646 13.0406 10.8209 12.7001 10.6138C11.9777 10.1745 11.2786 10.0631 10.7834 10.1884C8.67594 10.7213 6.69464 12.7735 6.24942 15.1817C5.82228 17.4921 6.88026 19.7159 10.1612 20.7486Z" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9278 9.12818C31.5841 10.5585 34.7998 19.2153 26.6516 21.78C25.1449 22.2542 24.0023 22.0927 22.8662 20.8823C21.7301 19.6719 22.1711 17.122 22.5647 15.6108C22.7881 14.7529 22.262 14.0109 21.7621 13.3061C21.3814 12.7693 21.016 12.254 21.0089 11.7255C20.9923 10.5033 23.5814 8.53483 25.9278 9.12818ZM25.0351 20.8872C25.1933 20.9212 25.4817 20.9333 26.0687 20.7486C29.3496 19.7159 30.4076 17.4921 29.9804 15.1817C29.5352 12.7735 27.554 10.7213 25.4465 10.1884C24.9512 10.0631 24.2522 10.1745 23.5298 10.6138C23.1892 10.8209 22.9118 11.0646 22.7292 11.2934C22.5347 11.5371 22.5083 11.6852 22.5088 11.7142C22.51 11.8053 22.5486 11.9477 22.6892 12.1881C22.7946 12.3685 22.9139 12.5368 23.0623 12.746C23.1267 12.8368 23.1965 12.9352 23.2731 13.0458C23.7175 13.6873 24.3404 14.66 24.0371 15.8243C23.8479 16.5507 23.6574 17.4921 23.6417 18.3742C23.6249 19.3137 23.8153 19.9422 24.0948 20.2401C24.5558 20.7312 24.8728 20.8523 25.0351 20.8872Z" fill="#333333"/>
        <path d="M21.6302 17.3171C21.6816 17.8755 21.6825 17.8754 21.6825 17.8754L21.6834 17.8754L21.6851 17.8753L21.688 17.8752L21.6921 17.8749L21.6943 17.8747C21.6943 17.8747 21.6866 17.8754 21.6759 17.8767C21.6544 17.8793 21.6167 17.8846 21.5684 17.8949C21.47 17.9156 21.3404 17.9538 21.2135 18.0212C20.9963 18.1367 20.6768 18.3931 20.6768 19.0402V27.1369C20.6768 27.1369 20.6768 27.1371 19.9268 27.1371C19.1768 27.1371 19.1768 27.1367 19.1768 27.1367V19.0402C19.1768 18.0516 19.709 17.4466 20.3434 17.1094C20.6423 16.9505 20.9386 16.8645 21.1596 16.8178C21.2711 16.7943 21.3665 16.7801 21.438 16.7714C21.4739 16.7671 21.5042 16.7642 21.5278 16.7623C21.5396 16.7613 21.5499 16.7605 21.5584 16.76L21.5699 16.7592L21.5747 16.759L21.5768 16.7588L21.5777 16.7588C21.5777 16.7588 21.5787 16.7587 21.6302 17.3171Z" fill="#333333"/>
        <path d="M14.5985 17.3171C14.5471 17.8755 14.5461 17.8754 14.5461 17.8754L14.5453 17.8754L14.5436 17.8753L14.5407 17.8752L14.5365 17.8749L14.5342 17.8747C14.5342 17.8747 14.5421 17.8754 14.5527 17.8767C14.5743 17.8793 14.612 17.8846 14.6603 17.8949C14.7586 17.9156 14.8882 17.9538 15.0152 18.0212C15.2324 18.1367 15.5519 18.3931 15.5519 19.0402V27.1369C15.5519 27.1369 15.5519 27.1371 16.3019 27.1371C17.0519 27.1371 17.0519 27.1367 17.0519 27.1367V19.0402C17.0519 18.0516 16.5197 17.4466 15.8852 17.1094C15.5864 16.9505 15.2901 16.8645 15.069 16.8178C14.9576 16.7943 14.8622 16.7801 14.7907 16.7714C14.7548 16.7671 14.7245 16.7642 14.7008 16.7623C14.689 16.7613 14.6788 16.7605 14.6702 16.76L14.6588 16.7592L14.654 16.759L14.6519 16.7588L14.6509 16.7588C14.6509 16.7588 14.6499 16.7587 14.5985 17.3171Z" fill="#333333"/>
        </svg>
    `
}

export default ({ width, height }: any) => <SvgXml xml={getXmlString(width, height)} />