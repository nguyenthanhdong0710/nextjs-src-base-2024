// ** Type Imports
import { alpha, Palette } from "@mui/material";

const DefaultPalette = (mode: Palette["mode"]): Palette => {
  // ** Vars
  const whiteColor = "#FFF";
  const lightColor = "76, 78, 100";
  const darkColor = "234, 234, 255";
  const mainColor = mode === "light" ? lightColor : darkColor;

  return {
    mode: mode,
    green: {
      hoverPressed: "#72B01F",
      main: "#9CCA3B",
      "10": "#9CCA3B",
      "20": "#E0F9AB",
      "30": "#F0F7F1",
    },
    red: {
      hoverPressed: "#C62828",
      main: "#FF7070",
      "10": "#FFA9A9",
      "20": "#FFC9C9",
      "30": "#FFF1F1",
    },
    waring: {
      hoverPressed: "#EC9C00",
      main: "#EC9C00",
      "10": "#EC9C00",
      "20": "#FFE6B5",
      "30": "#FFF8EB",
    },
    blue: {
      hoverPressed: "#0070CA",
      main: "#52A1FF",
      "10": "#97C7FF",
      "20": "#BDDCFF",
      "30": "#EEF6FF",
    },
    icon: "#6F82B4",
    outline: "#415792",
    background: {
      paper: "#000F35",
      default: "#000F35",
    },

    // ** overrides
    // background: {
    //   paper: mode === "light" ? whiteColor : "#30334E",
    //   default: defaultBgColor(),
    // },
    primary: {
      light: "#72B01F",
      main: "#9CCA3B",
      dark: "#72B01F",
      contrastText: whiteColor,
    },
    error: {
      light: "#FFA9A9",
      main: "#FF7070",
      dark: "#C62828",
      contrastText: whiteColor,
    },
    warning: {
      light: "#FFD78A",
      main: "#F3A100",
      dark: "#EC9C00",
      contrastText: whiteColor,
    },
    info: {
      light: "#97C7FF",
      main: "#52A1FF",
      dark: "#0070CA",
      contrastText: whiteColor,
    },
    secondary: {
      light: "#525E7B",
      main: "#3F4964",
      dark: "#525E7B",
      contrastText: darkColor,
    },

    text: {
      primary: alpha(whiteColor, 0.87),
      secondary: alpha(whiteColor, 0.6),
      disabled: alpha(whiteColor, 0.38),
    },
    divider: "#415792", // outline
    action: {
      // active: `rgba(${mainColor}, 0.54)`,
      // hover: `rgba(${mainColor}, 0.85)`,
      // hoverOpacity: 0.85,
      // selected: `rgba(${mainColor}, 0.08)`,
      disabled: alpha(whiteColor, 0.38),
      disabledBackground: "#3F4964", // secondary main
      // focus: `rgba(${mainColor}, 0.12)`,
    },
  } as Palette;
};

export default DefaultPalette;
