import {
  FAILURE,
  getFhirResponseData,
  getFhirTotal,
  REQUEST,
  SUCCESS,
} from '../../../../../rootStore/action-utils';
import {
  API_APPOINTMENT,
  API_PRACTITIONER,
} from '../../../../../services/api/ApiConstants';
import { apiService } from '../../../../../services';
import { ICreateAppointment } from '@screens/app/patient/appointments/createAppointment/create.component';

export const BASE_ACTION = 'patient/appointment/create';

export const ACTION_TYPES = {
  GET_PRACTITIONER: `${BASE_ACTION}/GET_PRACTITIONER`,
  GET_PRACTITIONER_AVAILABLE_TIME: `${BASE_ACTION}/GET_PRACTITIONER_AVAILABLE_TIME`,
  SEARCH_DATA: `${BASE_ACTION}/SEARCH_DATA`,
  CREATE: `${BASE_ACTION}/CREATE`,

  EXPORT: `${BASE_ACTION}/EXPORT`,

  RESET: `${BASE_ACTION}/RESET`,
};

const INIT_STATE = {
  loading: false,
  errorMessage: null,
  updating: false,
  updateSuccess: false,

  practitioner: null,
  practitionerAvailableTime: [],

  created: null,

  items: [],
  totalItems: 0,
};

export default (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_PRACTITIONER):
    case REQUEST(ACTION_TYPES.GET_PRACTITIONER_AVAILABLE_TIME):
    case REQUEST(ACTION_TYPES.SEARCH_DATA):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE):
      return {
        ...state,
        created: null,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };

    case FAILURE(ACTION_TYPES.GET_PRACTITIONER):
    case FAILURE(ACTION_TYPES.GET_PRACTITIONER_AVAILABLE_TIME):
    case FAILURE(ACTION_TYPES.SEARCH_DATA):
    case FAILURE(ACTION_TYPES.CREATE):
      return {
        ...state,
        errorMessage: action.payload.error.data,
        updateSuccess: false,
        loading: false,
      };

    case SUCCESS(ACTION_TYPES.GET_PRACTITIONER):
      return {
        ...state,
        loading: false,
        practitioner: action.payload.success.data,
      };
    case SUCCESS(ACTION_TYPES.GET_PRACTITIONER_AVAILABLE_TIME):
      return {
        ...state,
        loading: false,
        practitionerAvailableTime: action.payload.success.data,
      };
    case SUCCESS(ACTION_TYPES.SEARCH_DATA):
      return {
        ...state,
        loading: false,
        items: action.payload.success.data?.entries,
        totalItems: action.payload.success.data?.total,
      };

    case SUCCESS(ACTION_TYPES.CREATE):
      return {
        ...state,
        loading: false,
        created: action.payload.success.data,
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

export const getPractitioner = (id: string) => ({
  type: ACTION_TYPES.GET_PRACTITIONER,
  payload: apiService.makeGETRequestPromise(`${API_PRACTITIONER}/${id}`),
});

export const getPractitionerFutureAvailableTimeSlots = (
  practitionerId: string,
  practitionerRoleId: string,
  date: Date,
) => ({
  type: ACTION_TYPES.GET_PRACTITIONER_AVAILABLE_TIME,
  payload: apiService.makeGETRequestPromise(
    `${API_PRACTITIONER}/getPractitionerAvailableTimeSlots/${practitionerId}/${practitionerRoleId}/${date.getTime()}`,
  ),
});

export const searchData = (id: string) => ({
  type: ACTION_TYPES.SEARCH_DATA,
  payload: apiService.makeGETRequestPromise(
    `${API_PRACTITIONER}/getServicesOfPractitioner/${id}`,
  ),
});

export const create = (data: ICreateAppointment) => ({
  type: ACTION_TYPES.CREATE,
  payload: apiService.makePOSTRequest(`${API_APPOINTMENT}/create`, data),
});

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
