"use client";

import { Box } from "@mui/material";
import { useTranslations } from "next-intl";

export default function MainHomePage() {
  const t = useTranslations();

  return (
    <Box sx={{ height: "500vh" }}>
      <h1>{t("hello")}</h1>
    </Box>
  );
}
