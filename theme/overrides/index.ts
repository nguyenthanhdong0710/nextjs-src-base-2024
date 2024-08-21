// ** MUI Imports
import { Components, Theme } from "@mui/material";

// ** Overrides Imports
import MuiTypography from "./typography";
import MuiButton from "./button";
import MuiInput from "./input";
import MuiTooltip from "./tooltip";
import MuiSnackbar from "./snackbar";

const Overrides = (): Partial<Components<Omit<Theme, "components">>> => {
  const typography = MuiTypography();
  const button = MuiButton();
  const input = MuiInput();
  const tooltip = MuiTooltip();
  const snackbar = MuiSnackbar();

  return Object.assign(typography, button, input, tooltip, snackbar) as any;
};

export default Overrides;
