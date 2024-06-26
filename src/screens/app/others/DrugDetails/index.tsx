import React, { memo, useCallback, useState } from 'react';
import { View, Image, FlatList, ImageSourcePropType } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../utils/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import { scaleHeight, scaleWidth } from '../../../../utils/size';
import keyExtractor from '../../../../utils/keyExtractor';
import DrugDetailItem from '@components/DrugDetailItem';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { widthScreen } from '../../../../utils/dimensions';

interface DrugDetailsDataItem {
  imgDrug: ImageSourcePropType;
  content: { title: string; description: string }[];
}

const DRUGDETAILSDATA: DrugDetailsDataItem = {
  imgDrug: require('@assets/DrugDetails/MockUp.png'),
  content: [
    {
      title: 'What is amoxicillin?',
      description:
        'If you are a male over the age of 40 and are suffering from weakness, impotence, pain, stiffness, drooping',
    },
    {
      title: 'What is amoxicillin?',
      description:
        'If you are a male over the age of 40 and are suffering from weakness, impotence, pain, stiffness, drooping',
    },
    {
      title: 'What is amoxicillin?',
      description:
        'If you are a male over the age of 40 and are suffering from weakness, impotence, pain, stiffness, drooping',
    },
    {
      title: 'What is amoxicillin?',
      description:
        'If you are a male over the age of 40 and are suffering from weakness, impotence, pain, stiffness, drooping',
    },
  ],
};

const DrugDetails = memo(() => {
  const [drugData, setDrugData] = useState(DRUGDETAILSDATA);

  const { setOptions } = useNavigation();
  React.useLayoutEffect(() => {
    setOptions({
      title: 'Amoxicillin',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = useCallback(({ item }) => {
    const { title, description } = item;
    return <DrugDetailItem title={title} description={description} />;
  }, []);

  const listHeaderComponent = useCallback(() => {
    return <Image source={drugData.imgDrug} style={styles.imgDrug} />;
  }, [drugData.imgDrug]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={drugData.content}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={listHeaderComponent}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});

export default DrugDetails;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
  },
  flatList: {
    marginHorizontal: scaleWidth(24),
  },
  imgDrug: {
    width: widthScreen / 1.12,
    height: widthScreen / 1.6,
    alignSelf: 'center',
    overflow: 'hidden',
    marginBottom: scaleHeight(24),
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(40),
    paddingBottom: getBottomSpace(),
  },
});
