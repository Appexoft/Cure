import { useQuery } from 'react-query';
import { apiService } from '../../../../../services';
import {
  API_CODEABLE_CONCEPTS,
  API_IMAGE,
} from '../../../../../services/api/ApiConstants';

const fetchMedicalSubField = async (parentId: string) => {
  const response = await apiService.makeGETRequestReactQuery(
    `${API_IMAGE}/findMedicalSubFieldsConcepts/${parentId}`,
  );
  return response?.success?.data;
};

export const useFetchMedicalSubField = (parentId: string) =>
  useQuery(['fetchMedicalSubField', parentId], () =>
    fetchMedicalSubField(parentId),
  );
// export default useGetUploadLink;

const fetchMedicalFields = async () => {
  const response = await apiService.makeGETRequestReactQuery(
    `${API_CODEABLE_CONCEPTS}/getMedicalFields`,
  );
  return response?.success?.data;
};

export const useFetchMedicalFields = () =>
  useQuery(['fetchMedicalFields'], () => fetchMedicalFields());
// export default useGetUploadLink;
