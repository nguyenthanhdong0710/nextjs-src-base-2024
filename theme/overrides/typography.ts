// ** Type Import
import {
  OwnerStateThemeType,
  TypographyOverridesVariant,
  TypographyVariantOverridesPrefix,
  TypographyVariantOverridesSuffix,
} from "@/mui-material";

export const fontSizes: Record<
  TypographyVariantOverridesPrefix,
  {
    mapping: string;
    fontSize: string;
    lineHeight: string;
  }
> = {
  "64": {
    mapping: "h1",
    fontSize: "64px",
    lineHeight: "87.42px",
  },
  "40": {
    mapping: "h2",
    fontSize: "40px",
    lineHeight: "54.64px",
  },
  "36": {
    mapping: "h3",
    fontSize: "36px",
    lineHeight: "49.18px",
  },
  "24": {
    mapping: "h4",
    fontSize: "24px",
    lineHeight: "32.78px",
  },
  "20": {
    mapping: "h5",
    fontSize: "20px",
    lineHeight: "27.32px",
  },
  "18": {
    mapping: "h6",
    fontSize: "18px",
    lineHeight: "24.59px",
  },
  "16": {
    mapping: "p",
    fontSize: "16px",
    lineHeight: "21.86px",
  },
  "14": {
    mapping: "p",
    fontSize: "14px",
    lineHeight: "16.94px",
  },
  "12": {
    mapping: "span",
    fontSize: "12px",
    lineHeight: "16.39px",
  },
};

export const fontWeights: Record<
  TypographyVariantOverridesSuffix,
  {
    fontWeight: 300 | 400 | 500 | 600 | 700 | 800 | 900;
  }
> = {
  Bold: {
    fontWeight: 700,
  },
  Medium: {
    fontWeight: 500,
  },
  regular: {
    fontWeight: 400,
  },
  Light: {
    fontWeight: 300,
  },
};

const typography = () => {
  const variantMapping: { [K in TypographyOverridesVariant]?: string } = {};
  const variants = Object.entries(fontSizes).flatMap(([fsKey, fsVal]) =>
    Object.entries(fontWeights).map(([fwKey, fwVal]) => {
      const variant: TypographyOverridesVariant = `${fsKey}/${fwKey}`;
      variantMapping[variant] = fsVal.mapping;
      return {
        props: { variant },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary,
          fontSize: fsVal.fontSize,
          lineHeight: fsVal.lineHeight,
          fontWeight: fwVal.fontWeight,
        }),
      };
    }),
  );

  return {
    MuiTypography: {
      defaultProps: { variantMapping },
      styleOverrides: {
        gutterBottom: ({ theme }: OwnerStateThemeType) => ({
          marginBottom: theme.spacing(2),
        }),
      },
      variants,
    },
  };
};

export default typography;
