import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { Color } from '../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../utils/size';

function SvgComponent({ width, height, ...props }: SvgProps) {
  return (
    <Svg
      width={width ? width : scaleWidth(15)}
      height={height ? height : scaleHeight(10)}
      viewBox="0 0 490.677 490.677"
      fill={Color.secondRed}
      {...props}>
      <Path d="M245.339 448.01h-.427c-11.733.107-21.227 9.707-21.12 21.547.107 11.733 9.707 21.227 21.547 21.12h.427c11.733-.107 21.227-9.707 21.12-21.547-.107-11.734-9.707-21.227-21.547-21.12zM246.939 351.903c5.227-.747 9.067-5.547 9.067-10.88V10.996c0-5.333-3.84-10.133-9.067-10.88-6.613-.96-12.267 4.16-12.267 10.56v330.667c0 6.4 5.653 11.52 12.267 10.56z" />
    </Svg>
  );
}

const SvgExclamationMark = React.memo(SvgComponent);
export default SvgExclamationMark;
