import {
  FAILURE,
  REQUEST,
  SUCCESS,
} from '../../../../../rootStore/action-utils';
import { API_PRACTITIONER } from '../../../../../services/api/ApiConstants';
import { apiService } from '../../../../../services';
import { SetFavoriteDto } from '../../../../../utils/domainEntities';
import { API_PATIENT } from '../../../../../services/api/ApiConstants';

export const BASE_ACTION = 'patient/doctorDetail';

export const ACTION_TYPES = {
  FETCH_ENTITY: `${BASE_ACTION}/FETCH_ENTITY`,
  UPDATE_FAVORITES: `${BASE_ACTION}/UPDATE_FAVORITES`,

  EXPORT: `${BASE_ACTION}/EXPORT`,

  RESET: `${BASE_ACTION}/RESET`,
};

const INIT_STATE = {
  loading: false,
  errorMessage: null,
  updating: false,
  updateSuccess: false,

  item: null,
};

export default (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ENTITY):
    case REQUEST(ACTION_TYPES.UPDATE_FAVORITES):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };

    case FAILURE(ACTION_TYPES.FETCH_ENTITY):
    case FAILURE(ACTION_TYPES.UPDATE_FAVORITES):
      return {
        ...state,
        errorMessage: action.payload.error.data,
        updateSuccess: false,
        loading: false,
      };

    case SUCCESS(ACTION_TYPES.FETCH_ENTITY):
      return {
        ...state,
        loading: false,
        item: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.UPDATE_FAVORITES):
      return {
        ...state,
        loading: false,
        item: action.payload.data,
        updateSuccess: true,
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

export const fetchEntity = (id: string) => ({
  type: ACTION_TYPES.FETCH_ENTITY,
  payload: apiService.makeGETRequestPromise(`${API_PRACTITIONER}/${id}`),
});

export const updateFavorites = (update: SetFavoriteDto) => ({
  type: ACTION_TYPES.UPDATE_FAVORITES,
  payload: apiService.makePOSTLongRequestPromise(
    `${API_PATIENT}/favorite/update`,
    update,
  ),
});

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
