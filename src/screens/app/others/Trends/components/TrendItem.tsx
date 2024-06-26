import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import FONTS from '../../../../../utils/fonts';
import SvgBookMark from '@assets/svgs/News/SvgBookMark';

interface Props {
  img?: any;
  avatar?: any;
  name?: string;
  career?: string;
  description?: string;
  date?: string;
  onPress?: any;
  onSave?: any;
}

const TrendItem = (props: Props) => {
  const { img, avatar, name, career, description, date, onPress, onSave } =
    props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={styles.container}
    >
      <Image source={img} style={styles.img} />
      <View style={styles.avatarView}>
        <View style={styles.flexDirection}>
          <Image source={avatar} style={styles.avatar} />
          <View>
            <Text style={styles.txtName}>{name}</Text>
            <Text style={styles.txtCareer}>{career}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={onSave}
          activeOpacity={0.6}
          style={styles.svgBookMark}
        >
          <SvgBookMark />
        </TouchableOpacity>
      </View>
      <Text style={styles.txtDescription}>{description}</Text>
      <Text style={styles.txtHealththy}>Healththy</Text>
      <Text style={styles.txtDate}>{date}</Text>
    </TouchableOpacity>
  );
};

export default TrendItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Color.main,
    width: scaleWidth(279),
    height: scaleHeight(335),
    borderRadius: scaleWidth(8),
    marginRight: scaleWidth(24),
  },
  img: {
    width: scaleWidth(279),
    height: scaleHeight(170),
    borderRadius: scaleWidth(8),
    overflow: 'hidden',
  },
  avatar: {
    width: scaleWidth(32),
    height: scaleWidth(32),
    borderRadius: scaleWidth(16),
    overflow: 'hidden',
    marginRight: scaleWidth(8),
  },
  txtName: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    textTransform: 'uppercase',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: Color.semiBlack,
  },
  txtCareer: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    color: Color.silverChalice,
  },
  txtDescription: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(25),
    color: Color.semiBlack,
    marginHorizontal: scaleWidth(16),
    marginTop: scaleHeight(10),
    marginBottom: scaleHeight(12),
  },
  txtHealththy: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '600',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    textTransform: 'uppercase',
    color: Color.third,
    position: 'absolute',
    bottom: scaleHeight(7),
    left: scaleWidth(16),
  },
  txtDate: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    textTransform: 'uppercase',
    color: Color.silverChalice,
    position: 'absolute',
    bottom: scaleHeight(7),
    right: scaleWidth(16),
  },
  svgBookMark: {
    width: scaleWidth(50),
    height: scaleWidth(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: scaleWidth(16),
  },
  flexDirection: {
    flexDirection: 'row',
    marginTop: scaleHeight(16),
    justifyContent: 'center',
  },
});
