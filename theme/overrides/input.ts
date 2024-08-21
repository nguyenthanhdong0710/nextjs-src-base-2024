// ** Type Import
import { OwnerStateThemeType } from "@/mui-material";
import { alpha } from "@mui/material";

const input = () => {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.primary.main,
        }),
      },
    },
    MuiInput: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          lineHeight: "1.5rem",
          "&:before": {
            borderBottom: `1px solid rgba(${theme.palette.primary.main}, 0.22)`,
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: `1px solid rgba(${theme.palette.primary.main}, 0.32)`,
          },
          "&.Mui-disabled:before": {
            borderBottomStyle: "solid",
          },
        }),
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          borderTopLeftRadius: theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.borderRadius,
          backgroundColor: `rgba(${theme.palette.primary.main}, 0.05)`,
          "&:hover:not(.Mui-disabled)": {
            backgroundColor: `rgba(${theme.palette.primary.main}, 0.08)`,
          },
          "&:before": {
            borderBottom: `1px solid rgba(${theme.palette.primary.main}, 0.22)`,
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: `1px solid rgba(${theme.palette.primary.main}, 0.32)`,
          },
          "&.Mui-disabled": {
            backgroundColor: `rgba(${theme.palette.primary.main}, 0.05)`,
            "&:before": {
              borderBottomStyle: "solid",
            },
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          borderRadius: theme.shape.borderRadius,
          color: theme.palette.primary.main,
          backgroundColor: "white", //theme.palette.white,
          "&.Mui-error": {
            color: theme.palette.error.main,
          },
          "&:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline":
            {
              borderColor: alpha(theme.palette.primary.main, 0.32),
            },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: alpha(theme.palette.primary.main, 0.32),
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.error.main,
          },
        }),
        input: {
          "&.Mui-disabled": {
            cursor: "not-allowed",
            pointerEvents: "all !important",
          },
          "&.MuiInputBase-inputSizeSmall": {
            padding: "14px 16px",
          },
          "&.MuiInputBase-inputAdornedStart": {
            paddingLeft: "8px",
          },
          "&.MuiInputBase-inputAdornedEnd": {
            paddingRight: "8px",
          },

          /* Chrome, Safari, Edge, Opera */
          "&::-webkit-outer-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },
          "&::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },

          /* Firefox */
          "&[type=number]": {
            "-moz-appearance": "textfield",
          },
        },
      },
    },
  };
};

export default input;
