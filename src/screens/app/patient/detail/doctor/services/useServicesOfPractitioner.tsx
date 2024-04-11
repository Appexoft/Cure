import { useQuery } from 'react-query';
import { apiService } from '../../../../../../services';
import { API_PRACTITIONER_ROLE } from '../../../../../../services/api/ApiConstants';

const getServicesOfPractitioner = async (practitionerId: bigint) => {
  const result = await apiService.makeGETRequestReactQuery(
    `${API_PRACTITIONER_ROLE}/getServicesOfPractitioner/${practitionerId}`,
  );
  return result?.success?.data;
};

const useServicesOfPractitioner = (id: bigint) =>
  useQuery(['servicesOfPractitioner', id], () => getServicesOfPractitioner(id));
export default useServicesOfPractitioner;
