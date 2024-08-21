import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import StyledEngineProvider from "@/components/providers/styled-engine-provider";
import AppThemeProvider from "@/theme";
import StoreProvider from "@/redux/StoreProvider";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

import "@/styles/index.scss";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iWeather",
  description: "Wonderful Weather Website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className={manrope.className} id="root">
          <StoreProvider>
            <StyledEngineProvider injectFirst>
              <AppThemeProvider>{children}</AppThemeProvider>
            </StyledEngineProvider>
          </StoreProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
