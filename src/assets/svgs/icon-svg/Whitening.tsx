import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const getXmlString = (width: number, height: number): string => {
  return `
  <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.75 11.2687C21.75 13.8446 18.9517 15.9329 15.5 15.9329C12.0482 15.9329 9.25 13.8446 9.25 11.2687C9.25 8.69274 12.0482 6.60449 15.5 6.60449C18.9517 6.60449 21.75 8.69274 21.75 11.2687ZM20.5 11.2687C20.5 13.3294 18.2614 15 15.5 15C12.7386 15 10.5 13.3294 10.5 11.2687C10.5 9.2079 12.7386 7.53733 15.5 7.53733C18.2614 7.53733 20.5 9.2079 20.5 11.2687Z" fill="#333333"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6963 17.2646C11.6986 17.268 11.7009 17.2714 11.7032 17.2748C11.7192 17.2986 11.7347 17.3216 11.75 17.3432H14.2899C14.8567 17.3431 15.1397 17.3431 15.4231 17.3432H15.4386C15.7159 17.3432 15.9988 17.3433 16.5532 17.3432H19.0933C19.2359 17.141 19.5608 16.8182 19.875 16.8716C20.581 16.9916 21.2922 17.1589 21.9757 17.3645L21.9965 17.3568L22.0033 17.367L22.0079 17.3743C24.5801 18.1537 26.75 19.4759 26.75 20.8629V23.3956H4.25V20.8629C4.25 19.102 7.74738 17.4457 11.125 16.8716C11.4008 16.8247 11.5641 17.0677 11.6963 17.2646ZM20.9402 18.0703C20.6718 18.0003 20.3999 17.9369 20.1268 17.8806L19.8479 18.276H16.5532C15.9866 18.2761 15.7071 18.2761 15.431 18.276C15.1484 18.276 14.8695 18.2759 14.2902 18.276H10.9954L10.7367 17.9093C10.6615 17.9255 10.5864 17.9423 10.5114 17.9595C10.5072 17.9902 10.504 18.0249 10.5021 18.0638C10.4939 18.2247 10.5101 18.4155 10.5456 18.6101C10.581 18.804 10.6337 18.9901 10.6923 19.1401C10.7016 19.1639 10.7109 19.1863 10.7201 19.2073C11.6519 19.2887 12.375 19.8799 12.375 20.5971C12.375 21.3699 11.5356 21.9963 10.5 21.9963C9.46444 21.9963 8.625 21.3699 8.625 20.5971C8.625 20.0994 8.97312 19.6625 9.4975 19.4144L9.49231 19.4013C9.41425 19.2015 9.34975 18.9697 9.30706 18.7361C9.28113 18.5944 9.2625 18.4476 9.25444 18.3032C8.48156 18.5494 7.76156 18.847 7.15769 19.1758C5.95607 19.83 5.5 20.4417 5.5 20.8629V22.4627H25.5V20.8629C25.5 20.4417 25.0439 19.83 23.8423 19.1758C23.3521 18.9089 22.7854 18.6626 22.1761 18.4476C22.1663 18.5445 22.1522 18.6414 22.1349 18.7361C22.1061 18.8939 22.0673 19.0509 22.021 19.1978H22.375C22.6117 19.1978 22.8281 19.2976 22.934 19.4556L23.559 20.3885C23.6024 20.4532 23.625 20.5247 23.625 20.5971V21.5299C23.625 21.7875 23.3452 21.9963 23 21.9963H21.75V21.0635H22.375V20.7072L21.9888 20.1306H20.2612L19.875 20.7072V21.0635H20.5V21.9963H19.25C18.9048 21.9963 18.625 21.7875 18.625 21.5299V20.5971C18.625 20.5247 18.6476 20.4532 18.691 20.3885L19.316 19.4556C19.4219 19.2976 19.6383 19.1978 19.875 19.1978H20.726C20.7338 19.1796 20.7417 19.1604 20.7496 19.1401C20.8082 18.9901 20.8609 18.804 20.8964 18.6101C20.9314 18.4181 20.9476 18.2298 20.9402 18.0703ZM11.125 20.5971C11.125 20.8649 10.8365 21.0703 10.5 21.0703C10.1635 21.0703 9.875 20.8649 9.875 20.5971C9.875 20.3292 10.1635 20.1238 10.5 20.1238C10.8365 20.1238 11.125 20.3292 11.125 20.5971Z" fill="#333333"/>
  </svg>
    `;
};

export default ({ width, height }: any) => (
  <SvgXml xml={getXmlString(width, height)} />
);