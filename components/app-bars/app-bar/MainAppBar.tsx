"use client";

import React, { useEffect, useState } from "react";
import { AppBar, IconButton, Box, Button } from "@mui/material";

// import { Link } from "@/navigation";
import {
  Add,
  DashboardOutlined,
  Search,
  MenuOpen,
  Menu,
} from "@mui/icons-material";
// import { useTranslations } from "next-intl";
import { useAppDispatch, useAppSelector } from "@/redux";
import {
  closeSidebar,
  closeSidebarSearch,
  toggleSidebar,
  toggleSidebarSearch,
} from "@/redux/sidebarReducer";
import { useRouter, useSearchParams } from "next/navigation";
// import SearchBar from "./_component/SearchBar";
// import MainMenu from "./_component/MainMenu";
import clsx from "clsx";
import AppSetting from "@/config/app-setting";

export default function MainAppBar() {
  // const t = useTranslations();
  const t = (str: string) => str;
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((s) => s.sidebar);
  const { open: searchOpen } = useAppSelector((s) => s.sidebar.search);
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isScrollUp, setIsScrollUp] = useState(false);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleClose = () => {
    if (open) {
      dispatch(closeSidebar());
    }

    if (searchOpen) {
      dispatch(closeSidebarSearch());
    }
  };

  const handleToggleSidebarSearch = () => {
    dispatch(toggleSidebarSearch());
  };

  useEffect(() => {
    let prevScrollPosition = window.scrollY;
    const onscroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPosition > currentScrollPos) {
        setIsScrollUp(false);
      } else {
        setIsScrollUp(true);
      }
      prevScrollPosition = currentScrollPos;
    };
    window.addEventListener("scroll", onscroll);

    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      color="inherit"
      sx={{
        boxShadow: "none",
        backgroundColor: "transparent",
      }}
      onClick={handleClose}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 1.5,
          px: 3,
          borderBottom: 1,
          borderColor: "gray.07",
          backgroundColor: "gray.09",
          height: AppSetting.appBarHeight,
        }}
      >
        <Button onClick={handleToggleSidebar}>Hamburger</Button>
        <div>C/F</div>
        <div>Logo</div>
        <Button onClick={handleToggleSidebarSearch}>search-input</Button>
        <div>favorite</div>
      </Box>
      <Box
        sx={{
          position: "sticky",
          top: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 1.5,
          px: 3,
          borderBottom: 1,
          borderColor: "gray.07",
          backgroundColor: "gray.09",
          height: AppSetting.tabHeight,
        }}
      >
        <div>Now</div>
        <div> Hourly</div>
        <div>Daily</div>
        <div>Weekend</div>
        <div>7 days</div>
        <div>Live Satellite</div>
        <div>History</div>
        <div>Long Range</div>
      </Box>
    </AppBar>
  );
}
