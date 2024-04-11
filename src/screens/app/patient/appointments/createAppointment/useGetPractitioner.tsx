import { useQuery } from 'react-query';
import { apiService } from '../../../../../services';
import { API_PRACTITIONER } from '../../../../../services/api/ApiConstants';

const getPractitioner = async (id: string) => {
  const response = await apiService.makeGETRequestReactQuery(`${API_PRACTITIONER}/${id}`);
  return response?.success?.data;
};

const useGetPractitioner = (id: string, enabled: boolean) =>
  useQuery(['getPractitioner', id], () => getPractitioner(id), {
    enabled: enabled,
  });
export default useGetPractitioner;
