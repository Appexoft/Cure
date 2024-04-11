import React from 'react';
import { View, Text, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import FONTS from '../../../../../utils/fonts';
import {Color} from "../../../../../utils/GlobalStyles";

interface Props {
  avatar?: any;
  nameUser?: string;
  timeComment?: string;
  comment?: string;
}

const CommentItem = (props: Props) => {
  const { avatar, nameUser, timeComment, comment } = props;
  return (
    <View style={styles.container}>
      <View style={styles.infoView}>
        <View style={styles.setRow}>
          <Image source={avatar} style={styles.avatar} />
          <Text style={styles.nameUser}>{nameUser}</Text>
        </View>
        <Text style={styles.txtTimeComment}>{timeComment}</Text>
      </View>
      <Text style={styles.txtComment}>{comment}</Text>
    </View>
  );
};

export default CommentItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Color.main,
    borderRadius: scaleWidth(8),
    paddingHorizontal: scaleWidth(16),
    paddingTop: scaleHeight(15),
    paddingBottom: scaleHeight(12),
    marginBottom: scaleHeight(24),
  },
  avatar: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(20),
  },
  nameUser: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(26),
    color: Color.semiBlack,
    textTransform: 'uppercase',
    marginLeft: scaleWidth(12),
  },
  txtTimeComment: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: Color.dimgray,
  },
  txtComment: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    marginTop: scaleHeight(9),
    color: Color.dimgray,
  },
  infoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  setRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
