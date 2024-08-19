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
import { toggleSidebar, toggleSidebarSearch } from "@/redux/sidebarReducer";
import { useRouter, useSearchParams } from "next/navigation";
// import SearchBar from "./_component/SearchBar";
// import MainMenu from "./_component/MainMenu";
import clsx from "clsx";

export default function MainAppBar() {
  // const t = useTranslations();
  const t = (str: string) => str;
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((s) => s.sidebar);
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isScrollUp, setIsScrollUp] = useState(false);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
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
      className="sm:mb-[67px]"
    >
      <Box
        className="flex justify-between relative z-10"
        sx={{
          py: 1.5,
          px: 3,
          borderBottom: 1,
          borderColor: "gray.07",
          backgroundColor: "gray.09",
        }}
      >
        <Box className="basis-3/4 flex items-center gap-3">
          {/* <Link href={{ pathname: "/home" }} replace> */}
          <Box component="img" src="/images/text_logo.svg" alt="logo" />
          {/* </Link> */}
          {/* <SearchBar /> */}
          <Button
            variant="outlined"
            color="primary"
            className="hidden sm:block"
          >
            {t("navbar.searchHistory")}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="hidden sm:flex items-center"
          >
            {t("navbar.watchListSearch")}
            <Add color="primary" className="ml-2 h-5 w-5" />
          </Button>
        </Box>
        <IconButton className="sm:hidden" onClick={handleToggleSidebarSearch}>
          <Search color="primary" />
        </IconButton>

        <Box className="flex items-center gap-5">
          <Button
            variant="contained"
            color="primary"
            className="hidden sm:block"
          >
            {t("navbar.viewPlan")}
          </Button>
        </Box>
        <IconButton className="sm:hidden" onClick={handleToggleSidebar}>
          {open ? <MenuOpen></MenuOpen> : <Menu></Menu>}
        </IconButton>
      </Box>
      <div
        className={clsx("fixed w-full transition-[top] duration-300 z-0", {
          "top-[67px]": !isScrollUp,
          "top-0": isScrollUp,
        })}
      >
        <Box
          sx={{
            py: 1,
            px: 3,
            borderBottom: 1,
            borderColor: "gray.07",
            backgroundColor: "gray.09",
          }}
          className="hidden sm:flex justify-between items-center"
        >
          {/* <MainMenu /> */}
          <Button variant="text" color="primary">
            <DashboardOutlined className="h-5 w-5 mr-2" />
            {t("navbar.myDashboard")}
          </Button>
        </Box>
      </div>
    </AppBar>
  );
}
