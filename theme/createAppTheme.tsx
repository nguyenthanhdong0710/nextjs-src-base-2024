import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import darkPalette from "./darkPalette";
import lightPalette from "./lightPalette";
// import { CheckboxIcon, CheckedCheckboxIcon } from "@/components/Icons";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    secondary: true;
    tertiary: true;
  }
}

declare module "@mui/material/ButtonGroup" {
  interface ButtonGroupPropsVariantOverrides {
    tertiary: true;
  }
}

// override breakpoint
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    xm: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

type ColorPalette = {
  [key: number | string]: string;
};

declare module "@mui/material/styles" {
  interface Palette {
    functionalInfo: string;
    functionalInfo2: string;
    functionalDanger: string;
    functionalSuccess: string;
    functionalWarning: string;
    gray: ColorPalette;
    blue: ColorPalette;
  }
  interface PaletteOptions {
    functionalInfo: string;
    functionalInfo2: string;
    functionalDanger: string;
    functionalSuccess: string;
    functionalWarning: string;
    gray: ColorPalette;
    blue: ColorPalette;
  }
}

// start create theme
const createAppTheme = (mode: PaletteMode) => {
  const palette = mode === "light" ? lightPalette : darkPalette;
  return createTheme({
    breakpoints: {
      values: {
        xs: 0,
        xm: 480,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    palette,
    // Override component style
    typography: {
      allVariants: {
        fontFamily: "inherit",
        letterSpacing: 0,
      },
      h4: {
        fontSize: "30px",
        lineHeight: "38px",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "20px",
            borderRadius: 4,
            textTransform: "none",
            minWidth: 0,
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 12,
            paddingRight: 12,
            "&.Mui-disabled": {
              cursor: "not-allowed",
              pointerEvents: "all !important",
            },
          },
        },
        variants: [
          {
            props: { variant: "contained", color: "primary" },
            style: {
              color: palette.gray["10"],
              "&.Mui-disabled": {
                background: palette.gray["07"],
                color: palette.gray["04"],
              },
            },
          },
          {
            props: { variant: "secondary" },
            style: {
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: palette.gray["06"],
              backgroundColor: palette.gray["07"],
              color: palette.gray["02"],
              "&.Mui-disabled": {
                background: palette.gray["07"],
                color: palette.gray["04"],
              },
            },
          },
          {
            props: { variant: "tertiary" },
            style: {
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: palette.gray["06"],
              color: palette.gray["01"],
              "&.Mui-disabled": {
                background: "transparent",
                borderColor: palette.gray["06"],
                color: palette.gray["04"],
              },
            },
          },
          {
            props: { variant: "outlined" },
            style: {
              "&.Mui-disabled": {
                background: "transparent",
                borderColor: palette.gray["06"],
                color: palette.gray["04"],
              },
            },
          },
          {
            props: { variant: "text" },
            style: {
              "&.Mui-disabled": {
                background: "transparent",
                color: palette.gray["04"],
              },
            },
          },
          {
            props: { size: "small" },
            style: {
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "16px",
            },
          },
          {
            props: { size: "large" },
            style: {
              paddingTop: 15,
              paddingBottom: 15,
              paddingLeft: 32,
              paddingRight: 32,
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "24px",
            },
          },
        ],
      },
      MuiButtonGroup: {
        variants: [
          {
            props: { variant: "tertiary" },
            style: {
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: palette.gray["06"],
              color: palette.gray["01"],
              "&.Mui-disabled": {
                background: "transparent",
                borderColor: palette.gray["06"],
                color: palette.gray["04"],
              },
            },
          },
        ],
      },
      MuiCheckbox: {
        // defaultProps: {
        //   icon: <CheckboxIcon />,
        //   checkedIcon: <CheckedCheckboxIcon />,
        // },
        styleOverrides: {
          root: {
            color: palette.gray["05"],
            borderRadius: "99999px",
            "&.Mui-disabled": {
              background: "none",
              color: palette.gray["07"],
              cursor: "not-allowed",
              pointerEvents: "all !important",
            },
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            color: palette.gray["05"],
            "&.Mui-disabled": {
              background: "none",
              color: palette.gray["07"],
              cursor: "not-allowed",
              pointerEvents: "all !important",
            },
          },
        },
      },
      MuiOutlinedInput: {
        defaultProps: {
          size: "medium",
        },
        styleOverrides: {
          root: {
            background: palette.gray["07"],
            "& fieldset": {
              borderRadius: 4,
              borderColor: palette.gray["05"],
            },
            "&.Mui-focused": {
              "& fieldset": {
                borderRadius: 4,
                borderColor: `${palette.blue["02"]} !important`,
              },
            },
            "&.Mui-disabled": {
              background: palette.gray["09"],
              "& fieldset": {
                borderRadius: 4,
                borderColor: `${palette.gray["09"]} !important`,
              },
            },
            "&.Mui-error": {
              color: palette.functionalDanger,
              "& fieldset": {
                borderRadius: 4,
                borderColor: `${palette.functionalDanger} !important`,
              },
            },
            "&.MuiInputBase-sizeSmall": {
              fontSize: "12px",
              lineHeight: "16px",
            },
            "&.MuiInputBase-sizeSmall .MuiSelect-icon": {
              right: 4,
            },
            "&.MuiInputBase-sizeSmall .MuiSelect-select": {
              fontSize: "14px",
              paddingTop: "10.5px",
              paddingBottom: "6.5px",
              paddingLeft: "11px",
            },
            "&.MuiAutocomplete-inputRoot": {
              paddingTop: "5px !important",
              paddingBottom: "4px !important",
            },
            "&.MuiAutocomplete-inputRoot.MuiInputBase-sizeSmall": {
              padding: "10.25px !important",
            },
            "& span.MuiAutocomplete-tag": {
              background: palette.blue["04"],
              border: `1px solid ${palette.blue["03"]}`,
              borderRadius: 4,
              padding: "2px 5px",
            },
          },
          input: {
            borderRadius: 4,
            "&.Mui-disabled": {
              background: palette.gray["09"],
              borderColor: palette.gray["09"],
              cursor: "not-allowed",
              pointerEvents: "all !important",
            },
            "&.MuiInputBase-inputAdornedStart": {
              paddingLeft: "6px",
            },
            "&.MuiInputBase-inputAdornedEnd": {
              paddingRight: "6px",
            },
          },
          notchedOutline: {
            borderRadius: 4,
            borderColor: `${palette.gray["05"]} !important`,
          },
        },
        variants: [
          {
            props: { size: "small" },
            style: { input: { padding: "10px 14px" } },
          },
          {
            props: { size: "medium" },
            style: { input: { padding: "12px 16px" } },
          },
        ],
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            marginLeft: 0,
          },
        },
      },
      MuiAutocomplete: {
        defaultProps: {
          popupIcon: <ExpandMoreIcon sx={{ color: palette.blue["03"] }} />,
        },
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
              background: palette.gray["07"],
              padding: "10px 14px",
              "& .MuiAutocomplete-input": {
                padding: 0,
              },
              "&.Mui-disabled": {
                background: palette.gray["09"],
                cursor: "not-allowed",
                pointerEvents: "all !important",
              },
            },
            "& .Mui-error .MuiAutocomplete-endAdornment": {
              "& .MuiAutocomplete-popupIndicator .MuiSvgIcon-root": {
                color: palette.functionalDanger,
              },
            },
          },
        },
      },
      MuiSelect: {
        defaultProps: {
          IconComponent: ExpandMoreIcon,
        },
        styleOverrides: {
          root: {
            "& .MuiInputBase-inputSizeSmall": {
              paddingRight: "28px !important",
              paddingLeft: "5px",
              paddingTop: "1px",
              paddingBottom: 0,
            },
            "&.Mui-error": {
              color: palette.functionalDanger,
              "& svg": {
                color: palette.functionalDanger,
              },
            },
          },
          icon: {
            color: palette.blue["03"],
            height: 24,
            width: 24,
            top: `calc(50% - 12px)`, // 50% height

            "&.Mui-disabled": {
              color: palette.gray["04"],
            },
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontSize: 14,
          },
        },
      },
      MuiChip: {
        defaultProps: {
          deleteIcon: <CloseIcon />,
        },
        styleOverrides: {
          root: {
            borderRadius: "4px",
            "&.MuiAutocomplete-tag": {
              color: palette.gray["02"],
              backgroundColor: palette.gray["09"],
              borderColor: palette.gray["05"],
              borderWidth: 1,
              borderStyle: "solid",
              fontSize: "12px",
              lineHeight: "16px",
            },
          },
          deleteIcon: {
            color: palette.blue["03"],
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            width: 40,
            height: 22,
            padding: 0,
            "& .MuiSwitch-switchBase": {
              padding: 0,
              margin: 3,
              transitionDuration: "300ms",
              color: palette.functionalDanger,

              "&.Mui-checked": {
                transform: "translateX(18px)",
                color: palette.gray["white"],
                "& + .MuiSwitch-track": {
                  opacity: 1,
                  border: 0,
                },
                "&.Mui-disabled + .MuiSwitch-track": {
                  opacity: 0.5,
                  cursor: "not-allowed",
                  pointerEvents: "all !important",
                },
              },

              "&.Mui-disabled .MuiSwitch-thumb": {
                color: palette.gray["02"],
              },

              "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.3,
              },
            },
            "& .MuiSwitch-thumb": {
              boxSizing: "border-box",
              width: 16,
              height: 16,
            },
            "& .MuiSwitch-track": {
              borderRadius: 26 / 2,
              borderWidth: "1px",
              borderColor: palette.functionalDanger,
              borderStyle: "solid",
              backgroundColor: "transparent",
              opacity: 1,
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            "&.MuiMenu-paper": {
              backgroundColor: palette.gray["07"],
            },
            "& .MuiAutocomplete-listbox": {
              padding: 0,
            },
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontFamily: "inherit",
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            minHeight: 0,
          },
          scrollableX: {
            borderRadius: "8px 8px 0px 0px",
          },
          scrollButtons: {
            borderRadius: "99999px",
            backgroundColor: palette.gray["07"],
            width: "25px",
            height: "25px",
            margin: "0 5px",
            "&.Mui-disabled": {
              width: 0,
              margin: 0,
            },
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            minHeight: 0,
            padding: "8px",
            textTransform: "none",
          },
        },
      },
      MuiSkeleton: {
        styleOverrides: {
          root: {
            WebkitTransform: "scale(1, 1)",
          },
        },
      },
    },
  });
};

export default createAppTheme;
