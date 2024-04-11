import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { CarouselProps } from 'react-native-snap-carousel/src/carousel/types';
import { heightScreen, widthScreen } from '../utils/dimensions';

export function CustomCarousel<ImageSourcePropType>({
  data,
  sliderWidth = widthScreen,
  ...props
}: CarouselProps<ImageSourcePropType>) {
  return (
    <>
      <Carousel
        {...props}
        data={data}
        renderItem={({ item }: any) => (
          <Image
            resizeMode="stretch"
            source={item}
            style={styles.hospitalPhotos}
          />
        )}
        sliderWidth={sliderWidth}
        itemWidth={widthScreen}
        vertical={false}
        style={styles.positionRelative}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={0}
        containerStyle={styles.containerStyle}
        dotStyle={styles.dotStyle}
      />
    </>
  );
}

const styles = StyleSheet.create({
  hospitalPhotos: {
    width: widthScreen * 0.9,
    height: heightScreen * 0.3,
    alignSelf: 'center',
    borderRadius: 4,
  },
  positionRelative: { position: 'relative' },
  containerStyle: { position: 'absolute', alignSelf: 'center', bottom: 110 },
  dotStyle: { backgroundColor: '#fff', height: 8, width: 8, borderRadius: 16 },
});
