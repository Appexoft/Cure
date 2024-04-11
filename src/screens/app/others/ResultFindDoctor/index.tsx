import React, { memo, useCallback, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageSourcePropType,
} from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import FONTS from '../../../../utils/fonts';
import { Color } from '../../../../utils/GlobalStyles';
import DoctorItem from '@components/DoctorItem';
import keyExtractor from '../../../../utils/keyExtractor';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const DATA_NAVIGAGTE = {
  location: 'New York',
};

interface ResultDataInterface {
  imgDoctor: ImageSourcePropType;
  doctorName: string;
  specialized: string;
  rating: string;
  location: string;
}

const RESULTDATA: ResultDataInterface[] = [
  {
    imgDoctor: require('@assets/ResultFindDoctor/01.png'),
    doctorName: 'Angel Manning',
    specialized: 'Cardiologist',
    rating: '5.0',
    location: 'Newyork, United States',
  },
  {
    imgDoctor: require('@assets/ResultFindDoctor/02.png'),
    doctorName: 'Jeremy Porter',
    specialized: 'Cardiologist',
    rating: '5.0',
    location: 'Newyork, United States',
  },
  {
    imgDoctor: require('@assets/ResultFindDoctor/03.png'),
    doctorName: 'Cecelia Boone',
    specialized: 'Cardiologist',
    rating: '5.0',
    location: 'Newyork, United States',
  },
  {
    imgDoctor: require('@assets/ResultFindDoctor/04.png'),
    doctorName: 'Jesse Burgess',
    specialized: 'Cardiologist',
    rating: '5.0',
    location: 'Newyork, United States',
  },
  {
    imgDoctor: require('@assets/ResultFindDoctor/01.png'),
    doctorName: 'Angel Manning',
    specialized: 'Cardiologist',
    rating: '5.0',
    location: 'Newyork, United States',
  },
];

const ResultFindDoctor = memo(() => {
  const [data, setData] = useState(DATA_NAVIGAGTE);
  const [resultData, setResultData] = useState(RESULTDATA);

  const listHeaderComponent = useCallback(() => {
    return (
      <Text style={styles.txtFound}>
        Found <Text style={styles.txtNumberResult}> {resultData.length} </Text>
        doctors near
        <Text style={styles.txtPlace}> {data.location} </Text>
      </Text>
    );
  }, [data.location, resultData.length]);

  const renderItem = useCallback(({ item }: { item: ResultDataInterface }) => {
    const { imgDoctor, doctorName, specialized, rating, location } = item;
    return (
      <DoctorItem
        imgDoctor={imgDoctor}
        doctorName={doctorName}
        specialized={specialized}
        rating={rating}
        location={location}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={resultData}
        renderItem={renderItem}
        ListHeaderComponent={listHeaderComponent}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
});

export default ResultFindDoctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
    paddingRight: scaleWidth(24),
  },
  txtFound: {
    fontFamily: FONTS.URBANIST.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: Color.brown,
    marginBottom: scaleHeight(16),
    marginLeft: scaleWidth(24),
  },
  txtNumberResult: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: Color.accent1,
  },
  txtPlace: {
    fontFamily: FONTS.URBANIST.SemiBold,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: Color.accent1,
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(16),
    paddingBottom: getBottomSpace(),
  },
});
