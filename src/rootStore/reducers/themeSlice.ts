import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */

const initialState = {
  isDark: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle(state, action: PayloadAction<boolean>) {
      state.isDark = action.payload;
    },
  },
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
