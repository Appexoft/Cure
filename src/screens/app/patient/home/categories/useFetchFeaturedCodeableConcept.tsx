import { useQuery } from 'react-query';
import { apiService } from '../../../../../services';
import {
  API_CODEABLE_CONCEPTS,
  API_IMAGE,
} from '../../../../../services/api/ApiConstants';
import { NULLABLE_TYPE } from '../../../../../utils/domainEntities';

const fetchFeaturedCodeableConcepts = async () => {
  const searchData = {
    pageIndex: 0,
    pageSize: 16,
    sortBy: [{ id: 'featuredOrder', desc: false }],
    filters: [{ id: 'isPublic', value: true }],
    nullableFilters: [{ id: 'featuredOrder', value: NULLABLE_TYPE.NOT_NULL }],
    byEntity: null,
  };
  const response = await apiService.makePOSTRequest(
    `${API_CODEABLE_CONCEPTS}/findAllWithSearch`,
    searchData,
  );
  return response?.success?.data;
};

export const useFetchFeaturedCodeableConcepts = () =>
  useQuery(['useFetchFeaturedCodeableConcepts'], () =>
    fetchFeaturedCodeableConcepts(),
  );
