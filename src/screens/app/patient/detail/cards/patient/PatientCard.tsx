import * as React from 'react';
import moment from 'moment';
import { ImageEntityType } from '../../../../../../utils/entityUtils';
import { GenericListCard } from '@screens/app/patient/detail/cards/common/GenericListCard';
import { IPatient } from '../../../../../../utils/domainEntities';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  resource: IPatient;
  navigation: any;
  ignorePress?: boolean;
};

const PatientCard = ({ resource, navigation, ignorePress }: Props) => {
  const [subTitle, setSubtitle] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    if (resource) {
      if (resource.gender && resource.birthDate) {
        const gender = t('common:genderType:' + resource.gender);
        const years =
          moment(new Date()).year() - moment(resource.birthDate).year();
        setSubtitle(gender + ', ' + years + ' ' + t('common:yearsOld'));
      }
    }
  }, [resource, t]);

  return (
    <GenericListCard
      resource={resource}
      entityType={ImageEntityType.PATIENT}
      avatarId={resource?.id}
      title={resource?.nameText}
      subtitle={subTitle} // female, 34 years
      hideReview={true}
      reviewValue={null}
      reviewCount={null}
      showPriceIndicator={false}
      priceIndicator={null}
      address={null}
      showAddress={false}
      onPress={() => {
        if (!ignorePress) {
          navigation.navigate(ROUTES.Patient_Detail_Doctor, { item: resource });
        }
      }}
    />
  );
};

export default PatientCard;
