import { useQuery } from 'react-query';
import { apiService } from '../../../../../../services';
import {
  API_APPOINTMENT,
} from '../../../../../../services/api/ApiConstants';
import {
  EntityType,
  TableSearchDto,
} from '../../../../../../utils/domainEntities';

const getAppointments = async (practitionerId: bigint) => {
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
    `${API_APPOINTMENT}/findAllWithSearch`,
    data,
  );
  console.log('appointments response', response);
  return response;
};

const useGetAppointments = (practitionerId: bigint, enabled: boolean) =>
  useQuery(
    ['getAppointments', practitionerId],
    () => getAppointments(practitionerId),
    {
      enabled: enabled,
    },
  );
export default useGetAppointments;
