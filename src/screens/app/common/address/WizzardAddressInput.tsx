import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import WizzardTitleAndStep from '@screens/app/common/wizzard/wizzardAndTitleStep.component';
import { commonStyles } from '../../../../utils/styles/commonStyles';
import AddressFormInput from '@screens/app/common/address/AddressFormInput';
import { scaleHeight } from '../../../../utils/size';
import { fontH3 } from '../../../../utils/themeUtils';

interface Props {
  data: any;
  setData: any;
  currentStep: number;
  stepLength: number;
}

const WizzardAddressInput: React.FC<Props> = ({
  currentStep,
  stepLength,
  data,
  setData,
}) => {
  const { t } = useTranslation();
  return (
    <ScrollView style={styles.container}>
      <WizzardTitleAndStep
        title={t('common:address')}
        currentStep={currentStep}
        stepLength={stepLength}
      />

      <View style={[styles.blockContainer, commonStyles.mb10]}>
        {/*<Text style={styles.textHeader}>{t('common:address')}</Text>*/}
        <AddressFormInput
          data={data.address}
          setData={(crt) => {
            setData({
              ...data,
              address: crt,
            });
          }}
        />
      </View>
    </ScrollView>
  );
};

export default WizzardAddressInput;

const styles = StyleSheet.create({
  container: {
    height: '60%',
  },

  blockContainer: {
    marginVertical: scaleHeight(20),
  },

  headerLabel: {
    fontSize: fontH3,
    fontWeight: '600',
  },
});
