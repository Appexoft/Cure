import { useQuery } from 'react-query';
import { apiService } from '../../../../../../services';
import { API_APPOINTMENT } from '../../../../../../services/api/ApiConstants';

const getAppointments = async (patientId: string) => {
  const response = await apiService.makeGETRequestReactQuery(
    `${API_APPOINTMENT}/futureAppointmentsOfPatient/${patientId}`,
  );
  return response?.success?.data;
};

const useGetAppointments = (patientId: string, enabled: boolean) =>
  useQuery(['getAppointments', patientId], () => getAppointments(patientId), {
    enabled: enabled,
  });
export default useGetAppointments;
