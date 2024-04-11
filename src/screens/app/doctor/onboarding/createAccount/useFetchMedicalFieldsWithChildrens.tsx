import { useQuery } from 'react-query';
import { apiService } from '../../../../../services';
import { API_CODEABLE_CONCEPTS } from '../../../../../services/api/ApiConstants';

const fetchMedicalFieldsWithChildrens = async () => {
  const response = await apiService.makeGETRequestReactQuery(
    `${API_CODEABLE_CONCEPTS}/getMedicalFieldsWithChildrens`,
  );
  return response?.success?.data;
};

export const useFetchMedicalFieldsWithChildrens = () =>
  useQuery(['useFetchMedicalFieldsWithChildrens'], () =>
    fetchMedicalFieldsWithChildrens(),
  );
