import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const getXmlString = (width: number, height: number): string => {
  return `
  <svg width="24" height="36" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6694 1.9384C11.8189 1.8525 18.0603 -1.69856 22.1856 1.79957C24.4503 3.72001 24.2583 5.71241 23.4179 7.66356L20.4612 13.8579C19.5967 16.0116 18.9802 16.6764 17.4655 17.6121C16.5664 18.1675 15.5524 17.2082 14.4853 16.1986C13.5609 15.3239 12.5965 14.4115 11.6323 14.4136C10.6522 14.4158 9.67237 15.3297 8.73487 16.204C7.6536 17.2125 6.62872 18.1683 5.72482 17.6121C3.8997 16.4889 3.0993 14.9369 2.26267 12.4462C2.10165 11.9667 1.85662 11.3916 1.58647 10.7574C0.453336 8.09737 -1.12292 4.39708 1.189 2.34424C4.04392 -0.190692 7.59 -0.598771 11.6316 1.91805L11.6694 1.9384ZM9.67507 2.19872C8.27677 1.49603 7.08817 1.27253 6.0981 1.3295C4.8816 1.39944 3.61807 1.91295 2.34682 3.04172C1.39079 3.89059 1.29349 5.32467 1.80892 7.1982C2.0544 8.09046 2.41252 8.99407 2.7732 9.85232C2.85097 10.0375 2.93002 10.2231 3.0084 10.4069C3.28162 11.0482 3.54622 11.6691 3.7194 12.1845C4.4853 14.4647 5.15152 15.6902 6.36 16.5536C6.60945 16.3839 6.92497 16.1114 7.34242 15.7245C7.40745 15.6642 7.47495 15.6012 7.54447 15.5362C7.97212 15.137 8.4786 14.664 8.99527 14.2859C9.54412 13.8843 10.4514 13.3192 11.6278 13.3166C12.8097 13.314 13.7146 13.8882 14.2522 14.287C14.7614 14.6648 15.2608 15.1378 15.6823 15.5371C15.7513 15.6024 15.8181 15.6657 15.8825 15.7263C16.2914 16.1107 16.6012 16.3821 16.8461 16.5519C17.332 16.2306 17.647 15.9624 17.9197 15.6289C18.2716 15.1983 18.5995 14.6012 19.0219 13.5488C19.029 13.5312 19.0367 13.5137 19.045 13.4963L21.994 7.31827C22.3795 6.41888 22.5754 5.5976 22.4731 4.8258C22.3736 4.07401 21.9837 3.30808 21.0496 2.51603C19.5013 1.203 17.599 1.18314 15.8043 1.58988C14.9005 1.79469 14.0893 2.09977 13.4952 2.36064C13.2723 2.45849 13.0844 2.54818 12.9386 2.62091L15.8194 4.17C16.153 4.34947 16.2247 4.69279 15.9793 4.93682C15.7339 5.1809 15.2644 5.23328 14.9308 5.05381L10.8622 2.86593C10.8058 2.83971 10.7514 2.81053 10.6993 2.77833L9.8307 2.31128C9.77002 2.27864 9.71805 2.24063 9.67507 2.19872ZM6.09697 16.7037L6.0999 16.7027C6.09787 16.7034 6.0969 16.7037 6.09697 16.7037Z" fill="black"/>
  </svg>
    `;
};

export default ({ width, height }: any) => (
  <SvgXml xml={getXmlString(width, height)} />
);