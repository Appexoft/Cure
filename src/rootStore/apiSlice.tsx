import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { retry } from '@reduxjs/toolkit/dist/query/react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { storageManagerService } from '../services';

export const CONTENT_TYPE_VALUE = 'application/json';
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_URL,
  prepareHeaders: (headers, { getState }) => {
    const authorization = storageManagerService.getAccessToken();
    headers.set('Authorization', 'Bearer ' + authorization);
    return headers;
  },
});

const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data }) => {
    try {
      const authorization = storageManagerService.getAccessToken();
      const headers = {
        'Content-Type': CONTENT_TYPE_VALUE,
        Authorization: 'Bearer ' + authorization,
      };
      const baseUrl = process.env.REACT_APP_URL || '';
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        responseType: 'json',
        headers: headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });
const axiosBaseQueryWithRetry = retry(axiosBaseQuery(), { maxRetries: 6 });

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRetry,
  endpoints: () => ({}),
});
