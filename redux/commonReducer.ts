import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CommonStateType = {
  theme: { themeMode: "dark" | "light" };
};

const initialState: CommonStateType = {
  theme: { themeMode: "dark" },
};

const slice = createSlice({
  name: "common",
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      return {
        ...state,
        theme: {
          themeMode: state.theme.themeMode === "dark" ? "light" : "dark",
        },
      };
    },
  },
});

export const { toggleThemeMode } = slice.actions;

export default slice.reducer;
