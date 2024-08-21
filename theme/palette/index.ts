// ** Type Imports
import { Palette } from "@mui/material";

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
    // background: {
    //   paper: mode === "light" ? whiteColor : "#30334E",
    //   default: defaultBgColor(),
    // },
    primary: {
      light: "#9CCA3B",
      main: "#9CCA3B",
      dark: "#9CCA3B",
      contrastText: whiteColor,
    },
    secondary: {
      light: "#E6F2FD",
      main: "#E6F2FD",
      dark: "#E6F2FD",
      contrastText: darkColor,
    },
    info: {
      light: "#40CDFA",
      main: "#26C6F9",
      dark: "#21AEDB",
      contrastText: whiteColor,
    },
    text: {
      primary: `rgba(${mainColor}, 0.87)`,
      secondary: `rgba(${mainColor}, 0.6)`,
      disabled: `rgba(${mainColor}, 0.38)`,
    },
    divider: `rgba(${mainColor}, 0.12)`,
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.05)`,
      hoverOpacity: 0.05,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.26)`,
      disabledBackground: `rgba(${mainColor}, 0.12)`,
      focus: `rgba(${mainColor}, 0.12)`,
    },
  } as Palette;
};

export default DefaultPalette;
