// ** Type Import
import { OwnerStateThemeType } from "@/mui-material";

// ** Util Import
import { alpha } from "@mui/system";

const Button = () => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: 10,
          textTransform: "none",
          "&.Mui-disabled": {
            cursor: "not-allowed",
            pointerEvents: "all !important",
          },
        },
        contained: ({ theme }: OwnerStateThemeType) => ({
          boxShadow: theme.shadows[0],
        }),
        outlined: ({ theme }: OwnerStateThemeType) => ({
          "&.Mui-disabled": {
            ...(theme.palette.mode == "light" && {
              color: alpha(theme.palette.black, 0.38),
              borderColor: alpha(theme.palette.black, 0.12),
            }),
            "&:hover": {
              backgroundColor: "inherit",
            },
          },
          "&.MuiButton-outlinedSecondary:not(.Mui-disabled)": {
            color:
              theme.palette.mode == "light"
                ? theme.palette.text.primary
                : theme.palette.white,
            "&:hover": {
              color: theme.palette.white,
              backgroundColor: theme.palette.secondary.dark,
            },
          },
          "&.MuiButton-outlinedPrimary:hover:not(.Mui-disabled)": {
            backgroundColor: alpha(theme.palette.primary.main, 0.1),
          },
          "&.MuiButton-outlinedSuccess:hover:not(.Mui-disabled)": {
            backgroundColor: alpha(theme.palette.success.main, 0.1),
          },
          "&.MuiButton-outlinedError:hover:not(.Mui-disabled)": {
            backgroundColor: alpha(theme.palette.error.main, 0.1),
          },
          "&.MuiButton-outlinedWarning:hover:not(.Mui-disabled)": {
            backgroundColor: alpha(theme.palette.warning.main, 0.1),
          },
          "&.MuiButton-outlinedInfo:hover:not(.Mui-disabled)": {
            backgroundColor: alpha(theme.palette.info.main, 0.1),
          },
        }),
        text: ({ theme }: OwnerStateThemeType) => ({
          "&.Mui-disabled": {
            ...(theme.palette.mode == "light" && {
              color: alpha(theme.palette.black, 0.38),
              borderColor: alpha(theme.palette.black, 0.28),
            }),
            "&:hover": {
              backgroundColor: "inherit",
            },
          },
          "&.MuiButton-textSecondary:not(.Mui-disabled)": {
            color:
              theme.palette.mode == "light"
                ? theme.palette.text.primary
                : theme.palette.white,
            "&:hover": {
              color: theme.palette.white,
              backgroundColor: theme.palette.secondary.dark,
            },
          },
          "&.MuiButton-textPrimary:hover:not(.Mui-disabled)": {
            backgroundColor: alpha(theme.palette.primary.main, 0.1),
          },
          "&.MuiButton-textSuccess:hover:not(.Mui-disabled)": {
            backgroundColor: alpha(theme.palette.success.main, 0.1),
          },
          "&.MuiButton-textError:hover:not(.Mui-disabled)": {
            backgroundColor: alpha(theme.palette.error.main, 0.1),
          },
          "&.MuiButton-textWarning:hover:not(.Mui-disabled)": {
            backgroundColor: alpha(theme.palette.warning.main, 0.1),
          },
          "&.MuiButton-textInfo:hover:not(.Mui-disabled)": {
            backgroundColor: alpha(theme.palette.info.main, 0.1),
          },
        }),
        sizeLarge: ({ theme }: OwnerStateThemeType) => ({
          borderRadius: 8,
          fontSize: "18px",
          fontWeight: 600,
          lineHeight: "24.59px",
          padding: `${theme.spacing(3.5, 10)}`,
        }),
        sizeMedium: ({ theme }: OwnerStateThemeType) => ({
          borderRadius: 6,
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "21.86px",
          padding: `${theme.spacing(3, 7.5)}`,
        }),
        sizeSmall: ({ theme }: OwnerStateThemeType) => ({
          borderRadius: 4,
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "19.12px",
          padding: `${theme.spacing(2.5, 5)}`,
        }),
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
    },
  };
};

export default Button;
