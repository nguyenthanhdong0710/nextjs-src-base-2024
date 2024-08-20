"use client";

import { useTranslations } from "next-intl";

export default function MainHomePage() {
  const t = useTranslations();

  return <h1>{t("hello")}</h1>;
}
