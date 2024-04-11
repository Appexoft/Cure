import {
  FAILURE,
  REQUEST,
  SUCCESS,
} from '../../../../../../../rootStore/action-utils';
import { apiService } from '../../../../../../../services';
import {
  API_PRACTITIONER,
  API_PRACTITIONER_ROLE,
} from '../../../../../../../services/api/ApiConstants';

export const BASE_ACTION = 'doctor/services/create/practitionerRole';

export const ACTION_TYPES = {
  FETCH_PRACTITIONER: `${BASE_ACTION}/FETCH_PRACTITIONER`,
  FETCH_SERVICES: `${BASE_ACTION}/FETCH_SERVICES`,
  CREATE_PRACTITIONER_ROLE: `${BASE_ACTION}/CREATE_PRACTITIONER_ROLE`,

  EXPORT: `${BASE_ACTION}/EXPORT`,
  RESET: `${BASE_ACTION}/RESET`,
};

const INIT_STATE = {
  loading: false,
  errorMessage: null,
  updating: false,
  updateSuccess: false,

  practitionerRole: null,

  services: [],
  servicesTotalItems: 0,

  items: [],
  totalItems: 0,
};

export default (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_PRACTITIONER):
    case REQUEST(ACTION_TYPES.FETCH_SERVICES):
    case REQUEST(ACTION_TYPES.CREATE_PRACTITIONER_ROLE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };

    case FAILURE(ACTION_TYPES.FETCH_PRACTITIONER):
    case FAILURE(ACTION_TYPES.FETCH_SERVICES):
    case FAILURE(ACTION_TYPES.CREATE_PRACTITIONER_ROLE):
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
    case SUCCESS(ACTION_TYPES.CREATE_PRACTITIONER_ROLE):
      return {
        ...state,
        loading: false,
        updateSuccess: true,
        practitionerRole: action.payload.data,
      };

    case SUCCESS(ACTION_TYPES.FETCH_SERVICES):
      return {
        ...state,
        loading: false,
        services: action.payload.data,
        servicesTotalItems:
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

export const fetchPractitioner = (id: string) => ({
  type: ACTION_TYPES.FETCH_PRACTITIONER,
  payload: apiService.makeGETRequestPromise(`${API_PRACTITIONER}/${id}`),
});

export const fetchServicesOfPractitioner = (id: bigint) => ({
  type: ACTION_TYPES.FETCH_SERVICES,
  payload: apiService.makeGETRequestPromise(
    `${API_PRACTITIONER_ROLE}/getServicesOfPractitioner/${id}`,
  ),
});

export const createPractitionerRole = (data: any) => ({
  type: ACTION_TYPES.CREATE_PRACTITIONER_ROLE,
  payload: apiService.makePOSTLongRequestPromise(
    `${API_PRACTITIONER_ROLE}/create`,
    data,
  ),
});

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
