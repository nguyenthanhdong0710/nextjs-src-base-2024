"use client";

import { useState } from "react";
import { Box, Button, Collapse, Divider, Typography } from "@mui/material";
import { DrawerItem } from "./DrawerData";
// import { useTranslations } from "next-intl";
import { ExpandMore } from "@mui/icons-material";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux";
import { closeSidebar } from "@/redux/sidebarReducer";

type DrawerListItemProps = {
  data: DrawerItem;
};

function DrawerListItem({ data }: DrawerListItemProps) {
  // const t = useTranslations();
  const t = (str: string) => str;
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    if (data.children?.length) {
      setChecked((prev) => !prev);
      return;
    }
    handleOpenTab(data.path);
  };

  const handleOpenTab = (path?: string) => {
    if (!path) return;
    router.push(path);
    dispatch(closeSidebar());
  };

  return (
    <>
      <Divider className="m-0" />
      <Collapse in={checked} collapsedSize={53}>
        <Button
          variant="text"
          onClick={handleClick}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "6px",
            py: 4,
            width: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              width: 1,
            }}
          >
            <Typography
              variant="body2"
              textAlign="center"
              sx={{ color: "blue.01", pl: 4 }}
            >
              {t(data.label as any)}
            </Typography>
          </Box>
          {!!data.children?.length && (
            <ExpandMore color="primary" sx={{ rotate: checked ? 0 : 180 }} />
          )}
        </Button>
        <div>
          {(data?.children || []).map((child) => (
            <Box key={child.path} sx={{ my: 1 }}>
              <Button
                variant="text"
                onClick={() => {
                  handleOpenTab(child.path);
                }}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "6px",
                  width: 1,
                }}
              >
                <Typography
                  variant="body2"
                  textAlign="center"
                  sx={{ color: "gray.02", pl: 4 }}
                >
                  {t(child.label as any)}
                </Typography>
              </Button>
            </Box>
          ))}
        </div>
      </Collapse>
    </>
  );
}

export default DrawerListItem;
