import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthScreen } from '../../../../../../utils/dimensions';
import FONTS from '../../../../../../utils/fonts/index';
import { Color } from '../../../../../../utils/GlobalStyles';
import { scaleHeight } from '../../../../../../utils/size';

interface Props {
  Svg?: any;
  description?: string;
  description1?: string;
}

const WalkThroughScreenItem = (props: Props) => {
  const { Svg, description, description1 } = props;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.svg}>{Svg}</View>
      </View>
      <View style={styles.bottomContent}>
        <Text style={styles.txtTitle}>{description1}</Text>
        <Text style={styles.txtDescription}>{description}</Text>
      </View>
    </View>
  );
};

export default WalkThroughScreenItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  svg: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    color: Color.main,
    textAlign: 'center',
    marginTop: scaleHeight(24),
    lineHeight: scaleHeight(32),
  },
  txtDescription: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(24),
    color: Color.semiBlack,
    textAlign: 'center',
    marginTop: scaleHeight(14),
  },
  content: {
    alignItems: 'center',
    height: '50%',
    width: widthScreen,
  },
  bottomContent: {
    marginTop: scaleHeight(52),
  },
});
