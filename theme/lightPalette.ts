import { PaletteOptions } from "@mui/material";
import darkPalette from "./darkPalette";

const lightPalette: PaletteOptions = {
  mode: "light",
  ...darkPalette,
  // override default color
};

export default lightPalette;
