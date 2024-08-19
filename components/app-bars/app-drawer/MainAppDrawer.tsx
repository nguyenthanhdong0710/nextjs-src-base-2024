"use client";

import Drawer from "@mui/material/Drawer";
import DrawerContent from "./DrawerContent";
import { useAppDispatch, useAppSelector } from "@/redux";
import { closeSidebar } from "@/redux/sidebarReducer";

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
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          top: "auto",
          bottom: 0,
          width: "80%",
          height: "100%",
        },
        display: { xs: "block", sm: "none" },
      }}
    >
      <DrawerContent />
    </Drawer>
  );
}

export default MainAppDrawer;
