// ** Type Import
import { OwnerStateThemeType } from "@/mui-material";
import { ExpandMore } from "@mui/icons-material";
import { alpha } from "@mui/material";

const select = () => {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: ExpandMore,
        displayEmpty: true,
      },
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          "&.MuiInputBase-sizeLarge": {
            " .MuiSelect-select": {
              borderRadius: 8,
              paddingRight: `${theme.spacing(4)} !important`,
              padding: theme.spacing(3.5, 4),
            },
            "& svg": {
              right: "15px",
              top: "calc(50% - 11px)",
            },
          },
          "&:not(.MuiInputBase-sizeSmall):not(.MuiInputBase-sizeLarge)": {
            borderRadius: 6,
            " .MuiSelect-select": {
              borderRadius: 8,
              paddingRight: `${theme.spacing(3.5)} !important`,
              padding: theme.spacing(3, 3.5),
            },
            "& svg": {
              right: "14px",
              top: "calc(50% - 9.5px)",
            },
          },
          "&.MuiInputBase-sizeSmall": {
            borderRadius: 4,
            " .MuiSelect-select": {
              borderRadius: 8,
              paddingRight: `${theme.spacing(3)} !important`,
              padding: theme.spacing(2.25, 3),
            },
            "& svg": {
              right: "11px",
              top: "calc(50% - 8.5px)",
            },
          },
        }),
        select: ({ theme }: OwnerStateThemeType) => {
          return {
            minWidth: "6rem !important",
            "&.MuiTablePagination-select": {
              minWidth: "1.5rem !important",
            },
            "&.Mui-disabled ~ .MuiOutlinedInput-notchedOutline": {
              borderColor:
                theme.palette.mode === "light"
                  ? alpha(theme.palette.black, 0.12)
                  : alpha(theme.palette.white, 0.12),
            },
          };
        },
      },
    },
  };
};

export default select;
