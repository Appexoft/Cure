import { useQuery } from 'react-query';
import { apiService } from '../../../../../../services';
import { API_REVIEWS } from '../../../../../../services/api/ApiConstants';
import {
  EntityType,
  TableSearchDto,
} from '../../../../../../utils/domainEntities';

const getReviewsOfPractitioner = async (practitionerId: bigint) => {
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
    `${API_REVIEWS}/findAllWithSearch`,
    data,
  );
  return response;
};

const useReviewsOfPractitioner = (id: bigint) =>
  useQuery(['reviewsOfPractitioner', id], () => getReviewsOfPractitioner(id));
export default useReviewsOfPractitioner;
