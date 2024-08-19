import { createSlice } from "@reduxjs/toolkit";

type SidebarStateType = {
  open: boolean;
  search: { open: boolean };
};

const initialState: SidebarStateType = {
  open: false,
  search: { open: false },
};

const slice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    closeSidebar: (state) => {
      return {
        ...state,
        open: false,
      };
    },
    toggleSidebar: (state) => {
      return {
        ...state,
        open: !state.open,
      };
    },
    closeSidebarSearch: (state) => {
      return {
        ...state,
        search: { open: false },
      };
    },
    toggleSidebarSearch: (state) => {
      return {
        ...state,
        search: { open: !state.open },
      };
    },
  },
});

export const {
  closeSidebar,
  toggleSidebar,
  closeSidebarSearch,
  toggleSidebarSearch,
} = slice.actions;

export default slice.reducer;
