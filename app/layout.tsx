import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import StyledEngineProvider from "@/components/providers/styled-engine-provider";
import { AppThemeProvider } from "@/theme";
import StoreProvider from "@/redux/StoreProvider";

import "@/config/i18n";

import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iWeather",
  description: "Wonderful Weather Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className} id="root">
        <StoreProvider>
          <StyledEngineProvider injectFirst>
            <AppThemeProvider>{children}</AppThemeProvider>
          </StyledEngineProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
