

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiService } from '../../../../services';
import {
  API_APPOINTMENT,
} from '../../../../services/api/ApiConstants';

const initialState = {
  events: [],
};

// Actions handling

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllEvents.fulfilled, (state, { payload }) => {
      state.events = payload;
    });
  },
});

export const getAllEvents = createAsyncThunk('events/all', async () => {
  try {
    const response = await apiService.makePOSTRequestPromise(
      `${API_APPOINTMENT}/findAllWithSearch`,
      {
        sortBy: [
          {
            id: 'startDate',
            desc: false,
          },
        ],
        filters: [
          {
            id: 103,
            value: '1697454895243',
          },
        ],
        extraFilters: [],
        nullableFilters: [],
        byEntity: {
          entityType: 'PRACTITIONER_ENTITY',
          id: 103,
        },
        globalFilter: '',
        pageSize: 9999999999,
        pageIndex: 0,
      },
    );

    return response.data;
  } catch (err) {
    console.log('errEvents', err);
  }
});

export const {} = calendarSlice.actions;
export default calendarSlice.reducer;
