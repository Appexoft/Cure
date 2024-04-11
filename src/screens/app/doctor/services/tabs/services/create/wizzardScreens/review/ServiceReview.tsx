import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { scaleHeight, scaleWidth } from '../../../../../../../../../utils/size';
import WizzardTitleAndStep from '@screens/app/common/wizzard/wizzardAndTitleStep.component';
import Icon from 'react-native-vector-icons/Feather';
import { useTranslation } from 'react-i18next';
import { DocumentLinkDto } from '../../../../../../../../../utils/entityUtils';
import PriceDisplay from '@screens/app/common/priceDisplay';

interface IProps {
  data: any;
  currentStep: number;
  stepLength: number;
  setCurrentScreen?: React.Dispatch<React.SetStateAction<number>>;
}

const ServiceReview: React.FC<IProps> = ({ data, currentStep, stepLength }) => {
  const { t } = useTranslation();

  return (
    <View style={{ height: '180%' }}>
      <View style={{ marginBottom: scaleHeight(20) }}>
        <WizzardTitleAndStep
          title={t('services:review')}
          currentStep={currentStep + 1}
          stepLength={stepLength}
        />
      </View>

      <ScrollView>
        <View style={{ alignItems: 'center', marginBottom: scaleHeight(200) }}>
          <View style={styles.cardContainder}>
            <View style={styles.fieldContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon size={20} name="file" />
                <Text style={{ marginLeft: 6 }}>{t('services:name')}</Text>
              </View>

              <Text style={{}}>{data?.name}</Text>
            </View>

            <View style={styles.fieldContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon size={20} name="book-open" />
                <Text style={{ marginLeft: 6 }}>
                  {t('services:description')}
                </Text>
              </View>

              <Text style={{}}>{data?.description}</Text>
            </View>

            <View style={styles.fieldContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon size={20} name="grid" />
                <Text style={{ marginLeft: 6 }}>{t('services:type')}</Text>
              </View>

              <Text style={{}}>{data?.medicalField?.name}</Text>
            </View>

            <View style={styles.fieldContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon size={20} name="grid" />
                <Text style={{ marginLeft: 6 }}>{t('services:subType')}</Text>
              </View>

              <Text style={{}}>{data?.medicalSubField?.name}</Text>
            </View>

            <View style={styles.fieldContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon size={20} name="briefcase" />
                <Text style={{ marginLeft: 6 }}>{t('services:hospital')}</Text>
              </View>

              <Text style={{}}>{data?.hospital?.name}</Text>
            </View>
            <View style={styles.fieldContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon size={20} name="clock" />
                <Text style={{ marginLeft: 6 }}>{t('services:duration')}</Text>
              </View>

              <Text style={{}}>{data?.durationInMin} min</Text>
            </View>

            <View style={styles.fieldContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* todo - fix currency ? */}
                <Icon size={20} name="dollar-sign" />
                <Text style={{ marginLeft: 6 }}>{t('services:price')}</Text>
              </View>

              <Text style={{}}>
                <PriceDisplay
                  value={data?.priceValue}
                  currency={data?.priceCurrency}
                />
              </Text>
            </View>
            {data.photos && data.photos.length > 0 && (
              <View style={{ padding: scaleWidth(30) }}>
                <Text style={{}}>{t('services:photos')}</Text>
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: scaleHeight(10),
                    borderRadius: 10,
                  }}>
                  {data?.photos.map((item: DocumentLinkDto) => (
                    <Image
                      style={{
                        resizeMode: 'cover',
                        borderRadius: 10,
                        height: scaleHeight(150),
                        width: scaleHeight(150),
                        marginTop: scaleHeight(5),
                      }}
                      source={{ uri: item?.contentBase64 }}
                    />
                  ))}
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ServiceReview;

const styles = StyleSheet.create({
  cardContainder: {
    borderWidth: 1,
    width: '100%',
    padding: scaleWidth(10),
    borderColor: '#CBCBCD',
    borderRadius: scaleWidth(10),
  },

  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scaleHeight(10),
  },

  btnViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    marginTop: scaleHeight(30),
  },
  btnSave: {
    textTransform: 'capitalize',
  },
});
