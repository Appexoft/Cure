import React, { memo, useCallback } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../utils/GlobalStyles';
import FONTS from '../../../../utils/fonts';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import SvgNurse from '@assets/svgs/SvgNurse';
import SvgDrugInactive from '@assets/svgs/MainBottomTab/SvgDrug';
import SvgDoctor from '@assets/svgs/MainPage/SvgDoctor';
import SvgCalendar from '@assets/svgs/MainPage/SvgCalendar';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import DrugButton from '@screens/app/others/Drugs/components/DrugButton';
import ROUTES from '../../../../utils/routes';

const Drugs = memo(({ navigation }) => {
  const onPillsLibrary = useCallback(() => {
    navigation.navigate(ROUTES.ListDrugs);
  }, [navigation]);

  const onDrugShop = useCallback(() => {
    navigation.navigate(ROUTES.DrugShop);
  }, [navigation]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.container}>
      <Text style={styles.txtHi}>Hi! Gordon Aguilar,</Text>
      <Text style={styles.txtToday}>Have you taken medicine today?</Text>
      <View style={styles.topicView}>
        <Text style={styles.txtTitle}>Stay HomeCovid-19</Text>
        <SvgNurse style={styles.svgNurse} />
      </View>
      <DrugButton
        Svg={<SvgDrugInactive color={Color.secondBlue} />}
        title={'Pills Library'}
        description={'128 Pills'}
        onPress={onPillsLibrary}
      />
      <DrugButton
        Svg={<SvgDoctor height={28} width={28} color={Color.secondBlue} />}
        title={'Pills Shops'}
        description={'128 Pills'}
        onPress={onDrugShop}
      />
      <DrugButton
        Svg={<SvgCalendar height={24} width={24} color={Color.secondBlue} />}
        title={'Pills Reminders'}
        description={'128 Pills'}
      />
    </ScrollView>
  );
});

export default Drugs;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(107),
    paddingBottom: getBottomSpace() + scaleHeight(84),
  },
  txtHi: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(38),
    color: Color.semiBlack,
    marginLeft: scaleWidth(24),
  },
  txtToday: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(29),
    color: Color.brown,
    marginLeft: scaleWidth(24),
    marginBottom: scaleHeight(20),
  },
  topicView: {
    marginHorizontal: scaleWidth(24),
    height: scaleHeight(130),
    backgroundColor: Color.green,
    borderRadius: scaleWidth(16),
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: scaleHeight(24),
  },
  txtTitle: {
    fontFamily: FONTS.URBANIST.Bold,
    fontSize: scaleHeight(21),
    lineHeight: scaleHeight(25),
    textAlign: 'center',
    color: Color.main,
    marginRight: scaleWidth(49),
  },
  svgNurse: {
    position: 'absolute',
    bottom: 0,
    left: scaleWidth(16),
  },
});
