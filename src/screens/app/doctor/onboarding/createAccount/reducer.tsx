import { FAILURE, REQUEST, SUCCESS } from '../../../../../rootStore/action-utils';
import {
  API_CODEABLE_CONCEPTS,
  API_PATIENT,
  API_PRACTITIONER,
  API_PROFILE_CREDENTIALS,
} from '../../../../../services/api/ApiConstants';
import { apiService } from '../../../../../services';
import {
  IProfileCredentialDto,
  TableSearchDto,
  UpdatePractitionerProfessionDto,
  UpdatePractitionerStep1Dto,
} from '../../../../../utils/domainEntities';

export const BASE_ACTION = 'doctor/createAccount';

export const ACTION_TYPES = {
  FETCH_ENTITY: `${BASE_ACTION}/FETCH_ENTITY`,
  UPDATE_PRACTITIONER_PERS_DETAILS: `${BASE_ACTION}/UPDATE_PRACTITIONER_PERS_DETAILS`,
  UPDATE_PRACTITIONER_PROFESSION: `${BASE_ACTION}/UPDATE_PRACTITIONER_PROFESSION`,

  FETCH_PRACTITIONER_EDUCATION: `${BASE_ACTION}/FETCH_PRACTITIONER_EDUCATION`,
  ADD_PRACTITIONER_EDUCATION: `${BASE_ACTION}/ADD_PRACTITIONER_EDUCATION`,
  UPDATE_PRACTITIONER_EDUCATION: `${BASE_ACTION}/UPDATE_PRACTITIONER_EDUCATION`,
  DELETE_PRACTITIONER_EDUCATION: `${BASE_ACTION}/DELETE_PRACTITIONER_EDUCATION`,

  FETCH_PRACTITIONER_CERTIFICATES: `${BASE_ACTION}/FETCH_PRACTITIONER_CERTIFICATES`,
  ADD_PRACTITIONER_CERTIFICATES: `${BASE_ACTION}/ADD_PRACTITIONER_CERTIFICATES`,
  UPDATE_PRACTITIONER_CERTIFICATES: `${BASE_ACTION}/UPDATE_PRACTITIONER_CERTIFICATES`,
  DELETE_PRACTITIONER_CERTIFICATES: `${BASE_ACTION}/DELETE_PRACTITIONER_CERTIFICATES`,

  EXPORT: `${BASE_ACTION}/EXPORT`,

  RESET: `${BASE_ACTION}/RESET`,
};

const INIT_STATE = {
  loading: false,
  errorMessage: null,
  updating: false,
  updateSuccess: false,

  practitioner: null,

  educationItems: [],
  educationItemsTotalSize: 0,

  certificatesItems: [],
  certificatesItemsTotalSize: 0,
};

export default (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ENTITY):
    case REQUEST(ACTION_TYPES.UPDATE_PRACTITIONER_PERS_DETAILS):
    case REQUEST(ACTION_TYPES.UPDATE_PRACTITIONER_PROFESSION):
    case REQUEST(ACTION_TYPES.FETCH_PRACTITIONER_EDUCATION):
    case REQUEST(ACTION_TYPES.FETCH_PRACTITIONER_CERTIFICATES):
    case REQUEST(ACTION_TYPES.ADD_PRACTITIONER_EDUCATION):
    case REQUEST(ACTION_TYPES.ADD_PRACTITIONER_CERTIFICATES):
    case REQUEST(ACTION_TYPES.UPDATE_PRACTITIONER_EDUCATION):
    case REQUEST(ACTION_TYPES.UPDATE_PRACTITIONER_CERTIFICATES):
    case REQUEST(ACTION_TYPES.DELETE_PRACTITIONER_EDUCATION):
    case REQUEST(ACTION_TYPES.DELETE_PRACTITIONER_CERTIFICATES):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };

    case FAILURE(ACTION_TYPES.FETCH_ENTITY):
    case FAILURE(ACTION_TYPES.UPDATE_PRACTITIONER_PERS_DETAILS):
    case FAILURE(ACTION_TYPES.UPDATE_PRACTITIONER_PROFESSION):
    case FAILURE(ACTION_TYPES.FETCH_PRACTITIONER_EDUCATION):
    case FAILURE(ACTION_TYPES.FETCH_PRACTITIONER_CERTIFICATES):
    case FAILURE(ACTION_TYPES.ADD_PRACTITIONER_EDUCATION):
    case FAILURE(ACTION_TYPES.ADD_PRACTITIONER_CERTIFICATES):
    case FAILURE(ACTION_TYPES.UPDATE_PRACTITIONER_EDUCATION):
    case FAILURE(ACTION_TYPES.UPDATE_PRACTITIONER_CERTIFICATES):
    case FAILURE(ACTION_TYPES.DELETE_PRACTITIONER_EDUCATION):
    case FAILURE(ACTION_TYPES.DELETE_PRACTITIONER_CERTIFICATES):
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
        practitioner: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.UPDATE_PRACTITIONER_PERS_DETAILS):
      return {
        ...state,
        loading: false,
        practitioner: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_PRACTITIONER_EDUCATION):
      return {
        ...state,
        loading: false,
        educationItems: action.payload.data,
        educationItemsTotalSize:
          parseInt(action.payload.headers['x-total-count'], 10) || 0,
      };
    case SUCCESS(ACTION_TYPES.FETCH_PRACTITIONER_CERTIFICATES):
      return {
        ...state,
        loading: false,
        certificatesItems: action.payload.data,
        certificatesItemsTotalSize:
          parseInt(action.payload.headers['x-total-count'], 10) || 0,
      };
    case SUCCESS(ACTION_TYPES.ADD_PRACTITIONER_EDUCATION):
      return {
        ...state,
        loading: false,
        updateSuccess: true,
      };
    case SUCCESS(ACTION_TYPES.ADD_PRACTITIONER_CERTIFICATES):
      return {
        ...state,
        loading: false,
        updateSuccess: true,
      };
    case SUCCESS(ACTION_TYPES.UPDATE_PRACTITIONER_EDUCATION):
      return {
        ...state,
        loading: false,
        updateSuccess: true,
      };
    case SUCCESS(ACTION_TYPES.UPDATE_PRACTITIONER_CERTIFICATES):
      return {
        ...state,
        loading: false,
        updateSuccess: true,
      };
    case SUCCESS(ACTION_TYPES.DELETE_PRACTITIONER_EDUCATION):
      return {
        ...state,
        loading: false,
        updateSuccess: true,
      };
    case SUCCESS(ACTION_TYPES.DELETE_PRACTITIONER_CERTIFICATES):
      return {
        ...state,
        loading: false,
        updateSuccess: true,
      };
    case SUCCESS(ACTION_TYPES.UPDATE_PRACTITIONER_PROFESSION):
      return {
        ...state,
        loading: false,
        updateSuccess: true,
        practitioner: action.payload.data,
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

export const updatePractitionerPersonalDetails = (
  update: UpdatePractitionerStep1Dto,
) => ({
  type: ACTION_TYPES.UPDATE_PRACTITIONER_PERS_DETAILS,
  payload: apiService.makePOSTLongRequestPromise(
    `${API_PRACTITIONER}/onboarding/updatePersonalDetails`,
    update,
  ),
});

export const updatePractitionerProfession = (
  update: UpdatePractitionerProfessionDto,
) => ({
  type: ACTION_TYPES.UPDATE_PRACTITIONER_PROFESSION,
  payload: apiService.makePOSTLongRequestPromise(
    `${API_PRACTITIONER}/onboarding/updateProfession`,
    update,
  ),
});

export const fetchPractitionerEducation = (search: TableSearchDto) => ({
  type: ACTION_TYPES.FETCH_PRACTITIONER_EDUCATION,
  payload: apiService.makePOSTLongRequestPromise(
    `${API_PROFILE_CREDENTIALS}/findAllWithSearch`,
    search,
  ),
});

export const fetchPractitionerCertificate = (search: TableSearchDto) => ({
  type: ACTION_TYPES.FETCH_PRACTITIONER_CERTIFICATES,
  payload: apiService.makePOSTLongRequestPromise(
    `${API_PROFILE_CREDENTIALS}/findAllWithSearch`,
    search,
  ),
});

export const addPractitionerEducation = (data: IProfileCredentialDto) => ({
  type: ACTION_TYPES.ADD_PRACTITIONER_EDUCATION,
  payload: apiService.makePOSTLongRequestPromise(
    `${API_PROFILE_CREDENTIALS}/onboarding/addEducation`,
    data,
  ),
});

export const addPractitionerCertificates = (data: IProfileCredentialDto) => ({
  type: ACTION_TYPES.ADD_PRACTITIONER_CERTIFICATES,
  payload: apiService.makePOSTLongRequestPromise(
    `${API_PROFILE_CREDENTIALS}/onboarding/addCertificate`,
    data,
  ),
});

export const updatePractitionerEducation = (data: IProfileCredentialDto) => ({
  type: ACTION_TYPES.UPDATE_PRACTITIONER_EDUCATION,
  payload: apiService.makePUTRequestPromise(`${API_PROFILE_CREDENTIALS}`, data),
});

export const updatePractitionerCertificates = (
  data: IProfileCredentialDto,
) => ({
  type: ACTION_TYPES.UPDATE_PRACTITIONER_CERTIFICATES,
  payload: apiService.makePUTRequestPromise(`${API_PROFILE_CREDENTIALS}`, data),
});

export const deletePractitionerEducation = (data: IProfileCredentialDto) => ({
  type: ACTION_TYPES.DELETE_PRACTITIONER_EDUCATION,
  payload: apiService.makeDELETERequestPromise(
    `${API_PROFILE_CREDENTIALS}/${data?.id}`,
  ),
});

export const deletePractitionerCertificate = (data: IProfileCredentialDto) => ({
  type: ACTION_TYPES.DELETE_PRACTITIONER_CERTIFICATES,
  payload: apiService.makeDELETERequestPromise(
    `${API_PROFILE_CREDENTIALS}/${data?.id}`,
  ),
});

export const fetchPractitionerCertificates = (search: TableSearchDto) => ({
  type: ACTION_TYPES.FETCH_PRACTITIONER_CERTIFICATES,
  payload: apiService.makePOSTLongRequestPromise(
    `${API_PROFILE_CREDENTIALS}/findAllWithSearch`,
    search,
  ),
});

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
