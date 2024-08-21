export type OwnerStateThemeType = {
  theme: Theme;
  ownerState: ComponentsPropsList[keyof ComponentsPropsList] &
    Record<string, unknown>;
};

export type TypographyVariantOverridesPrefix =
  | "64"
  | "40"
  | "36"
  | "24"
  | "20"
  | "18"
  | "16"
  | "14"
  | "12";

export type TypographyVariantOverridesSuffix =
  | "Bold"
  | "Medium"
  | "regular"
  | "Light";

export type TypographyOverridesVariant =
  `${TypographyVariantPrefix}/${TypographyVariantSuffix}`;

// override breakpoint
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

interface ColorPalette {
  hoverPressed: string;
  main: string;
  10: string;
  20: string;
  30: string;
}

declare module "@mui/material/styles" {
  interface Palette {
    green: ColorPalette;
    red: ColorPalette;
    waring: ColorPalette;
    blue: ColorPalette;
    icon: string;
    outline: string;
    background: string;
  }
  interface PaletteOptions {
    green: ColorPalette;
    red: ColorPalette;
    waring: ColorPalette;
    blue: ColorPalette;
    icon: string;
    outline: string;
    background: string;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "64/Bold": boolean;
    "64/Medium": boolean;
    "64/Regular": boolean;
    "64/Light": boolean;
    "40/Bold": boolean;
    "40/Medium": boolean;
    "40/Regular": boolean;
    "40/Light": boolean;
    "36/Bold": boolean;
    "36/Medium": boolean;
    "36/Regular": boolean;
    "36/Light": boolean;
    "24/Bold": boolean;
    "24/Medium": boolean;
    "24/Regular": boolean;
    "24/Light": boolean;
    "20/Bold": boolean;
    "20/Medium": boolean;
    "20/Regular": boolean;
    "20/Light": boolean;
    "18/Bold": boolean;
    "18/Medium": boolean;
    "18/Regular": boolean;
    "18/Light": boolean;
    "16/Bold": boolean;
    "16/Medium": boolean;
    "16/Regular": boolean;
    "16/Light": boolean;
    "14/Bold": boolean;
    "14/Medium": boolean;
    "14/Regular": boolean;
    "14/Light": boolean;
    "12/Bold": boolean;
    "12/Medium": boolean;
    "12/Regular": boolean;
    "12/Light": boolean;
  }
}

export {};
