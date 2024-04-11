import React, { memo, useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../utils/GlobalStyles';
import InformationItem from '@screens/app/others/DoctorInformation/components/InformationItem';
import keyExtractor from '../../../../utils/keyExtractor';
import { scaleHeight } from '../../../../utils/size';

interface InformationDataItem {
  title: string;
  description: string[];
}

const INFORMATIONDATA: InformationDataItem[] = [
  {
    title: 'About',
    description: [
      'If you are a male over the age of 40 and are suffering from weakness, impotence, pain, stiffness, drooping',
    ],
  },
  {
    title: 'Address & Timing',
    description: [
      '070 Heaney Lakes Suite 380',
      '9:00 - 17:00, Monday to Friday',
    ],
  },
  {
    title: 'Phone',
    description: ['+012 345 6789', '+098 765 4321'],
  },
  {
    title: 'Certificate',
    description: ['AAMA', 'ABMS'],
  },
];

const DoctorInformation = memo(() => {
  const [doctorInfomation, setDoctorInfomation] = useState(INFORMATIONDATA);

  const renderItem = useCallback(({ item }: { item: InformationDataItem }) => {
    const { title, description } = item;
    return <InformationItem title={title} description={description} />;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={doctorInfomation}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        bounces={false}
      />
    </View>
  );
});

export default DoctorInformation;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(24),
  },
});
