import React, { memo } from 'react';
import FONTS from '../utils/fonts';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewProps,
} from 'react-native';
import { Color } from '../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../utils/size';
import { widthScreen } from '../utils/dimensions';
import { Sizes } from '../utils/GlobalStyles';

interface TitleProps extends ViewProps {
  title?: string;
  textStyle?: TextStyle;
}

/**
 * TODO - consider patient, doctor, org styles?
 */
const HeaderTitle: React.FC<TitleProps> = memo(
  ({ title, children, textStyle }) => {
    return (
      <>
        <StatusBar backgroundColor={Color.third} />
        {children ? (
          <View>{children}</View>
        ) : (
          <Text style={[styles.title, textStyle]}>{title}</Text>
        )}
      </>
    );
  },
);

export default HeaderTitle;

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: 'bold',
    fontSize: scaleHeight(Sizes.text_header_title),
    color: Color.accent,
    alignSelf: 'center',
    textAlign: 'center',
    width: widthScreen / 2.5,
    textTransform: 'capitalize',
  },
});
