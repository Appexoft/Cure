import { FAILURE, REQUEST, SUCCESS } from '../../../../rootStore/action-utils';
import {
  API_APPOINTMENT,
  API_PRACTITIONER,
  API_PROFILE_CREDENTIALS,
} from '../../../../services/api/ApiConstants';
import { apiService } from '../../../../services';
import { TableSearchDto } from '../../../../utils/domainEntities';

export const BASE_ACTION = 'doctor/home';

export const ACTION_TYPES = {
  FETCH_PRACTITIONER: `${BASE_ACTION}/FETCH_PRACTITIONER`,
  FETCH_APPOINTMENTS: `${BASE_ACTION}/FETCH_APPOINTMENTS`,

  EXPORT: `${BASE_ACTION}/EXPORT`,

  RESET: `${BASE_ACTION}/RESET`,
};

const INIT_STATE = {
  loading: false,
  errorMessage: null,
  updating: false,
  updateSuccess: false,

  appointments: [],
  appointmentsTotalItems: 0,

  practitioner: null,
};

export default (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_PRACTITIONER):
    case REQUEST(ACTION_TYPES.FETCH_APPOINTMENTS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };

    case FAILURE(ACTION_TYPES.FETCH_PRACTITIONER):
    case FAILURE(ACTION_TYPES.FETCH_APPOINTMENTS):
      return {
        ...state,
        errorMessage: action.payload.error.data,
        updateSuccess: false,
        loading: false,
      };

    case SUCCESS(ACTION_TYPES.FETCH_PRACTITIONER):
      return {
        ...state,
        loading: false,
        practitioner: action.payload.data,
      };

    case SUCCESS(ACTION_TYPES.FETCH_APPOINTMENTS):
      return {
        ...state,
        loading: false,
        appointments: action.payload.data,
        appointmentsTotalItems:
          parseInt(action.payload.headers['x-total-count'], 10) || 0,
      };

    case ACTION_TYPES.RESET:
      return {
        ...INIT_STATE,
      };

    default:
      return { ...state };
  }
};

// Actions handling

export const fetchPractitioner = (userId: string) => ({
  type: ACTION_TYPES.FETCH_PRACTITIONER,
  payload: apiService.makeGETRequestPromise(
    `${API_PRACTITIONER}/getByUser/${userId}`,
  ),
});

export const fetchAppointments = (search: TableSearchDto) => ({
  type: ACTION_TYPES.FETCH_APPOINTMENTS,
  payload: apiService.makePOSTLongRequestPromise(
    `${API_APPOINTMENT}/findAllWithSearch`,
    search,
  ),
});

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
