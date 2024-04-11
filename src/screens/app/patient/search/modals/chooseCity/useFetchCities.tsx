import { useQuery } from 'react-query';
import { API_ADDRESS } from '../../../../../../services/api/ApiConstants';
import { apiService } from '../../../../../../services';

const fetchCities = async () => {
  const response = await apiService.makeGETRequestReactQuery(
    `${API_ADDRESS}/getCities`,
  );
  return response?.success?.data;
};

export const useFetchCities = () =>
  useQuery(['fetchCities'], () => fetchCities());
// export default useGetUploadLink;
