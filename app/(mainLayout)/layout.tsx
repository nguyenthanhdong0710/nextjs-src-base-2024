"use client";

import MainAppBarComponent from "@/components/app-bars/app-bar";
import MainAppDrawerComponent from "@/components/app-bars/app-drawer";
import MainAppSearchDrawerComponent from "@/components/app-bars/app-search-drawer";
import { Box } from "@mui/material";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <MainAppBarComponent />
      <Box
        component="main"
        sx={{
          // mt: "67px",
          display: "flex",
          flexGrow: 1,
          width: "100%",
        }}
      >
        <MainAppDrawerComponent />
        <MainAppSearchDrawerComponent />
        <Box
          sx={{
            flexGrow: 1,
            width: 1,
            p: 3,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
