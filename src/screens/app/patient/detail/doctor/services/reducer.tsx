import {
  FAILURE,
  getFhirResponseData,
  getFhirTotal,
  REQUEST,
  SUCCESS,
} from '../../../../../../rootStore/action-utils';
import { API_PRACTITIONER } from '../../../../../../services/api/ApiConstants';
import { apiService } from '../../../../../../services';

export const BASE_ACTION = 'patient/doctorDetail/services';

export const ACTION_TYPES = {
  SEARCH_DATA: `${BASE_ACTION}/SEARCH_DATA`,

  EXPORT: `${BASE_ACTION}/EXPORT`,

  RESET: `${BASE_ACTION}/RESET`,
};

const INIT_STATE = {
  loading: false,
  errorMessage: null,
  updating: false,
  updateSuccess: false,

  items: [],
  totalItems: 0,
};

export default (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.SEARCH_DATA):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };

    case FAILURE(ACTION_TYPES.SEARCH_DATA):
      return {
        ...state,
        errorMessage: action.payload.error.data,
        updateSuccess: false,
        loading: false,
      };

    case SUCCESS(ACTION_TYPES.SEARCH_DATA):
      return {
        ...state,
        loading: false,
        items: action.payload.success.data?.entries,
        totalItems: action.payload.success.data?.total,
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

export const searchData = (id: string) => ({
  type: ACTION_TYPES.SEARCH_DATA,
  payload: apiService.makeGETRequestPromise(
    `${API_PRACTITIONER}/getServicesOfPractitioner/${id}`,
  ),
});

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
