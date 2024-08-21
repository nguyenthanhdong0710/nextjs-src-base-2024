// ** Type Import
import { OwnerStateThemeType } from "@/mui-material";
import { alpha } from "@mui/material";

const Tooltip = () => {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }: OwnerStateThemeType) => ({
          borderRadius: 6,
          lineHeight: 1.455,
          backgroundColor: alpha(theme.palette.background.default, 0.9),
        }),
        arrow: ({ theme }: OwnerStateThemeType) => ({
          color: alpha(theme.palette.background.default, 0.9),
        }),
      },
    },
  };
};

export default Tooltip;
