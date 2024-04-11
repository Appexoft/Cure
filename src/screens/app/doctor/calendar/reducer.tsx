import { FAILURE, REQUEST, SUCCESS } from '../../../../rootStore/action-utils';
import { API_APPOINTMENT } from '../../../../services/api/ApiConstants';
import { apiService } from '../../../../services';
import { TableSearchDto } from '../../../../utils/domainEntities';

export const BASE_ACTION = 'doctor/calendar';

export const ACTION_TYPES = {
  FETCH_APPOINTMENTS: `${BASE_ACTION}/FETCH_APPOINTMENTS`,

  RESET: `${BASE_ACTION}/RESET`,
};

const INIT_STATE = {
  items: [],
  totalItems: 0,

  loading: false,
  errorMessage: null,
  updating: false,
  updateSuccess: false,
};

export default (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_APPOINTMENTS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };

    case FAILURE(ACTION_TYPES.FETCH_APPOINTMENTS):
      return {
        ...state,
        errorMessage: action.payload.error.data,
        updateSuccess: false,
        loading: false,
      };

    case SUCCESS(ACTION_TYPES.FETCH_APPOINTMENTS):
      return {
        ...state,
        loading: false,
        items: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10) || 0,
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
