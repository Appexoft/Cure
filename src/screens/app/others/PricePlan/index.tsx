import React, { memo, useState, useCallback } from 'react';
import { Dimensions, View, Text, LayoutAnimation } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../utils/GlobalStyles';
import SvgNurse from '@assets/svgs/SvgNurse';
import PlanItem from '@screens/app/others/PricePlan/components/PlanItem';
import Carousel from 'react-native-snap-carousel';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import keyExtractor from '../../../../utils/keyExtractor';
import FONTS from '../../../../utils/fonts';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import ROUTES from '../../../../utils/routes';

interface PricePlanDataItem {
  color: string;
  svg: JSX.Element;
  price: string;
  frequency: string;
  description: string[];
}

const PRICEPLANDATA: PricePlanDataItem[] = [
  {
    color: Color.yellow,
    svgHeaderImage: <SvgNurse />,
    price: '68.00',
    frequency: 'per month',
    description: [
      '24h Call Doctor',
      '16 Book Appoiment',
      '32 Expert Doctors',
      '32 Expert Doctors',
      'Generic Drugs',
    ],
  },
  {
    color: Color.green,
    svgHeaderImage: <SvgNurse />,
    price: '68.00',
    frequency: 'per month',
    description: [
      '24h Call Doctor',
      '16 Book Appoiment',
      '32 Expert Doctors',
      '32 Expert Doctors',
      'Generic Drugs',
    ],
  },
  {
    color: Color.orange,
    svgHeaderImage: <SvgNurse />,
    price: '68.00',
    frequency: 'per month',
    description: [
      '24h Call Doctor',
      '16 Book Appoiment',
      '32 Expert Doctors',
      '32 Expert Doctors',
      'Generic Drugs',
    ],
  },
];

const PLANDATA = ['Basic', 'Standard', 'Premium'];

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.76);

const PricePlan = memo(({ navigation }) => {
  const [pricePlanData, setPricePlanData] = useState(PRICEPLANDATA);
  const [planDate, setPlanDate] = useState(PLANDATA);
  const [id, setId] = useState(1);

  const renderItem = useCallback(({ item }: { item: PricePlanDataItem }) => {
    const { color, svg, price, frequency, description } = item;
    return (
      <PlanItem
        color={color}
        svg={svg}
        price={price}
        frequency={frequency}
        description={description}
      />
    );
  }, []);

  const onUpdate = useCallback(() => {
    navigation.navigate(ROUTES.Billing);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Carousel
        firstItem={1}
        data={pricePlanData}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        inactiveSlideOpacity={1}
        onSnapToItem={(index) => setId(index)}
        keyExtractor={keyExtractor}
        vertical={false}
      />
      <View style={styles.tabView}>
        {planDate.map((item, index) => {
          const backgroundColor =
            id === index ? Color.third : Color.main;
          const textColor = id === index ? Color.main : Color.dimgray;
          return (
            <View
              key={index}
              style={[styles.tabStyle, { backgroundColor: backgroundColor }]}>
              <Text style={[styles.txtLabel, { color: textColor }]}>
                {item}
              </Text>
            </View>
          );
        })}
      </View>
      <ButtonPrimary
        style={styles.buttonPrimary}
        title={'Upgrade Now'}
        onPress={onUpdate}
      />
    </View>
  );
});

export default PricePlan;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
  },
  carouselContainer: {
    paddingTop: scaleHeight(100),
  },
  tabView: {
    backgroundColor: Color.main,
    width: scaleWidth(327),
    height: scaleHeight(40),
    position: 'absolute',
    alignSelf: 'center',
    top: scaleHeight(16),
    borderRadius: scaleWidth(20),
    flexDirection: 'row',
  },
  tabStyle: {
    width: scaleWidth(109),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleWidth(20),
  },
  txtLabel: {
    fontFamily: FONTS.URBANIST.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(13),
    lineHeight: scaleHeight(18),
  },
  buttonPrimary: {
    width: scaleWidth(295),
    position: 'absolute',
    bottom: getBottomSpace() + scaleHeight(24),
    alignSelf: 'center',
  },
});
