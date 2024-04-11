import React, { useState, useCallback, memo } from 'react';
import { View, Platform, Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../utils/GlobalStyles';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { heightScreen, widthScreen } from '../../../../utils/dimensions';
import FONTS from '../../../../utils/fonts';
import SvgCake from '@assets/svgs/BirthDay/SvgCake';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import ROUTES from '../../../../utils/routes';
import keyExtractor from '../../../../utils/keyExtractor';
import Carousel from 'react-native-snap-carousel';
import DatePickItem from '@screens/app/others/BirthDay/components/DatePickItem';

const BirthDay = memo(({ navigation }) => {
  const [monthIndex, setMonthIndex] = useState(6);
  const [dayIndex, setDayIndex] = useState(8);
  const [yearIndex, setYearIndex] = useState(89);

  const onBlood = useCallback(() => {
    navigation.navigate(ROUTES.Blood);
  }, [navigation]);

  let days = [];
  for (let i = 1; i <= 31; i++) {
    if (i < 10) {
      days.push('0' + i.toString());
    } else {
      days.push(i.toString());
    }
  }

  let years = [];
  for (let i = 1900; i <= 2030; i++) {
    years.push(i.toString());
  }

  let months = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER',
  ];

  const SLIDER_HEIGHT = Dimensions.get('window').height / 1.8;

  const renderMonths = ({ item, index }: { item: string; index: number }) => {
    return (
      <DatePickItem
        index={index}
        id={monthIndex}
        style={styles.monthsView}
        label={item}
      />
    );
  };

  const renderDays = ({ item, index }: { item: string; index: number }) => {
    return (
      <DatePickItem
        index={index}
        id={dayIndex}
        style={styles.daysView}
        label={item}
      />
    );
  };

  const renderYears = ({ item, index }: { item: string; index: number }) => {
    return (
      <DatePickItem
        index={index}
        id={yearIndex}
        style={styles.yearsView}
        label={item}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.svgCake}>
        <SvgCake />
      </View>
      <View style={styles.pickerBox}>
        <Carousel
          firstItem={monthIndex}
          containerCustomStyle={styles.containerCustomStyle}
          data={months}
          renderItem={renderMonths}
          vertical={true}
          sliderHeight={SLIDER_HEIGHT}
          itemHeight={scaleHeight(57)}
          inactiveSlideShift={0}
          inactiveSlideScale={0.8}
          inactiveSlideOpacity={0.6}
          onSnapToItem={(index) => setMonthIndex(index)}
          keyExtractor={keyExtractor}
        />
        <Carousel
          firstItem={dayIndex}
          data={days}
          renderItem={renderDays}
          vertical={true}
          sliderHeight={SLIDER_HEIGHT}
          itemHeight={scaleHeight(57)}
          inactiveSlideShift={0}
          inactiveSlideScale={0.9}
          inactiveSlideOpacity={0.6}
          onSnapToItem={(index) => setDayIndex(index)}
          keyExtractor={keyExtractor}
        />
        <Carousel
          firstItem={yearIndex}
          containerCustomStyle={styles.containerStyle}
          data={years}
          renderItem={renderYears}
          vertical={true}
          sliderHeight={SLIDER_HEIGHT}
          itemHeight={scaleHeight(57)}
          inactiveSlideShift={0}
          inactiveSlideScale={0.9}
          inactiveSlideOpacity={0.6}
          onSnapToItem={(index) => setYearIndex(index)}
          keyExtractor={keyExtractor}
        />
      </View>
      <View style={[styles.selectView]} />
      <ButtonPrimary
        style={styles.buttonPrimary}
        title={'Next'}
        onPress={onBlood}
      />
    </View>
  );
});

export default BirthDay;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.main,
    paddingHorizontal: scaleWidth(32),
  },
  buttonPrimary: {
    width: scaleWidth(295),
    position: 'absolute',
    bottom: getBottomSpace() + scaleHeight(24),
    marginHorizontal: scaleWidth(40),
  },
  pickerBox: {
    flex: 1,
    flexDirection: 'row',
    marginTop: scaleHeight(33),
  },
  txtUnSelect: {
    color: Color.brown,
    fontSize: scaleHeight(22),
    fontFamily: FONTS.URBANIST.Regular,
    letterSpacing: 1.2,
    opacity: 0.8,
    textTransform: 'uppercase',
  },
  txtSelected: {
    color: Color.third,
    fontSize: scaleHeight(24),
    fontFamily: FONTS.URBANIST.Bold,
    textTransform: 'uppercase',
  },
  svgCake: {
    width: scaleWidth(48),
    height: scaleHeight(48),
    marginTop: scaleHeight(34),
    backgroundColor: Color.frame,
    borderRadius: scaleHeight(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthsView: {
    alignItems: 'flex-start',
  },
  daysView: {
    alignItems: 'center',
  },
  yearsView: {
    alignItems: 'flex-end',
  },
  selectView: {
    height: scaleHeight(57),
    position: 'absolute',
    width: widthScreen,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(75, 102, 234, 0.1)',
    top: Platform.OS === 'ios' ? heightScreen / 2.65 : heightScreen / 2.59,
  },
  carouselContainer: {},
  dateItem: {
    flex: 1,
    marginBottom: 1,
    justifyContent: 'center',
  },
  containerCustomStyle: {
    width: scaleWidth(110),
  },
  containerStyle: {
    width: scaleWidth(20),
  },
});
