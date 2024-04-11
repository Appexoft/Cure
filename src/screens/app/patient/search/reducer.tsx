import {
  FAILURE,
  getFhirResponseData,
  getFhirTotal,
  REQUEST,
  SUCCESS,
} from '../../../../rootStore/action-utils';
import { apiService } from '../../../../services';
import {
  API_ADDRESS,
  API_CODEABLE_CONCEPTS,
  API_SEARCH,
} from '../../../../services/api/ApiConstants';
import { TableSearchDto } from '../../../../utils/domainEntities';

export const BASE_ACTION = 'patient/search';

export const ACTION_TYPES = {
  SEARCH_DATA: `${BASE_ACTION}/SEARCH_DATA`,
  GET_CATEGORIES: `${BASE_ACTION}/GET_CATEGORIES`,
  GET_SUB_CATEGORIES: `${BASE_ACTION}/GET_SUB_CATEGORIES`,
  GET_CITIES: `${BASE_ACTION}/GET_CITIES`,

  SET_FILTERS: `${BASE_ACTION}/SET_FILTERS`,
  SET_FILTER_NAME: `${BASE_ACTION}/SET_FILTER_NAME`,
  SET_FILTER_CATEGORY: `${BASE_ACTION}/SET_FILTER_CATEGORY`,
  SET_FILTER_SUB_CATEGORY: `${BASE_ACTION}/SET_FILTER_SUB_CATEGORY`,
  SET_FILTER_PRICE: `${BASE_ACTION}/SET_FILTER_PRICE`,
  SET_FILTER_LOCATION_NEARBY: `${BASE_ACTION}/SET_FILTER_LOCATION_NEARBY`,
  SET_FILTER_LOCATION_SPECIFIC: `${BASE_ACTION}/SET_FILTER_LOCATION_SPECIFIC`,

  EXPORT: `${BASE_ACTION}/EXPORT`,

  RESET: `${BASE_ACTION}/RESET`,
};

const INIT_STATE = {
  loading: false,
  errorMessage: null,
  updating: false,
  updateSuccess: false,

  categories: [],
  categoriesTotalItems: 0,

  subCategories: [],
  subCategoriesTotalItems: 0,

  doctors: [],
  doctorsTotalItems: 0,

  services: [],
  servicesTotalItems: 0,

  hospitals: [],
  hospitalsTotalItems: 0,

  cities: [],
  citiesTotalItems: 0,

  filterObj: {},
};

export default (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_CATEGORIES):
    case REQUEST(ACTION_TYPES.GET_SUB_CATEGORIES):
    case REQUEST(ACTION_TYPES.GET_CITIES):
    case REQUEST(ACTION_TYPES.SEARCH_DATA):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };

    case FAILURE(ACTION_TYPES.GET_CATEGORIES):
    case FAILURE(ACTION_TYPES.GET_SUB_CATEGORIES):
    case FAILURE(ACTION_TYPES.GET_CITIES):
    case FAILURE(ACTION_TYPES.SEARCH_DATA):
      return {
        ...state,
        errorMessage: action.payload.data,
        updateSuccess: false,
        loading: false,
      };

    case SUCCESS(ACTION_TYPES.GET_CATEGORIES):
      return {
        ...state,
        loading: false,
        categories: action.payload.data,
        categoriesTotalItems:
          parseInt(action.payload.headers['x-total-count'], 10) || 0,
      };

    case SUCCESS(ACTION_TYPES.GET_SUB_CATEGORIES):
      return {
        ...state,
        loading: false,
        subCategories: action.payload.data,
        subCategoriesTotalItems:
          parseInt(action.payload.headers['x-total-count'], 10) || 0,
      };

    case SUCCESS(ACTION_TYPES.GET_CITIES):
      return {
        ...state,
        loading: false,
        cities: action.payload.data,
        citiesTotalItems:
          parseInt(action.payload.headers['x-total-count'], 10) || 0,
      };

    case SUCCESS(ACTION_TYPES.SEARCH_DATA):
      return {
        ...state,
        loading: false,
        doctors: action.payload.data?.practitioners,
        doctorsTotalItems: action.payload.data?.totalPractitioners || 0,
        services: action.payload.data?.practitionerRoles,
        servicesTotalItems: action.payload.data?.totalPractitionerRoles || 0,
        hospitals: action.payload.data?.organizations,
        hospitalsTotalItems: action.payload.data?.totalOrganizations || 0,
      };

    case ACTION_TYPES.SET_FILTERS:
      return { ...state, filterObj: action.payload.data };

    case ACTION_TYPES.RESET:
      return {
        ...INIT_STATE,
      };

    default:
      return { ...state };
  }
};

// Actions handling

export const searchData = (search: any) => ({
  type: ACTION_TYPES.SEARCH_DATA,
  payload: apiService.makePOSTLongRequestPromise(`${API_SEARCH}/all`, search),
});

export const setFilters = (data: string) => ({
  type: ACTION_TYPES.SET_FILTERS,
  payload: { data },
});

export const getCategories = (search: TableSearchDto) => ({
  type: ACTION_TYPES.GET_CATEGORIES,
  payload: apiService.makePOSTLongRequestPromise(
    `${API_CODEABLE_CONCEPTS}/findAllWithSearch`,
    search,
  ),
});

export const getSubCategories = (search: TableSearchDto) => ({
  type: ACTION_TYPES.GET_SUB_CATEGORIES,
  payload: apiService.makePOSTLongRequestPromise(
    `${API_CODEABLE_CONCEPTS}/findAllWithSearch`,
    search,
  ),
});

export const getCities = () => ({
  type: ACTION_TYPES.GET_CITIES,
  payload: apiService.makeGETRequestPromise(`${API_ADDRESS}/getCities`),
});

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
