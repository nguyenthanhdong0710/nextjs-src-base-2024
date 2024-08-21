// ** Type Imports

import { OwnerStateThemeType } from "@/mui-material";

const Menu = () => {
  const boxShadow = (theme: OwnerStateThemeType["theme"]) => {
    if (theme.palette.mode === "light") {
      return theme.shadows[2];
    } else return theme.shadows[3];
  };

  return {
    MuiMenu: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          "& .MuiMenu-paper": {
            borderRadius: 5,
            boxShadow: boxShadow(theme),
          },
        }),
      },
    },
  };
};

export default Menu;
