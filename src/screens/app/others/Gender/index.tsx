import React, { memo, useCallback } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  animatedStyles,
  scrollInterpolator,
} from '@screens/app/others/Gender/components/Animation';
import GenderItem from '@screens/app/others/Gender/components/GenderItem';
import { Color } from '../../../../utils/GlobalStyles';
import FONTS from '../../../../utils/fonts';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import ButtonPrimary from '@components/btns/ButtonPrimary';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { useNavigation } from '@react-navigation/native';
import ROUTES from '../../../../utils/routes';
import SvgWomen from '@assets/svgs/Gender/SvgWomen';
import SvgOther from '@assets/svgs/Gender/SvgOther';
import SvgMen from '@assets/svgs/Gender/SvgMen';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.55);

enum GenderEnum {
  MAN = 'Man',
  WOMAN = 'Woman',
  OTHER = 'Other',
}

interface DataItem {
  svg: JSX.Element;
  gender: GenderEnum;
}

const data: DataItem[] = [
  {
    svgHeaderImage: <SvgOther />,
    gender: GenderEnum.OTHER,
  },
  {
    svgHeaderImage: <SvgWomen />,
    gender: GenderEnum.WOMAN,
  },
  {
    svgHeaderImage: <SvgMen />,
    gender: GenderEnum.MAN,
  },
];

const Gender = memo(() => {
  const navigation = useNavigation();

  const onBirthDay = useCallback(() => {
    navigation.navigate(ROUTES.BirthDay);
  }, [navigation]);

  const renderItem = ({ item }: { item: DataItem }) => {
    const { svg, gender } = item;
    return <GenderItem Svg={svg} gender={gender} />;
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        firstItem={1}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        activeSlideAlignment={'center'}
        inactiveSlideOpacity={0.1}
        vertical={false}
      />
      <Text style={styles.txtIam}>I am a</Text>
      <ButtonPrimary
        style={styles.buttonPrimary}
        title={'Next'}
        onPress={onBirthDay}
      />
    </View>
  );
});

export default Gender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.main,
  },
  carouselContainer: {
    paddingTop: scaleHeight(100),
    backgroundColor: Color.main,
  },
  txtIam: {
    position: 'absolute',
    top: scaleHeight(40),
    alignSelf: 'center',
    fontFamily: FONTS.URBANIST.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(32),
    color: Color.main,
  },
  buttonPrimary: {
    width: scaleWidth(295),
    position: 'absolute',
    bottom: getBottomSpace() + scaleHeight(24),
    marginHorizontal: scaleWidth(40),
  },
});
