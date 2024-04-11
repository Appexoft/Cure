import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { Color } from '../../../utils/GlobalStyles';

interface Props {
  tabActive?: boolean;
  tabChose?: boolean;
}

function SvgComponent(props: SvgProps & Props) {
  const { tabActive, tabChose } = props;
  return (
    <Svg width={6} height={40} viewBox="0 0 6 40" fill="none" {...props}>
      <Path
        d="M6 6a6 6 0 00-6-6v40a6 6 0 006-6V6z"
        fill={tabChose === tabActive ? Color.third : Color.main}
      />
    </Svg>
  );
}

const SvgHoverLine = React.memo(SvgComponent);
export default SvgHoverLine;
