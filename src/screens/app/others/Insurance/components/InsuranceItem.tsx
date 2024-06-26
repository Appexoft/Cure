import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import FONTS from '../../../../../utils/fonts';
import SvgArrowRight from '@assets/svgs/Insurance/SvgArrowRight';

interface Props {
  logoHospital?: any;
  insurance?: string;
  name?: string;
  enrolleeID?: string;
  expDate?: string;
  onPress?: any;
}

const InsuranceItem = memo((props: Props) => {
  const { logoHospital, insurance, name, enrolleeID, expDate, onPress } = props;
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        {logoHospital}
        <Text style={styles.txtInsurance}>{insurance}</Text>
      </View>
      <Text style={styles.txtName}>{name}</Text>
      <View style={styles.btmView}>
        <View>
          <Text style={styles.enrolleeID}>Enrollee ID</Text>
          <Text style={styles.txtEnrolleeID}>{enrolleeID}</Text>
        </View>
        <View>
          <Text style={styles.expDate}>Exp Date</Text>
          <Text style={styles.txtExpDate}>{expDate}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.viewButton}>
        <SvgArrowRight />
      </TouchableOpacity>
    </View>
  );
});
export default InsuranceItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Color.main,
    paddingTop: scaleHeight(20),
    paddingHorizontal: scaleWidth(24),
    borderRadius: scaleWidth(8),
    marginHorizontal: scaleWidth(16),
    marginBottom: scaleHeight(16),
    paddingBottom: scaleHeight(18),
  },
  txtInsurance: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: Color.semiBlack,
    fontWeight: '500',
    marginLeft: scaleWidth(12),
    marginTop: scaleHeight(4),
    textTransform: 'uppercase',
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaleHeight(24),
  },
  txtName: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(32),
    lineHeight: scaleHeight(48),
    color: Color.semiBlack,
    marginBottom: scaleHeight(22),
    textAlign: 'center',
  },
  btmView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  enrolleeID: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    color: Color.silverChalice,
  },
  txtEnrolleeID: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(20),
    color: Color.semiBlack,
    marginTop: scaleHeight(2),
  },
  expDate: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    color: Color.silverChalice,
  },
  txtExpDate: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(20),
    color: Color.semiBlack,
    marginTop: scaleHeight(2),
  },
  viewButton: {
    width: scaleWidth(32),
    height: scaleWidth(32),
    borderRadius: scaleWidth(32),
    backgroundColor: Color.third,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: scaleHeight(16),
    right: scaleWidth(24),
  },
});
