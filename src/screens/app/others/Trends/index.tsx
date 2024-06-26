import React, { memo, useCallback, useState } from 'react';
import { View, FlatList, ImageSourcePropType } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../utils/GlobalStyles';
import keyExtractor from '../../../../utils/keyExtractor';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import TrendItem from '@screens/app/others/Trends/components/TrendItem';
import TrendListItem from '@components/TrendListItem';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import ROUTES from '../../../../utils/routes';

interface TrendsDataItem {
  img: ImageSourcePropType;
  avatar: ImageSourcePropType;
  name: string;
  career: string;
  description: string;
  date: string;
}

interface ListTrendsDataItem {
  img: ImageSourcePropType;
  date: string;
  title: string;
}

const TRENDSDATA: TrendsData[] = [
  {
    img: require('@assets/News/img1.png'),
    avatar: require('@assets/News/Oval.png'),
    name: 'Millie Boyd',
    career: 'Doctor',
    description:
      'Home Remedies To Retain Teeth And Lip Color For Intense Smokers',
    date: '23 Nov 2020',
  },
  {
    img: require('@assets/News/img1.png'),
    avatar: require('@assets/News/Oval.png'),
    name: 'Millie Boyd',
    career: 'Doctor',
    description:
      'Home Remedies To Retain Teeth And Lip Color For Intense Smokers',
    date: '23 Nov 2020',
  },
];

const LISTTRENDSDATA: ListTrendsDataItem[] = [
  {
    img: require('@assets/News/img1.png'),
    title: 'A Brief History Of Anesthetics',
    date: '23 Nov 2020',
  },
  {
    img: require('@assets/News/img1.png'),
    title: 'The Different Types Of Laser Eye Surgery',
    date: '23 Nov 2020',
  },
  {
    img: require('@assets/News/img1.png'),
    title: 'Hearing Aids To Best Suit Your Needs',
    date: '23 Nov 2020',
  },
];

const Trends = memo(({ navigation }) => {
  const [trendData, setTrendData] = useState(TRENDSDATA);
  const [listTrendData, setListTrendData] = useState(LISTTRENDSDATA);

  const onNewsDetails = useCallback(() => {
    navigation.navigate(ROUTES.NewsDetails);
  }, [navigation]);

  const renderTrendItem = useCallback(
    ({ item }: { item: TrendsDataItem }) => {
      const { img, avatar, name, career, description, date } = item;
      return (
        <TrendItem
          img={img}
          avatar={avatar}
          name={name}
          career={career}
          description={description}
          date={date}
          onPress={onNewsDetails}
        />
      );
    },
    [onNewsDetails],
  );

  const renderTrendListItem = useCallback(
    ({ item }: { item: ListTrendsDataItem }) => {
      const { img, title, date } = item;
      return (
        <TrendListItem
          onPress={onNewsDetails}
          img={img}
          title={title}
          date={date}
        />
      );
    },
    [onNewsDetails],
  );

  const listHeaderComponent = useCallback(() => {
    return (
      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.contentContainerFlatList}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={trendData}
        renderItem={renderTrendItem}
        keyExtractor={keyExtractor}
      />
    );
  }, [trendData, renderTrendItem]);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        data={listTrendData}
        ListHeaderComponent={listHeaderComponent}
        renderItem={renderTrendListItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});
export default Trends;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
  },
  contentContainerFlatList: {
    paddingLeft: scaleWidth(24),
  },
  contentContainerStyle: {
    paddingTop: getStatusBarHeight() + scaleHeight(44),
    paddingBottom: getBottomSpace() + scaleHeight(24),
  },
  flatList: {
    marginBottom: scaleHeight(24),
  },
});
