import * as React from 'react';
import { ImageEntityType } from '../../../../../../utils/entityUtils';
import { getQualificationForHospital } from '../../../../../../utils/fhir/fhirTypes';
import { GenericListCard } from '@screens/app/patient/detail/cards/common/GenericListCard';
import { IOrganization } from '../../../../../../utils/domainEntities';
import ROUTES from '../../../../../../utils/routes';
import NavigationService from '@navigation/common/NavigationService';

type HospitalListEntryType = {
  resource: IOrganization;
  navigation: any;
  isSelected?: boolean;
  ignorePress?: boolean;
  onPress?: (value: IOrganization) => void;
};

const HospitalCard = ({
  resource,
  isSelected,
  ignorePress,
  onPress,
}: HospitalListEntryType) => {

  return (
    <GenericListCard
      resource={resource}
      entityType={ImageEntityType.HOSPITAL}
      avatarId={resource?.id}
      isSelected={isSelected}
      title={resource?.nameText}
      subtitle={getQualificationForHospital(resource)}
      reviewValue={resource?.reviewValue}
      reviewCount={resource?.reviewCountTotal}
      priceIndicator={resource?.priceIndicator}
      showPriceIndicator={true}
      address={resource?.mainAddress}
      showAddress={true}
      border={true}
      onPress={() => {
        if (onPress) {
          onPress(resource);
        } else {
          // @ts-ignore
          if (!ignorePress) {
            NavigationService.navigate(ROUTES.Patient_Detail_Doctor, {
              item: resource,
            });
          }
        }
      }}
    />
  );
};

export default HospitalCard;
