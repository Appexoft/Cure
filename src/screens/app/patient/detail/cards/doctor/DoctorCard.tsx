import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ImageEntityType } from '../../../../../../utils/entityUtils';
import { GenericHLargeCard } from '@screens/app/patient/detail/cards/common/GenericHLargeCard';
import {
  getNameForPractitioner,
  getQualificationForPractitioner,
} from '../../../../../../utils/fhir/fhirTypes';
import ROUTES from '../../../../../../utils/routes';
import { IPractitioner } from '../../../../../../utils/domainEntities';

type DoctorElementProps = {
  practitioner: IPractitioner;
  isFirstElement: boolean;
};

export const DoctorCard: React.FC<DoctorElementProps> = React.memo(
  ({ isFirstElement, practitioner }) => {
    const navigation = useNavigation();

    return (
      <GenericHLargeCard
        resource={practitioner}
        entityType={ImageEntityType.PRACTITIONER}
        avatarId={practitioner?.id}
        avatarUrl={"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        title={getNameForPractitioner(practitioner)}
        subtitle={getQualificationForPractitioner(practitioner)}
        reviewValue={practitioner?.reviewValue}
        reviewCount={practitioner?.reviewCountTotal}
        priceIndicator={practitioner?.priceIndicator}
        showPriceIndicator={true}
        address={practitioner?.mainAddress}
        showAddress={true}
        hideReview={false}
        showBtn={false}
        border={true}
        onPress={() => {
          // @ts-ignore
          navigation.navigate(ROUTES.Patient_Detail_Doctor, {
            resource: practitioner,
          });
        }}
      />
    );
  },
);
