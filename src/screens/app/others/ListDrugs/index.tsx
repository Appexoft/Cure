import React, { memo, useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../utils/GlobalStyles';
import keyExtractor from '../../../../utils/keyExtractor';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { scaleHeight } from '../../../../utils/size';
import DrugItem from '@screens/app/others/ListDrugs/components/DrugItem';
import SvgDrug from '@assets/svgs/ListDrugs/SvgDrug';
import SvgAspirin from '@assets/svgs/ListDrugs/SvgAspirin';
import ROUTES from '../../../../utils/routes';

interface ListDrugDataItem {
  svg: JSX.Element;
  drugName: string;
  concentration: string;
}

const LISTDRUGSDATA: ListDrugDataItem[] = [
  {
    svgHeaderImage: <SvgDrug />,
    drugName: 'Aspirin',
    concentration: '10mg/piece',
  },
  {
    svgHeaderImage: <SvgAspirin />,
    drugName: 'Aspirin',
    concentration: '10mg/piece',
  },
  {
    svgHeaderImage: <SvgDrug />,
    drugName: 'Aspirin',
    concentration: '10mg/piece',
  },
  {
    svgHeaderImage: <SvgAspirin />,
    drugName: 'Aspirin',
    concentration: '10mg/piece',
  },
  {
    svgHeaderImage: <SvgDrug />,
    drugName: 'Aspirin',
    concentration: '10mg/piece',
  },
  {
    svgHeaderImage: <SvgAspirin />,
    drugName: 'Aspirin',
    concentration: '10mg/piece',
  },
  {
    svgHeaderImage: <SvgDrug />,
    drugName: 'Aspirin',
    concentration: '10mg/piece',
  },
  {
    svgHeaderImage: <SvgAspirin />,
    drugName: 'Aspirin',
    concentration: '10mg/piece',
  },
  {
    svgHeaderImage: <SvgDrug />,
    drugName: 'Aspirin',
    concentration: '10mg/piece',
  },
];

const ListDrugs = memo(({ navigation }) => {
  const [drugData, setDrugData] = useState(LISTDRUGSDATA);

  const onDrugDetails = useCallback(() => {
    navigation.navigate(ROUTES.DrugDetails);
  }, [navigation]);

  const renderItem = useCallback(
    ({ item }: { item: ListDrugDataItem }) => {
      const { svg, drugName, concentration } = item;

      return (
        <DrugItem
          Svg={svg}
          drugName={drugName}
          concentration={concentration}
          onPress={onDrugDetails}
        />
      );
    },
    [onDrugDetails],
  );

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={drugData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});
export default ListDrugs;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.pageBackground,
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(24),
    paddingBottom: getBottomSpace(),
  },
});
