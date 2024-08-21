// ** Type Imports

import { OwnerStateThemeType } from "@/mui-material";

const Snackbar = () => {
  return {
    MuiSnackbarContent: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          borderRadius: 8,
          padding: theme.spacing(1.75, 4),
          // backgroundColor: `rgb(${theme.palette.customColors.main})`,
          color:
            theme.palette.common[
              theme.palette.mode === "light" ? "white" : "black"
            ],
          "& .MuiSnackbarContent-message": {
            lineHeight: 1.429,
          },
        }),
      },
    },
  };
};

export default Snackbar;
