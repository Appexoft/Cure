import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const getXmlString = (width: number, height: number): string => {
  return `
  <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2245 2.08346C10.3491 2.01149 15.5502 -0.963714 18.988 1.96715C20.8752 3.57615 20.7152 5.24545 20.0149 6.8802L17.551 12.07C16.8306 13.8745 16.3169 14.4315 15.0546 15.2154C14.3054 15.6807 13.4604 14.877 12.5711 14.0311C11.8007 13.2983 10.9971 12.5338 10.1936 12.5356C9.37687 12.5375 8.56031 13.3031 7.77906 14.0357C6.878 14.8806 6.02394 15.6814 5.27069 15.2154C3.74975 14.2744 3.08275 12.974 2.38556 10.8873C2.25137 10.4855 2.04719 10.0037 1.82206 9.47229C0.87778 7.24366 -0.435764 4.14343 1.49084 2.42349C3.86994 0.299632 6.825 -0.0422703 10.193 2.06641L10.2245 2.08346ZM8.56256 2.30157C7.39731 1.71283 6.40681 1.52557 5.58175 1.5733C4.568 1.6319 3.51506 2.06214 2.45569 3.00786C1.65899 3.71908 1.5779 4.92059 2.00744 6.49031C2.212 7.23787 2.51044 7.99495 2.811 8.71402C2.87581 8.86917 2.94169 9.02464 3.007 9.17868C3.23469 9.71595 3.45519 10.2362 3.5995 10.668C4.23775 12.5784 4.79294 13.6052 5.8 14.3286C6.00787 14.1864 6.27081 13.9581 6.61869 13.634C6.67287 13.5834 6.72912 13.5306 6.78706 13.4762C7.14344 13.1417 7.5655 12.7454 7.99606 12.4286C8.45344 12.0921 9.2095 11.6187 10.1899 11.6165C11.1747 11.6143 11.9288 12.0954 12.3769 12.4296C12.8012 12.7461 13.2174 13.1424 13.5686 13.4769C13.6261 13.5316 13.6817 13.5847 13.7354 13.6354C14.0762 13.9575 14.3343 14.1849 14.5384 14.3272C14.9433 14.058 15.2059 13.8333 15.4331 13.5538C15.7264 13.1931 15.9996 12.6928 16.3516 11.8111C16.3575 11.7963 16.3639 11.7816 16.3709 11.7671L18.8283 6.5909C19.1496 5.83737 19.3128 5.14927 19.2276 4.50262C19.1447 3.87275 18.8197 3.23102 18.0414 2.56742C16.7511 1.46732 15.1658 1.45068 13.6702 1.79146C12.9171 1.96306 12.2411 2.21866 11.746 2.43723C11.5602 2.51921 11.4037 2.59435 11.2822 2.65529L13.6828 3.95317C13.9609 4.10354 14.0206 4.39118 13.8161 4.59564C13.6116 4.80014 13.2204 4.84403 12.9423 4.69366L9.55181 2.86057C9.50487 2.83861 9.4595 2.81416 9.41606 2.78718L8.69225 2.39587C8.64169 2.36852 8.59837 2.33668 8.56256 2.30157ZM5.58081 14.4544L5.58325 14.4535C5.58156 14.4541 5.58075 14.4544 5.58081 14.4544Z" fill="#333333"/>
  </svg>
    `;
};

export default ({ width, height }: any) => (
  <SvgXml xml={getXmlString(width, height)} />
);
