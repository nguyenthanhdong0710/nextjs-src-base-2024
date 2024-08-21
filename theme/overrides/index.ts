// ** MUI Imports
import { Components, Theme } from "@mui/material";

// ** Overrides Imports
import MuiTypography from "./typography";
import MuiButton from "./button";
import MuiInput from "./input";
import MuiSelect from "./select";
import MuiTooltip from "./tooltip";
import MuiSnackbar from "./snackbar";
import MuiMenu from "./menu";

const Overrides = (): Partial<Components<Omit<Theme, "components">>> => {
  const typography = MuiTypography();
  const button = MuiButton();
  const input = MuiInput();
  const select = MuiSelect();
  const tooltip = MuiTooltip();
  const snackbar = MuiSnackbar();
  const menu = MuiMenu();

  return Object.assign(
    typography,
    button,
    input,
    select,
    tooltip,
    snackbar,
    menu,
  ) as any;
};

export default Overrides;
