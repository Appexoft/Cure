import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  session: null,
  isLoggedIn: false,
};

// Actions handling

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    reset(state) {
      state = initialState;
    },
    setError(state, action) {
      state.error = action.payload.data;
    },
  },
});

export const { reset, setError } = homeSlice.actions;
export default homeSlice.reducer;
