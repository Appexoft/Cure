import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import FONTS from '../../../../utils/fonts';

interface Props extends TouchableOpacityProps {
  title?: string;
  subTitle?: string;
  description?: string;
  content?: string;
}

const SendItem = ({
  style,
  content,
  title,
  subTitle,
  description,
  ...props
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      {...props}
      style={[styles.sendItem, style]}>
      <View style={styles.titleView}>
        <Text style={styles.txtTitle}>{title}</Text>
        <Text>{subTitle}</Text>
      </View>
      <Text style={styles.txtDescription}>
        {description}
        <Text style={styles.txtContent}>{content}</Text>
      </Text>
    </TouchableOpacity>
  );
};
export default SendItem;

const styles = ScaledSheet.create({
  sendItem: {
    backgroundColor: Color.frame,
    borderRadius: scaleHeight(16),
  },
  titleView: {
    flexDirection: 'row',
    marginTop: scaleHeight(24),
    marginLeft: scaleWidth(28),
  },
  txtTitle: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    color: Color.main,
    fontSize: scaleHeight(12),
    textTransform: 'uppercase',
    marginRight: scaleWidth(4),
  },
  txtDescription: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: Color.silverChalice,
    marginTop: scaleHeight(9),
    marginLeft: scaleWidth(24),
  },
  txtContent: {
    marginLeft: scaleWidth(24),
    lineHeight: scaleHeight(20),
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    color: Color.semiBlack,
  },
});
