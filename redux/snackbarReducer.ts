import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertColor } from "@mui/material/Alert";

type SnackBarType = {
  key: string | number;
  open: boolean;
  title: string;
  message: string;
  severity: AlertColor;
  vertical: "top" | "bottom";
  horizontal: "right" | "center" | "left";
  autoHideDuration?: number | null;
  closeByButtonOnly?: boolean;
};

const initialState: SnackBarType = {
  key: new Date().getTime(),
  open: false,
  title: "",
  message: "",
  vertical: "bottom",
  horizontal: "left",
  severity: "error" as AlertColor,
};

const slice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSuccess: (state, action: PayloadAction<Partial<SnackBarType>>) => {
      return {
        ...state,
        ...action.payload,
        key: action.payload?.key || new Date().getTime(),
        title: action.payload?.title || "",
        message: action.payload?.message || "",
        vertical: action.payload?.vertical || "bottom",
        horizontal: action.payload?.horizontal || "left",
        open: true,
        severity: "success",
      };
    },
    showError: (state, action: PayloadAction<Partial<SnackBarType>>) => {
      return {
        ...state,
        ...action.payload,
        key: action.payload?.key || new Date().getTime(),
        title: action.payload?.title || "",
        message: action.payload?.message || "",
        vertical: action.payload?.vertical || "bottom",
        horizontal: action.payload?.horizontal || "left",
        open: true,
        severity: "error",
      };
    },
    hideSnackbar: (state) => {
      return {
        ...state,
        open: false,
      };
    },
  },
});

export const { showSuccess, showError, hideSnackbar } = slice.actions;

export default slice.reducer;
