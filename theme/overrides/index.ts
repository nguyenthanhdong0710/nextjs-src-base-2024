// ** MUI Imports
import { Components, Theme } from "@mui/material";

// ** Overrides Imports
import MuiInput from "./input";
import MuiTooltip from "./tooltip";
import MuiSnackbar from "./snackbar";
import MuiTypography from "./typography";

const Overrides = (): Partial<Components<Omit<Theme, "components">>> => {
  const typography = MuiTypography();
  const input = MuiInput();
  const tooltip = MuiTooltip();
  const snackbar = MuiSnackbar();

  return Object.assign(typography, input, tooltip, snackbar) as any;
};

export default Overrides;
