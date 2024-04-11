import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import FONTS from '../../../../../utils/fonts';
import SvgLocation from '@assets/svgs/SvgLocation';

interface Props {
  nameLocation?: string;
  address?: string;
  distance?: string;
}

const DoctorAddressItem = memo((props: Props) => {
  const { nameLocation, address, distance } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.txtLoction}>{nameLocation}</Text>
      <Text style={styles.txtAddress}>{address}</Text>
      <View style={styles.distanceView}>
        <SvgLocation color={Color.third} />
        <Text style={styles.txtDistance}> {distance}</Text>
      </View>
    </View>
  );
});

export default DoctorAddressItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Color.main,
    borderRadius: scaleWidth(8),
    paddingVertical: scaleHeight(16),
    paddingHorizontal: scaleWidth(24),
    marginBottom: scaleHeight(24),
    marginHorizontal: scaleWidth(24),
    height: scaleHeight(139),
  },
  txtLoction: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: Color.semiBlack,
    textTransform: 'uppercase',
  },
  txtAddress: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: Color.dimgray,
    marginBottom: scaleHeight(8),
    marginTop: scaleHeight(8),
  },
  distanceView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtDistance: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(21),
    color: Color.third,
  },
});
