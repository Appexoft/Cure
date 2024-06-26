import React, { memo, useState, useContext, useCallback } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../../../utils/size';
import FONTS from '../../../../../utils/fonts';
import SvgSub from '@assets/svgs/Cart/SvgSub';
import SvgAdd from '@assets/svgs/Cart/SvgAdd';
import { TotalContext } from '@screens/app/others/Cart';
import {Color} from "../../../../../utils/GlobalStyles";

interface Props {
  imgDrug?: any;
  drugName?: string;
  drugPrice?: number;
}

const CartItem = memo((props: Props) => {
  const { imgDrug, drugName, drugPrice } = props;
  const [count, setCount] = useState(0);
  const { total, setTotal } = useContext(TotalContext);

  const onAdd = useCallback(() => {
    setCount(count + 1);
    setTotal(total + (drugPrice || 0));
  }, [count, total, drugPrice, setTotal, setCount]);

  const onSub = useCallback(() => {
    if (count === 0) {
      return;
    }
    setTotal(total - (drugPrice || 0));
    setCount(count - 1);
  }, [count, total, drugPrice, setTotal, setCount]);

  return (
    <View style={styles.container}>
      <Image style={styles.imgDrug} source={imgDrug} />
      <Text style={styles.txtDrugName}>{drugName}</Text>
      <Text style={styles.txtDrugPrice}>${drugPrice}.00</Text>
      <View style={styles.btnView}>
        <TouchableOpacity
          onPress={onSub}
          activeOpacity={0.6}
          style={styles.btnSub}>
          <SvgSub />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onAdd}
          activeOpacity={0.6}
          style={styles.btnAdd}>
          <SvgAdd />
        </TouchableOpacity>
        <Text style={styles.txtNumber}>{count}</Text>
      </View>
    </View>
  );
});

export default CartItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Color.main,
    paddingVertical: scaleHeight(16),
    paddingHorizontal: scaleWidth(16),
    width: scaleWidth(343),
    height: scaleHeight(112),
    marginBottom: scaleHeight(16),
    marginHorizontal: scaleWidth(16),
    flexDirection: 'row',
  },
  imgDrug: {
    width: scaleWidth(80),
    height: scaleWidth(80),
  },
  btmView: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: scaleWidth(104),
    bottom: scaleHeight(12),
    alignItems: 'flex-end',
  },
  txtDrugPrice: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(27),
    color: Color.main,
    position: 'absolute',
    left: scaleWidth(112),
    bottom: scaleHeight(12),
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: scaleHeight(5),
  },
  btnSub: {
    width: scaleWidth(40),
    height: scaleHeight(40),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaleWidth(12),
  },
  btnAdd: {
    width: scaleWidth(40),
    height: scaleHeight(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNumber: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(27),
    color: Color.semiBlack,
    position: 'absolute',
    left: scaleWidth(42),
    top: scaleHeight(7),
  },
  txtDrugName: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(25),
    marginLeft: scaleWidth(16),
    marginTop: scaleHeight(3),
    color: Color.semiBlack,
    marginRight: scaleWidth(30),
    height: scaleHeight(50),
  },
});
