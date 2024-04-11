import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import { Color } from '../../../../../utils/GlobalStyles';
import FONTS from '../../../../../utils/fonts';

interface Props {
  title?: string;
  onPress?: any;
}

const DoctorServiceItem = memo((props: Props) => {
  const { title, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.txtTitle}>{title}</Text>
    </TouchableOpacity>
  );
});

export default DoctorServiceItem;

const styles = ScaledSheet.create({
  container: {
    height: scaleHeight(48),
    backgroundColor: Color.pageBackground,
    borderRadius: scaleWidth(24),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaleWidth(16),
    paddingVertical: scaleHeight(14),
    paddingHorizontal: scaleWidth(16),
    marginBottom: scaleHeight(21),
  },
  txtTitle: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(15),
    lineHeight: scaleHeight(20),
    color: Color.semiBlack,
    textAlign: 'center',
  },
});
