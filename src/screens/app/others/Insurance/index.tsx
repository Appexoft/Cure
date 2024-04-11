import React, { memo, useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Color } from '../../../../utils/GlobalStyles';
import SvgLogo from '@assets/svgs/Insurance/SvgLogo';
import { scaleHeight } from '../../../../utils/size';
import keyExtractor from '../../../../utils/keyExtractor';
import InsuranceItem from '@screens/app/others/Insurance/components/InsuranceItem';
import { getBottomSpace } from 'react-native-iphone-x-helper';

interface InsuranceDataItem {
  logoHospital: JSX.Element;
  insurance: string;
  name: string;
  enrolleeID: string;
  expDate: string;
}

const INSURANCEDATA: InsuranceDataItem[] = [
  {
    logoHospital: <SvgLogo />,
    insurance: 'Medical Insurance',
    name: 'Julian Walker',
    enrolleeID: 'VMH9231458760',
    expDate: '16-2025',
  },
  {
    logoHospital: <SvgLogo />,
    insurance: 'Medical Insurance',
    name: 'Julian Walker',
    enrolleeID: 'VMH9231458760',
    expDate: '16-2025',
  },
  {
    logoHospital: <SvgLogo />,
    insurance: 'Medical Insurance',
    name: 'Julian Walker',
    enrolleeID: 'VMH9231458760',
    expDate: '16-2025',
  },
  {
    logoHospital: <SvgLogo />,
    insurance: 'Medical Insurance',
    name: 'Julian Walker',
    enrolleeID: 'VMH9231458760',
    expDate: '16-2025',
  },
  {
    logoHospital: <SvgLogo />,
    insurance: 'Medical Insurance',
    name: 'Julian Walker',
    enrolleeID: 'VMH9231458760',
    expDate: '16-2025',
  },
];

const Insurance = memo(() => {
  const [insuranceData, setInsuranceData] = useState(INSURANCEDATA);

  const renderItem = useCallback(({ item }: { item: InsuranceDataItem }) => {
    const { logoHospital, insurance, name, enrolleeID, expDate } = item;

    const onPress = () => {};

    return (
      <InsuranceItem
        logoHospital={logoHospital}
        insurance={insurance}
        name={name}
        enrolleeID={enrolleeID}
        expDate={expDate}
        onPress={onPress}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={insuranceData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});
export default Insurance;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.pageBackground,
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(24),
    paddingBottom: getBottomSpace(),
  },
});
