import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export const supportedLanguages = ["english", "vietnam"];

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  let locale = cookies().get("NEXT_LOCALE")?.value;

  if (!locale || !supportedLanguages.includes(locale)) {
    locale = supportedLanguages[0];
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
