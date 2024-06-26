import React, { memo, useCallback, useState } from 'react';
import { View, FlatList, ImageSourcePropType } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import keyExtractor from '../../../../utils/keyExtractor';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import DrugShopItem from '@screens/app/others/DrugShop/components/DrugShopItem';
import ROUTES from '../../../../utils/routes';

interface DrugshopDataItem {
  imgDrug: ImageSourcePropType;
  drugName: string;
  drugPrice: string;
}

const DRUGSHOPDATA: DrugshopDataItem[] = [
  {
    imgDrug: require('@assets/DrugShop/img.png'),
    drugName: 'Healer Drugs',
    drugPrice: '29.00',
  },
  {
    imgDrug: require('@assets/DrugShop/img.png'),
    drugName: 'Healer Drugs',
    drugPrice: '29.00',
  },
  {
    imgDrug: require('@assets/DrugShop/img.png'),
    drugName: 'Healer Drugs',
    drugPrice: '29.00',
  },
  {
    imgDrug: require('@assets/DrugShop/img.png'),
    drugName: 'Healer Drugs',
    drugPrice: '29.00',
  },
  {
    imgDrug: require('@assets/DrugShop/img.png'),
    drugName: 'Healer Drugs',
    drugPrice: '29.00',
  },
  {
    imgDrug: require('@assets/DrugShop/img.png'),
    drugName: 'Healer Drugs',
    drugPrice: '29.00',
  },
];

const DrugShop = memo(({ navigation }) => {
  const [drugData, setDrugData] = useState(DRUGSHOPDATA);

  const onDrugShopDetails = useCallback(() => {
    navigation.navigate(ROUTES.DrugShopDetails);
  }, [navigation]);

  const renderItem = useCallback(
    ({ item }: { item: DrugshopDataItem }) => {
      const { imgDrug, drugName, drugPrice } = item;

      return (
        <DrugShopItem
          onPress={onDrugShopDetails}
          imgDrug={imgDrug}
          drugName={drugName}
          drugPrice={drugPrice}
        />
      );
    },
    [onDrugShopDetails],
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={drugData}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});

export default DrugShop;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    marginHorizontal: scaleWidth(15),
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(24),
    paddingBottom: getBottomSpace(),
  },
});
