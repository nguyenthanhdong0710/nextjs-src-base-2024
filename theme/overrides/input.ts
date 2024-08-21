// ** Type Import
import { OwnerStateThemeType } from "@/mui-material";
import { alpha } from "@mui/material";

const input = () => {
  return {
    // MuiInputLabel: {
    //   styleOverrides: {
    //     root: ({ theme }: OwnerStateThemeType) => ({
    //       color: theme.palette.primary.main,
    //     }),
    //   },
    // },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          fontFamily: "inherit",
          // borderRadius: theme.shape.borderRadius,
          // color: theme.palette.primary.main,
          "&.Mui-error": {
            // color: theme.palette.error.main,
            backgroundColor: alpha(theme.palette.error.main, 0.1),
          },
          "&:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline":
            {
              borderColor: theme.palette.outline,
            },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: alpha(theme.palette.white, 0.12),
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.error.main,
          },
          " .MuiSvgIcon-root": {
            color: theme.palette.icon,
          },
          "&.MuiInputBase-sizeLarge": {
            borderRadius: 8,
            input: {
              fontSize: "18px",
              lineHeight: "24.59px",
              padding: theme.spacing(3.25, 4),
              marginBottom: theme.spacing(0.5),
            },
            " .MuiSvgIcon-root": {
              width: "22px",
              height: "22px",
            },
          },
          "&:not(.MuiInputBase-sizeSmall):not(.MuiInputBase-sizeLarge)": {
            borderRadius: 6,
            input: {
              fontSize: "16px",
              lineHeight: "21.86px",
              padding: theme.spacing(3, 3.5),
              marginBottom: theme.spacing(0.5),
            },
            " .MuiSvgIcon-root": {
              width: "19px",
              height: "19px",
            },
          },
          "&.MuiInputBase-sizeSmall": {
            borderRadius: 4,
            input: {
              fontSize: "14px",
              lineHeight: "19.12px",
              padding: theme.spacing(2.5, 3),
              marginBottom: theme.spacing(0.5),
            },
            " .MuiSvgIcon-root": {
              width: "17px",
              height: "17px",
            },
          },
        }),
        input: ({ theme }: OwnerStateThemeType) => ({
          "&.Mui-disabled": {
            cursor: "not-allowed",
            pointerEvents: "all !important",
          },
          "&.MuiInputBase-inputAdornedStart": {
            paddingLeft: "8px",
          },
          "&.MuiInputBase-inputAdornedEnd": {
            paddingRight: "8px",
          },

          /* Chrome, Safari, Edge, Opera */
          "&::-webkit-outer-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
          "&::-webkit-inner-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },

          /* Firefox */
          "&[type=number]": {
            MozAppearance: "textfield",
          },
        }),
      },
    },
  };
};

export default input;
