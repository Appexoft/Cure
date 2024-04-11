import {
  RateTextWithIcon,
  SubLabelText,
  CardTitle,
  AddressLine,
} from '@components/index';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Image, Text } from 'react-native';
import { marginStyles } from '../../../utils/styles/marginStyles';
import { Service } from './ServiceMockData';
import { styles } from '../favoritesStyles';

type ServiceElementProps = {
  service: Service;
  isFirstElement: boolean;
};
export const ServiceElement: React.FC<ServiceElementProps> = React.memo(
  ({
    isFirstElement,
    service: { id, name, specialization, price, address, rate, reviews, photo },
  }) => {
    const { t } = useTranslation('common');

    return (
      <View
        key={id}
        style={[
          styles.container,
          marginStyles.marginBottom,
          isFirstElement && marginStyles.marginTop,
        ]}>
        <Image source={photo} style={styles.imageStyles} />
        <View style={styles.centerWrapper}>
          <CardTitle text={name} />
          <SubLabelText text={specialization} />
          <AddressLine address={address} />
        </View>
        <View style={[styles.rightWrapper, marginStyles.marginRight]}>
          <RateTextWithIcon rate={rate} />
          <SubLabelText text={`${reviews} ${t('reviews')}`} />
          <Text style={styles.priceText}>{price} $</Text>
        </View>
      </View>
    );
  },
);
