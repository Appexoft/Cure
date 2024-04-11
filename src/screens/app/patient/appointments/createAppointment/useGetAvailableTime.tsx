import { useQuery } from 'react-query';
import { apiService } from '../../../../../services';
import { API_PRACTITIONER } from '../../../../../services/api/ApiConstants';

export const getPractitionerAvailableTimeSlots = async (
  practitionerId: string,
  practitionerRoleId: string,
  date: Date,
) => {
  const response = await apiService.makeGETRequestReactQuery(
    `${API_PRACTITIONER}/getPractitionerAvailableTimeSlots/${practitionerId}/${practitionerRoleId}/${date.getTime()}`,
  );
  console.log({ response });
  return response?.success?.data;
};

const useGetPractitionerAvailableTimeSlots = (
  practitionerId: string,
  practitionerRoleId: string,
  date: Date,
  enabled: boolean,
) =>
  useQuery(
    [
      'getPractitionerAvailableTimeSlots',
      practitionerId,
      practitionerRoleId,
      date,
    ],
    () =>
      getPractitionerAvailableTimeSlots(
        practitionerId,
        practitionerRoleId,
        date,
      ),
    {
      enabled: enabled,
    },
  );
export default useGetPractitionerAvailableTimeSlots;
