// ** MUI Theme Provider
import { PaletteMode, ThemeOptions } from "@mui/material";

// ** Theme Override Imports
import palette from "./palette";
import spacing from "./spacing";
import shadows from "./shadows";
import overrides from "./overrides";
import breakpoints from "./breakpoints";

const themeOptions = (overrideMode: PaletteMode): ThemeOptions => {
  const mergedThemeConfig: ThemeOptions = {
    direction: "ltr",
    breakpoints: breakpoints(),
    palette: palette(overrideMode),
    shape: { borderRadius: 8 },
    shadows: shadows(overrideMode),
    components: overrides(),
    ...spacing,
  };

  return mergedThemeConfig;
};

export default themeOptions;
