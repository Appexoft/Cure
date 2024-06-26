import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={36} height={36} viewBox="0 0 36 36" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.023 6.687c-3.359 3.359-3.398 8.863-.039 12.222l10.444 10.444c3.358 3.358 8.864 3.32 12.222-.039 3.36-3.36 3.399-8.864.04-12.223L19.245 6.647c-3.36-3.358-8.864-3.32-12.223.04zM8.99 17.339c-2.768-2.767-2.185-5.748-1.493-6.936a1.236 1.236 0 011.686-.446c.583.34.802 1.065.472 1.65-.11.201-.917 1.904 1.123 3.944l3.264 3.264c.48.48.457 1.283-.024 1.764-.48.48-1.284.505-1.764.024L8.99 17.34zm18.92 10.234c2.399-2.399 2.39-6.294-.01-8.693h.001l-3.661-3.662a1.762 1.762 0 00-2.494 0l-6.192 6.193a1.762 1.762 0 000 2.493l3.661 3.66c2.4 2.4 6.296 2.408 8.695.01z"
        fill="#6979F8"
      />
    </Svg>
  );
}

const SvgDrug = React.memo(SvgComponent);
export default SvgDrug;
