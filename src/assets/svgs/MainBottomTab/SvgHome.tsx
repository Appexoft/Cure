import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = ({ color, ...props }: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M22.956 12.783c-.26 0-.521-.105-.73-.287L12 2.504 1.774 12.496a1.063 1.063 0 0 1-1.487-.026 1.063 1.063 0 0 1 .026-1.487L11.27.287a1.056 1.056 0 0 1 1.46 0l10.957 10.696c.417.391.417 1.07.026 1.487a1.09 1.09 0 0 1-.757.313Zm-2.295 10.174v-10.2c0-.574-.47-1.044-1.044-1.044-.573 0-1.043.47-1.043 1.044v9.156h-3.26v-5.582c0-.757-.627-1.383-1.384-1.383h-3.86c-.757 0-1.383.626-1.383 1.383v5.582h-3.26v-9.156c0-.574-.47-1.044-1.044-1.044-.574 0-1.044.47-1.044 1.044v10.2c0 .573.47 1.043 1.044 1.043H9.73c.574 0 1.044-.47 1.044-1.043v-5.922h2.478v5.922c0 .573.47 1.043 1.044 1.043h5.348c.573 0 1.017-.47 1.017-1.043Z"
      fill={color}
    />
  </Svg>
);

export const SvgHome = React.memo(SvgComponent);
