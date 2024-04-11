import axios, { AxiosResponse } from 'axios';
import { SUCCESS } from '../../rootStore/action-utils';
import { Auth } from '@aws-amplify/auth';

export const CONTENT_TYPE_VALUE = 'application/json';

// --- FUNCTIONS

export const DEFAULT_TIMEOUT = 20 * 60 * 1000; // 20 minute(s)
export const DEBUG = true;

class ApiService {
  token = '';
  apiPath = '';

  dispatchSuccess = (data, action, dispatch) => {
    console.log('dispatchSuccess');
    dispatch({
      type: SUCCESS(action),
      payload: data,
    });
  };

  setToken = (token: string) => {
    if (token) {
      this.token = token;
    }
  };

  getToken = () => {
    return this.token;
  };

  init = (backendUrl: string) => {
    this.apiPath = backendUrl;
    console.log(`Init axios backend url - ${backendUrl}`);
    axios.create({
      baseURL: backendUrl,
      responseType: 'json',
      headers: {
        'Content-Type': CONTENT_TYPE_VALUE,
      },
    });
  };

  refreshToken = () => {
    try {
      Auth.currentSession()
        .then((data) => {
          const tokenExp = data?.getAccessToken()?.getExpiration();
          if (tokenExp) {
            const d = new Date(0);
            d.setUTCSeconds(tokenExp);
            console.log(
              'Successfully refreshed token. Will expire next',
              d.toString(),
            );
          }
        })
        .catch((err) => {
          console.error('Failed to refresh token', err);
        });
    } catch (err) {
      console.error('Failed to refresh token', err);
    }
  };

  getAuthHeaders = () => {
    this.refreshToken();

    if (this.token) {
      return {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };
    }

    return { headers: {} };
  };

  makeGETRequestPromise = (path: string) => {
    return axios
      .get(`${this.apiPath}${path}`, this.getAuthHeaders())
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  };

  /**
   * Will make a GET request - TODO this one does not return a promise, hence cannot work with redux
   * @param path
   */
  makeGETRequestReactQuery = (path: string) => {
    return this.formatResponse(
      axios
        .get(`${this.apiPath}${path}`, this.getAuthHeaders())
        .then(function (response) {
          return response;
        })
        .catch(function (error) {
          return error;
        }),
    );
  };

  /**
   * Will make a GET request
   * @param path
   * @param page    - current page
   * @param size    - size
   * @param sort    - sort
   * @param search    - search criteria
   * @param extraRequestParams    - extraRequestParams
   */
  makeGETRequestPromise = (
    path: string,
    page: number,
    size: number,
    sort: string,
    search: string,
    extraRequestParams: any,
  ) => {
    try {
      let requestUrl = path;
      const pageAdjusted = page;

      if (sort) {
        requestUrl = `${requestUrl}?page=${pageAdjusted}&size=${size}&sort=${sort}&cacheBuster=${new Date().getTime()}`;
      } else {
        requestUrl = `${requestUrl}?cacheBuster=${new Date().getTime()}`;
      }

      if (search) {
        requestUrl = `${requestUrl}&query=${search || ''}`;
      }

      if (extraRequestParams) {
        requestUrl = `${requestUrl}&${extraRequestParams}`;
      }

      const opts = this.getAuthHeaders();
      opts.timeout = DEFAULT_TIMEOUT; // 20 minute(s)
      console.log('Axios GET call: ' + `${this.apiPath}${requestUrl}`);
      return axios
        .get(`${this.apiPath}${requestUrl}`, opts)
        .catch(function (error) {
          console.log('HTTP error', error);
        });
    } catch (e) {
      console.log('Failed to make HTTP GET call', e);
      console.error('Failed to make HTTP GET call', e);
      return null;
    }
  };

  /**
   * Will make a PUT request
   * @param path
   * @param dataBody
   */
  makePUTRequestPromise = (path, dataBody) => {
    const opts = this.getAuthHeaders();
    opts.timeout = DEFAULT_TIMEOUT;
    return axios.put(`${this.apiPath}${path}`, dataBody, opts);
  };

  /**
   * Will make a post request
   * @param path
   * @param dataBody
   */
  makePOSTRequest = (path: string, dataBody: any) => {
    return this.formatResponse(
      axios
        .post(`${this.apiPath}${path}`, dataBody, this.getAuthHeaders())
        .then(function (response) {
          return response;
        })
        .catch(function (error) {
          return error;
        }),
    );
  };

  toPaginatedResponse = (response: AxiosResponse) => {
    console.log('Response heeeer', response);
    if (response && response.status >= 200 && response.status < 300) {
      return {
        entries: response?.success?.data,
        total: parseInt(response?.headers['x-total-count'], 10),
      };
    }
    return {
      entries: [],
      total: 0,
    };
  };

  makePOSTSearchReactQueryRequest = (path: string, dataBody: any) => {
    return this.formatResponseRaw(
      axios
        .post(`${this.apiPath}${path}`, dataBody, this.getAuthHeaders())
        .then(function (response) {
          if (response && response.status >= 200 && response.status < 300) {
            return {
              entries: JSON.parse(JSON.stringify(response?.data)),
              total: parseInt(response?.headers['x-total-count'], 10),
            };
          }
          return {
            entries: [],
            total: 0,
          };
        })
        .catch(function (error) {
          return error;
        }),
    );
  };

  /**
   * Will make a post request
   * @param path
   * @param dataBody
   */
  makePOSTRequestPromise = (path, dataBody) => {
    const opts = this.getAuthHeaders();
    opts.timeout = DEFAULT_TIMEOUT;
    return axios.post(`${this.apiPath}${path}`, dataBody, opts);
  };

  /**
   * Will make a post request
   * @param path
   * @param dataBody
   */
  makePOSTLongRequestPromise = (path, dataBody) => {
    const opts = this.getAuthHeaders();
    opts.timeout = DEFAULT_TIMEOUT; // 20 minute(s)
    return axios.post(`${this.apiPath}${path}`, dataBody, opts);
  };

  /**
   * Will make a post request
   * @param path
   * @param dataBody
   */
  makePOSTFileUpload = (path, dataBody) => {
    const opts = this.getAuthHeaders();
    opts['Content-Type'] = 'multipart/form-data';
    opts.timeout = DEFAULT_TIMEOUT; // 20 minute(s)
    return axios.post(`${this.apiPath}${path}`, dataBody, opts);
  };

  /**
   * Will make a post request
   * @param path
   * @param dataBody
   */
  makePOSTBlobLongRequestPromise = (path, dataBody) => {
    const opts = this.getAuthHeaders();
    opts.timeout = DEFAULT_TIMEOUT; // 20 minute(s)
    opts.responseType = 'blob';
    return axios.post(`${this.apiPath}${path}`, dataBody, opts);
  };

  /**
   * Will make a PUT request
   * @param path
   */
  makeDELETERequest = (path) => {
    const opts = this.getAuthHeaders();
    opts.timeout = DEFAULT_TIMEOUT; // 20 minute(s)

    return this.formatResponse(
      axios
        .delete(`${this.apiPath}${path}`, opts)
        .then(function (response) {
          return response;
        })
        .catch(function (error) {
          return error;
        }),
    );
  };

  /**
   * Will make a delete request
   * @param path
   */
  makeDELETERequestPromise = (path) => {
    return axios.delete(`${this.apiPath}${path}`, this.getAuthHeaders());
  };

  /**
   * Will consistently format the API response messages
   * @param operation
   * @returns {Promise<any|{error: *}|void|PersistencePromise<{error: *}>>}
   */
  formatResponse = async (operation) => {
    return operation
      .then((success) => {
        return { success: JSON.parse(JSON.stringify(success)) };
      })
      .catch((error) => {
        console.error('Calling API failed with error', error);
        return { error: JSON.parse(JSON.stringify(error)) };
      });
  };

  formatResponseRaw = async (operation) => {
    return operation
      .then((success) => {
        return success;
      })
      .catch((error) => {
        return error;
      });
  };

  buildFormData = (formData, data, parentKey) => {
    if (data && typeof data === 'object' && !(data instanceof Date)) {
      Object.keys(data).forEach((key) => {
        this.buildFormData(
          formData,
          data[key],
          parentKey ? `${parentKey}[${key}]` : key,
        );
      });
    } else {
      const value = data == null ? '' : data;

      formData.append(parentKey, value);
    }
  };
}

export default ApiService;
