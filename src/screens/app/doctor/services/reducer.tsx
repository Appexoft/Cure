import { FAILURE, REQUEST, SUCCESS } from '../../../../rootStore/action-utils';
import {
  API_ORGANISATION,
  API_PRACTITIONER,
  API_PROFILE_CREDENTIALS,
  API_SEARCH,
} from '../../../../services/api/ApiConstants';
import { apiService } from '../../../../services';
import {
  CreateOrganizationWithAdminDTO,
  IPractitionerRole,
  TableSearchDto,
} from '../../../../utils/domainEntities';
import { API_PRACTITIONER_ROLE } from '../../../../services/api/ApiConstants';

export const BASE_ACTION = 'doctor/services';

export const ACTION_TYPES = {
  FETCH_PRACTITIONER: `${BASE_ACTION}/FETCH_PRACTITIONER`,
  FETCH_SERVICES: `${BASE_ACTION}/FETCH_SERVICES`,
  FETCH_ALL_HOSPITALS: `${BASE_ACTION}/FETCH_ALL_HOSPITALS`,
  FETCH_PRACTITIONER_HOSPITALS: `${BASE_ACTION}/FETCH_PRACTITIONER_HOSPITALS`,
  CREATE_PRACTITIONER_ROLE: `${BASE_ACTION}/CREATE_PRACTITIONER_ROLE`,
  CREATE_ORGANISATION: `${BASE_ACTION}/CREATE_ORGANISATION`,

  EXPORT: `${BASE_ACTION}/EXPORT`,

  RESET: `${BASE_ACTION}/RESET`,
};

const INIT_STATE = {
  loading: false,
  loadingCrud: false,
  errorMessage: null,
  updating: false,
  updateSuccess: false,

  organisation: null,
  practitioner: null,
  practitionerRole: null,

  services: [],
  servicesTotalItems: 0,

  allHospitals: [],
  allHospitalsTotalItems: 0,

  practitionerHospitals: [],
  practitionerHospitalsTotalItems: 0,

  items: [],
  totalItems: 0,
};

export default (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.CREATE_PRACTITIONER_ROLE):
    case REQUEST(ACTION_TYPES.CREATE_ORGANISATION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loadingCrud: true,
      };
    case REQUEST(ACTION_TYPES.FETCH_PRACTITIONER):
    case REQUEST(ACTION_TYPES.FETCH_SERVICES):
    case REQUEST(ACTION_TYPES.FETCH_ALL_HOSPITALS):
    case REQUEST(ACTION_TYPES.FETCH_PRACTITIONER_HOSPITALS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };

    case FAILURE(ACTION_TYPES.CREATE_PRACTITIONER_ROLE):
    case FAILURE(ACTION_TYPES.CREATE_ORGANISATION):
      console.log('Error creating', action.payload);
      console.log('Error creating', action.payload[0]);
      console.log('Error creating', action.payload?.error);
      console.log('Error creating', action.payload?.error?.data);
      return {
        ...state,
        errorMessage: action.payload,
        updateSuccess: false,
        loadingCrud: false,
      };
    case FAILURE(ACTION_TYPES.FETCH_PRACTITIONER):
    case FAILURE(ACTION_TYPES.FETCH_SERVICES):
    case FAILURE(ACTION_TYPES.FETCH_ALL_HOSPITALS):
    case FAILURE(ACTION_TYPES.FETCH_PRACTITIONER_HOSPITALS):
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
      console.log("SUCCESS-createPractitionerRole");
      return {
        ...state,
        loadingCrud: false,
        updateSuccess: true,
        practitionerRole: action.payload.data,
      };

    case SUCCESS(ACTION_TYPES.CREATE_ORGANISATION):
      return {
        ...state,
        loadingCrud: false,
        updateSuccess: true,
        organisation: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_SERVICES):
      return {
        ...state,
        loading: false,
        services: action.payload.data,
        servicesTotalItems:
          parseInt(action.payload.headers['x-total-count'], 10) || 0,
      };

    case SUCCESS(ACTION_TYPES.FETCH_ALL_HOSPITALS):
      return {
        ...state,
        loading: false,
        allHospitals: action.payload.data,
        allHospitalsTotalItems:
          parseInt(action.payload.headers['x-total-count'], 10) || 0,
      };

    case SUCCESS(ACTION_TYPES.FETCH_PRACTITIONER_HOSPITALS):
      return {
        ...state,
        loading: false,
        practitionerHospitals: action.payload.data,
        practitionerHospitalsTotalItems:
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

export const fetchAllHospitals = (search: TableSearchDto) => ({
  type: ACTION_TYPES.FETCH_ALL_HOSPITALS,
  payload: apiService.makePOSTLongRequestPromise(
    `${API_ORGANISATION}/findAllWithSearch`,
    search,
  ),
});

export const fetchHospitalsOfPractitioner = (search: TableSearchDto) => ({
  type: ACTION_TYPES.FETCH_PRACTITIONER_HOSPITALS,
  payload: apiService.makePOSTLongRequestPromise(
    `${API_ORGANISATION}/findAllWithSearch`,
    search,
  ),
});

export const createOrganisation = (data: CreateOrganizationWithAdminDTO) => ({
  type: ACTION_TYPES.CREATE_ORGANISATION,
  payload: apiService.makePOSTLongRequestPromise(
    `${API_ORGANISATION}/withAdmin`,
    data,
  ),
});

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
