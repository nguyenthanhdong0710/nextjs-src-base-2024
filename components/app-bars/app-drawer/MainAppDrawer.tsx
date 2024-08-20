"use client";

import Drawer from "@mui/material/Drawer";
import DrawerContent from "./DrawerContent";
import { useAppDispatch, useAppSelector } from "@/redux";
import { closeSidebar } from "@/redux/sidebarReducer";
import AppSetting from "@/config/app-setting";

function MainAppDrawer() {
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((s) => s.sidebar);

  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={handleCloseSidebar}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      PaperProps={{
        className: "mobile-scrollbar",
        sx: { backgroundColor: "gray.08" },
      }}
      sx={{
        top: `${AppSetting.appBarHeight}px`,
        height: `calc(100% - ${AppSetting.appBarHeight}px)`,
        "& .MuiBackdrop-root": {
          top: `${AppSetting.appBarHeight}px`,
        },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          top: "auto",
          bottom: 0,
          width: "80%",
          maxWidth: 300,
          height: `calc(100% - ${AppSetting.appBarHeight}px)`,
        },
      }}
    >
      <DrawerContent />
    </Drawer>
  );
}

export default MainAppDrawer;
