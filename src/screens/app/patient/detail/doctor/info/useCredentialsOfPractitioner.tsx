import { useQuery } from 'react-query';
import { apiService } from '../../../../../../services';
import { API_PROFILE_CREDENTIALS } from '../../../../../../services/api/ApiConstants';
import {
  EntityType,
  TableSearchDto,
} from '../../../../../../utils/domainEntities';

const getCredentialsOfPractitioner = async (practitionerId: bigint) => {
  let data: TableSearchDto = {
    sortBy: [{ id: 'createdDate', desc: true }],
    byEntity: {
      entityType: EntityType.PRACTITIONER_ENTITY,
      id: practitionerId,
      ids: [],
    },
    pageSize: 999999,
    pageIndex: 0,
  };

  const response = await apiService.makePOSTSearchReactQueryRequest(
    `${API_PROFILE_CREDENTIALS}/findAllWithSearch`,
    data,
  );
  console.log('reviews response', response);
  return response;
};

const useCredentialsOfPractitioner = (id: bigint) =>
  useQuery(['credentialsOfPractitioner', id], () =>
    getCredentialsOfPractitioner(id),
  );
export default useCredentialsOfPractitioner;
