import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../../../../../../utils/size';
import WizzardTitleAndStep from '@screens/app/common/wizzard/wizzardAndTitleStep.component';
import TextInputCustom from '@components/input/TextInputCustom';
import { useTranslation } from 'react-i18next';
import { PriceCurrency } from '../../../../../../../../../utils/domainEntities';

interface IProps {
  data: any;
  setData: any;
  currentStep: number;
  stepLength: number;
  setCurrentScreen?: React.Dispatch<React.SetStateAction<number>>;
}

const ServiceDetails: React.FC<IProps> = ({
  currentStep,
  stepLength,
  data,
  setData,
}) => {
  const { t } = useTranslation();

  return (
    <View style={{ height: '180%' }}>
      <View style={{ marginBottom: scaleHeight(20) }}>
        <WizzardTitleAndStep
          title={t('services:details')}
          currentStep={currentStep + 1}
          stepLength={stepLength}
        />
      </View>

      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <TextInputCustom
            label={t('services:name')}
            placeholder={t('services:name')}
            isEditable={true}
            value={data.name}
            iconRight="edit-3"
            isMultiline
            onChangedText={(text) => {
              setData({
                ...data,
                name: text,
              });
            }}
          />

          <TextInputCustom
            style={{ height: 100 }}
            label={t('services:descriptions')}
            placeholder={t('services:descriptions')}
            isEditable={true}
            value={data?.description}
            iconRight="edit-3"
            isMultiline
            onChangedText={(text) => {
              setData({
                ...data,
                description: text,
              });
            }}
          />
          <TextInputCustom
            label={t('services:pricing')}
            placeholder={t('services:pricing')}
            isEditable={true}
            value={data?.priceValue}
            iconRight="dollar-sign"
            isMultiline
            onChangedText={(text) => {
              setData({
                ...data,
                priceValue: text,
                priceCurrency: PriceCurrency.USD,
              });
            }}
          />
          <View style={{ width: '95%' }}>
            <Text
              style={{
                marginTop: scaleHeight(10),
                marginBottom: scaleHeight(6),
              }}>
              {t('services:durationInMin')}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ServiceDetails;
