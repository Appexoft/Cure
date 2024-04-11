import React, { memo, useState, useCallback } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import DeviceItem from '@screens/app/others/Devices/components/DeviceItem';
import keyExtractor from '../../../../utils/keyExtractor';
import { scaleHeight } from '../../../../utils/size';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

interface DeviceDataItem {
  imgDevice: string;
  nameDevice: string;
}

const DEVICESDATA: DeviceDataItem[] = [
  {
    imgDevice: require('@assets/Devices/img.png'),
    nameDevice: 'Apple Health',
  },
  {
    imgDevice: require('@assets/Devices/img1.png'),
    nameDevice: 'Fitbit',
  },
  {
    imgDevice: require('@assets/Devices/img2.png'),
    nameDevice: 'Withings',
  },
  {
    imgDevice: require('@assets/Devices/img3.png'),
    nameDevice: 'iHealh',
  },
  {
    imgDevice: require('@assets/Devices/img4.png'),
    nameDevice: 'MiBand',
  },
  {
    imgDevice: require('@assets/Devices/img5.png'),
    nameDevice: 'Cerner',
  },
  {
    imgDevice: require('@assets/Devices/img6.png'),
    nameDevice: 'Cerner',
  },
];

const Devices = memo(() => {
  const [devicesData, setDevicesData] = useState(DEVICESDATA);

  const renderItem = useCallback(({ item }: { item: DeviceDataItem }) => {
    const { imgDevice, nameDevice } = item;
    return <DeviceItem imgDivice={imgDevice} nameDivice={nameDevice} />;
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={devicesData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});

export default Devices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingTop: getStatusBarHeight() + scaleHeight(55),
  },
});
