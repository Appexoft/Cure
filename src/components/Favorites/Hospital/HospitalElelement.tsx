import { AddressLine } from '@components/location/AddressLine';
import { CardTitle } from '@components/text/CardTitle';
import { PriceScale } from '@components/PriceScale';
import { RateTextWithIcon } from '@screens/app/common/review/RateTextWithIcon';
import { SubLabelText } from '@components/SubLabelText';
import React from 'react';
import { View, Image } from 'react-native';
import { marginStyles } from '../../../utils/styles/marginStyles';
import { Hospital } from './HospitalMockData';
import { styles } from '../favoritesStyles';
import { useTranslation } from 'react-i18next';
import { NewBadge } from '@components/NewBadge';
import { CustomCarousel } from '@components/CustomCarousel';

type HospitalElementProps = {
  hospital: Hospital;
  isFirstElement: boolean;
};

export const HospitalElement: React.FC<HospitalElementProps> = React.memo(
  ({
    isFirstElement,
    hospital: {
      id,
      name,
      specialization,
      priceScale,
      address,
      rate,
      reviews,
      photos,
      logo,
      isNew,
    },
  }) => {
    const { t } = useTranslation('common');

    return (
      <View style={[isFirstElement && marginStyles.marginTop]}>
        <CustomCarousel data={photos} />
        {isNew && <NewBadge top={10} left={30} />}
        <View key={id} style={[styles.container, marginStyles.marginBottom]}>
          <Image source={logo} style={styles.imageStyles} />
          <View style={styles.centerWrapper}>
            <CardTitle text={name} />
            <SubLabelText text={specialization} />
            <AddressLine address={address} />
          </View>
          <View style={[styles.rightWrapper, marginStyles.marginRight]}>
            <RateTextWithIcon rate={rate} />
            <SubLabelText text={`${reviews} ${t('reviews')}`} />
            <PriceScale priceScale={priceScale} />
          </View>
        </View>
      </View>
    );
  },
);
