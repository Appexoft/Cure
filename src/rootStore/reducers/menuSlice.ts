import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/*
Menu Types:
"menu-default", "menu-sub-hidden", "menu-hidden"
*/
export const defaultMenuType = 'menu-default';
export const subHiddenBreakpoint = 1440;
export const menuHiddenBreakpoint = 768;

export const BASE = 'menus';

export const MENU_TYPES = {
  DASHBOARD: `${BASE}/DASHBOARD`,
  CUSTOMERS: `${BASE}/CUSTOMERS`,
  SERVICES: `${BASE}/SERVICES`,
  MDMS: `${BASE}/MDMS`,
  SETTINGS: `${BASE}/SETTINGS`,
  HELP: `${BASE}/HELP`,
} as const;

type MenuTypeKeys = keyof typeof MENU_TYPES;
type MenuTypeValues = typeof MENU_TYPES[MenuTypeKeys];

const initialState = {
  containerClassnames: defaultMenuType,
  subHiddenBreakpoint,
  menuHiddenBreakpoint,
  menuClickCount: 0,
  activeMenu: MENU_TYPES.DASHBOARD as MenuTypeValues,
  // if you use menu-sub-hidden as default menu type, set value of this variable to false
  selectedMenuHasSubItems: defaultMenuType === 'menu-default',
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setActive(state, action: PayloadAction<MenuTypeValues>) {
      state.activeMenu = action.payload;
    },
  },
});

export const { setActive } = menuSlice.actions;
export default menuSlice.reducer;
