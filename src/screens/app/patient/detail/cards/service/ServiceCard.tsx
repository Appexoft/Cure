import React from 'react';
import { ImageEntityType } from '../../../../../../utils/entityUtils';
import {
  IOrganization,
  IPractitionerRole,
} from '../../../../../../utils/domainEntities';
import { GenericListCard } from '@screens/app/patient/detail/cards/common/GenericListCard';
import {
  getNameForPractitionerRole,
  getQualificationForPractitionerRole,
} from '../../../../../../utils/fhir/fhirTypes';
import NavigationService from '@navigation/common/NavigationService';
import ROUTES from '../../../../../../utils/routes';

type Props = {
  resource: IPractitionerRole;
  isSelected?: boolean;
  ignorePress?: boolean;
  onPress?: (value: IOrganization) => void;
  isFirstElement: boolean;
};
export const ServiceCard: React.FC<Props> = React.memo(
  ({ resource, isSelected, ignorePress, onPress }) => {
    return (
      <GenericListCard
        resource={resource}
        entityType={ImageEntityType.PRACTITIONER_ROLE}
        avatarId={resource?.id}
        isSelected={isSelected}
        title={getNameForPractitionerRole(resource)}
        subtitle={getQualificationForPractitionerRole(resource)}
        reviewValue={resource?.reviewValue}
        reviewCount={resource?.reviewCountTotal}
        priceIndicator={resource?.priceIndicator}
        showPriceIndicator={true}
        address={resource?.mainAddress}
        showAddress={false}
        border={true}
        onPress={() => {
          if (onPress) {
            onPress(resource);
          } else {
            // @ts-ignore
            if (!ignorePress) {
              NavigationService.navigate(ROUTES.Patient_Detail_Service, {
                item: resource,
              }); // tood fix this
            }
          }
          // @ts-ignore
          // navigation.navigate(ROUTES.Patient_Detail_Doctor, { item: resource });
        }}
      />
    );
  },
);
