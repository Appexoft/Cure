import { FAILURE, REQUEST, SUCCESS } from '../../../../rootStore/action-utils';
import { apiService } from '../../../../services';
import { API_PATIENT } from '../../../../services/api/ApiConstants';
import { SetFavoriteDto } from '../../../../utils/domainEntities';

export const BASE_ACTION = 'patient/favorites';

export const ACTION_TYPES = {
  FETCH_PRACTITIONER_FAVORITES: `${BASE_ACTION}/FETCH_PRACTITIONER_FAVORITES`,
  FETCH_PRACTITIONER_ROLE_FAVORITES: `${BASE_ACTION}/FETCH_PRACTITIONER_ROLE_FAVORITES`,
  FETCH_ORGANIZATION_FAVORITES: `${BASE_ACTION}/FETCH_ORGANIZATION_FAVORITES`,

  UPDATE_FAVORITES: `${BASE_ACTION}/UPDATE_FAVORITES`,

  RESET: `${BASE_ACTION}/RESET`,
};

const INIT_STATE = {
  loading: false,
  errorMessage: null,
  updating: false,
  updateSuccess: false,

  practitionerFavorites: [],
  practitionerFavoritesTotalItems: 0,

  practitionerRoleFavorites: [],
  practitionerRoleFavoritesTotalItems: 0,

  organizationsFavorites: [],
  organizationsFavoritesTotalItems: 0,
};

export default (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_PRACTITIONER_FAVORITES):
    case REQUEST(ACTION_TYPES.FETCH_PRACTITIONER_ROLE_FAVORITES):
    case REQUEST(ACTION_TYPES.FETCH_ORGANIZATION_FAVORITES):
    case REQUEST(ACTION_TYPES.UPDATE_FAVORITES):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };

    case FAILURE(ACTION_TYPES.FETCH_PRACTITIONER_FAVORITES):
    case FAILURE(ACTION_TYPES.FETCH_PRACTITIONER_ROLE_FAVORITES):
    case FAILURE(ACTION_TYPES.FETCH_ORGANIZATION_FAVORITES):
    case FAILURE(ACTION_TYPES.UPDATE_FAVORITES):
      return {
        ...state,
        errorMessage: action.payload.data,
        updateSuccess: false,
        loading: false,
      };

    case SUCCESS(ACTION_TYPES.FETCH_PRACTITIONER_FAVORITES):
      return {
        ...state,
        loading: false,
        practitionerFavorites: action.payload.data,
        practitionerFavoritesTotalItems:
          parseInt(action.payload.headers['x-total-count'], 10) || 0,
      };

    case SUCCESS(ACTION_TYPES.FETCH_PRACTITIONER_ROLE_FAVORITES):
      return {
        ...state,
        loading: false,
        practitionerRoleFavorites: action.payload.data,
        practitionerRoleFavoritesTotalItems:
          parseInt(action.payload.headers['x-total-count'], 10) || 0,
      };

    case SUCCESS(ACTION_TYPES.FETCH_ORGANIZATION_FAVORITES):
      return {
        ...state,
        loading: false,
        organizationsFavorites: action.payload.data,
        organizationsFavoritesTotalItems:
          parseInt(action.payload.headers['x-total-count'], 10) || 0,
      };

    case SUCCESS(ACTION_TYPES.UPDATE_FAVORITES):
      return {
        ...state,
        loading: false,
        updateSuccess: true,
        errorMessage: null,
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

export const fetchPractitionerFavorites = (patientId: number) => ({
  type: ACTION_TYPES.FETCH_PRACTITIONER_FAVORITES,
  payload: apiService.makeGETRequestPromise(
    `${API_PATIENT}/favorite/practitioners/${patientId}`,
  ),
});

export const fetchPractitionerRoleFavorites = (patientId: number) => ({
  type: ACTION_TYPES.FETCH_PRACTITIONER_ROLE_FAVORITES,
  payload: apiService.makeGETRequestPromise(
    `${API_PATIENT}/favorite/practitionerRoles/${patientId}`,
  ),
});

export const fetchOrganizationFavorites = (patientId: number) => ({
  type: ACTION_TYPES.FETCH_ORGANIZATION_FAVORITES,
  payload: apiService.makeGETRequestPromise(
    `${API_PATIENT}/favorite/organizations/${patientId}`,
  ),
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
