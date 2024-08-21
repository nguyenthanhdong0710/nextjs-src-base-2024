"use client";

// ** React Imports
import { ReactNode } from "react";

// ** MUI Imports
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

// ** Theme
import themeOptions from "./ThemeOptions";

// ** Global Styles
import GlobalStyling from "./globalStyles";

interface Props {
  children: ReactNode;
}

const ThemeComponent = ({ children }: Props) => {
  // ** Pass merged ThemeOptions (of core and user) to createTheme function
  let theme = createTheme(
    themeOptions(
      localStorage.getItem("themeMode") === "dark" ? "dark" : "light",
    ),
  );

  // ** Set responsive font sizes to true
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme) as any} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
