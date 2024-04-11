import { useQuery } from 'react-query';
import { apiService } from '../../../../services';
import { API_PATIENT } from '../../../../services/api/ApiConstants';
import { EntityType, TableSearchDto } from '../../../../utils/domainEntities';

const fetchPatients = async (practitionerId: bigint) => {
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
    `${API_PATIENT}/findAllWithSearch`,
    data,
  );
  return response;
};

export const useFetchPatients = (practitionerId: bigint) =>
  useQuery(['useFetchPatients'], () => fetchPatients(practitionerId));
