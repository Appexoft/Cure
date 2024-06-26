import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../utils/size';
import { Color } from '../utils/GlobalStyles';
import FONTS from '../utils/fonts';

interface Props {
  img: ImageSourcePropType;
  title?: string;
  date?: string;
  onPress?: () => void;
}

const TrendListItem = (props: Props) => {
  const { img, title, date, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={styles.container}>
      <Image source={img} style={styles.img} />
      <Text style={styles.txtTitle}>{title}</Text>
      <Text style={styles.txtHealththy}>Healththy</Text>
      <Text style={styles.txtDate}>{date}</Text>
    </TouchableOpacity>
  );
};

export default TrendListItem;

const styles = ScaledSheet.create({
  container: {
    paddingVertical: scaleHeight(16),
    paddingLeft: scaleWidth(105),
    paddingRight: scaleWidth(16),
    borderRadius: scaleWidth(8),
    backgroundColor: Color.main,
    marginHorizontal: scaleWidth(24),
    marginBottom: scaleHeight(16),
    width: scaleWidth(327),
    height: scaleHeight(104),
  },
  img: {
    width: scaleWidth(72),
    height: scaleWidth(72),
    borderRadius: scaleWidth(8),
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowRadius: scaleHeight(25),
    shadowOffset: { width: 0, height: 2 },
    marginRight: scaleWidth(17),
    position: 'absolute',
    top: scaleHeight(16),
    left: scaleWidth(16),
  },
  txtTitle: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(25),
    color: Color.semiBlack,
    marginBottom: scaleHeight(16),
  },
  txtHealththy: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '600',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    textTransform: 'uppercase',
    color: Color.third,
    position: 'absolute',
    left: scaleWidth(112),
    bottom: scaleHeight(14),
  },
  txtDate: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    textTransform: 'uppercase',
    color: Color.silverChalice,
    position: 'absolute',
    right: scaleWidth(30),
    bottom: scaleHeight(15),
  },
});
