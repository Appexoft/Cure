import {
  FAILURE,
  REQUEST,
  SUCCESS,
} from '../../../../rootStore/action-utils';
import { API_APPOINTMENT } from '../../../../services/api/ApiConstants';
import { apiService } from '../../../../services';

export const BASE_ACTION = 'patient/appointment/list';

export const ACTION_TYPES = {
  GET_APPOINTMENTS: `${BASE_ACTION}/GET_APPOINTMENTS`,
  SET_STATUS: `${BASE_ACTION}/SET_STATUS`,
};

const INIT_STATE = {
  loading: false,
  errorMessage: null,
  updating: false,
  updateSuccess: false,

  items: [],
};

export default (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_APPOINTMENTS):
      return {
        ...state,
        loading: true,
      };

    case FAILURE(ACTION_TYPES.GET_APPOINTMENTS):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.error.data,
      };

    case SUCCESS(ACTION_TYPES.GET_APPOINTMENTS):
      return {
        ...state,
        loading: false,
        items: action.payload.success.data,
      };

    case ACTION_TYPES.SET_STATUS:
      let appointments = state.items.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              status: action.payload.status,
              endDate: action.payload.endDate,
              startDate: action.payload.startDate,
            }
          : item,
      );
      console.log({ appointments });
      return {
        ...state,
        items: appointments,
      };

    default:
      return { ...state };
  }
};

export const getAppointments = (id: any) => ({
  type: ACTION_TYPES.GET_APPOINTMENTS,
  payload: apiService.makeGETRequestReactQuery(
    `${API_APPOINTMENT}/futureAppointmentsOfPatient/${id}`,
  ),
});

export const setAppointmentStatus = (
  id: any,
  status: string,
  endDate: Date,
  startDate: Date,
) => ({
  type: ACTION_TYPES.SET_STATUS,
  payload: {
    id,
    status,
    endDate,
    startDate,
  },
});
