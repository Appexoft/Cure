import React, { memo, useCallback, useState } from 'react';
import { View, StyleSheet, FlatList, ImageSourcePropType } from 'react-native';
import keyExtractor from '../../../../utils/keyExtractor';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { scaleHeight } from '../../../../utils/size';
import IndicatorItem from '@screens/app/others/Indicator/components/IndicatorItem';

interface IndicatorDataItem {
  imgIndicator: ImageSourcePropType;
  nameIndicator: string;
  description: string;
}

const INDICATORDATA: IndicatorDataItem[] = [
  {
    imgIndicator: require('@assets/Indicator/img.png'),
    nameIndicator: 'Weight',
    description: '+2kg this week',
  },
  {
    imgIndicator: require('@assets/Indicator/img1.png'),
    nameIndicator: 'Foot Step',
    description: '25,679 steps this week',
  },
  {
    imgIndicator: require('@assets/Indicator/img2.png'),
    nameIndicator: 'Glueco',
    description: 'Tracking your glueco',
  },
  {
    imgIndicator: require('@assets/Indicator/img3.png'),
    nameIndicator: 'Desinfectant',
    description: 'Tracking your eye-sight',
  },
  {
    imgIndicator: require('@assets/Indicator/img4.png'),
    nameIndicator: 'Desinfectant',
    description: 'Tracking you hearing-aid',
  },
  {
    imgIndicator: require('@assets/Indicator/img5.png'),
    nameIndicator: 'Weight',
    description: 'That good now!',
  },
];

const Indicator = memo(() => {
  const [indicatorData, setIndicatorData] = useState(INDICATORDATA);

  const renderItem = useCallback(({ item }: { item: IndicatorDataItem }) => {
    const { imgIndicator, nameIndicator, description } = item;
    return (
      <IndicatorItem
        imgIndicator={imgIndicator}
        nameIndicator={nameIndicator}
        desciprion={description}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={indicatorData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});

export default Indicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingTop: getStatusBarHeight() + scaleHeight(55),
  },
});
