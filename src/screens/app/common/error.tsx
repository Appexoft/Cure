import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { BorderRadius, Color, Margin, Sizes } from '../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../utils/size';
import FONTS from '../../../utils/fonts';
import { fontH5 } from '../../../utils/themeUtils';

interface Props {
  title: string;
  subtitle?: string;
}

const Error = (props: Props) => {
  const { title, subtitle } = props;

  return (
    <View style={styles.contents}>
      <View style={[styles.textContainer]}>
        <Text style={[styles.title, styles.text]}>{title}</Text>
        <Text style={[styles.subtitle, styles.text]}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  illustration: {
    backgroundColor: Color.white,
    width: scaleWidth(Sizes.illustration),
    height: scaleWidth(Sizes.illustration),
    borderRadius: BorderRadius.medium,
  },
  contents: {
    top: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: FONTS.URBANIST.Regular,
    color: Color.error,
    fontSize: fontH5,
  },
  title: {},
  subtitle: {
    marginTop: scaleHeight(Margin.between_entries),
  },
});
export default Error;
