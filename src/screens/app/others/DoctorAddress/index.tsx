import React, { memo, useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../utils/GlobalStyles';
import keyExtractor from '../../../../utils/keyExtractor';
import DoctorAddressItem from '@screens/app/others/DoctorAddress/components/DoctorAddressItem';
import { scaleHeight } from '../../../../utils/size';

interface AddressDataItem {
  nameLocation: string;
  address: string;
  distance: string;
}

const ADDRESSDATA: AddressDataItem[] = [
  {
    nameLocation: 'Healer Hospital #1',
    address: '242 Gleichner Valleys, Robertview,\n' + 'Micronesia',
    distance: '0.8 km away',
  },
  {
    nameLocation: 'Healer Hospital #1',
    address: '242 Gleichner Valleys, Robertview,\n' + 'Micronesia',
    distance: '0.8 km away',
  },
  {
    nameLocation: 'Healer Hospital #1',
    address: '242 Gleichner Valleys, Robertview,\n' + 'Micronesia',
    distance: '0.8 km away',
  },
  {
    nameLocation: 'Healer Hospital #1',
    address: '242 Gleichner Valleys, Robertview,\n' + 'Micronesia',
    distance: '0.8 km away',
  },
];

const DoctorAddress = memo(() => {
  const [doctorAddress, setDoctorAddress] = useState(ADDRESSDATA);

  const renderItem = useCallback(({ item }: { item: AddressDataItem }) => {
    const { nameLocation, address, distance } = item;

    return (
      <DoctorAddressItem
        nameLocation={nameLocation}
        address={address}
        distance={distance}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={doctorAddress}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});

export default DoctorAddress;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(24),
  },
});
