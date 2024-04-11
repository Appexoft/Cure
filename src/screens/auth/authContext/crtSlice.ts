import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  entity: null,
  updating: false,
  updateSuccess: false,

  patient: null,
  userEntity: null,
  permissions: null,
};

const crtSlice = createSlice({
  name: 'crt',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reset(state) {
      state = initialState;
    },
    setError(state, action) {
      state.error = action.payload.data;
    },
    setLoading(state, action) {
      state.loading = action.payload.data;
    },
    setPatient(state, action) {
      state.patient = action.payload?.data;
    },
    setUserEntity(state, action) {
      state.userEntity = action.payload?.data;
    },
    setPermissions(state, action) {
      state.permissions = action.payload?.data;
    },
  },
});

export const {
  reset,
  setError,
  setLoading,
  setPatient,
  setUserEntity,
  setPermissions,
} = crtSlice.actions;
export default crtSlice.reducer;
