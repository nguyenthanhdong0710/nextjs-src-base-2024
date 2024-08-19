"use client";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { Button, Divider, SxProps } from "@mui/material";
import DrawerListItem from "./DrawerListItem";
import DrawerData from "./DrawerData";
// import { useTranslations } from "next-intl";

type DrawerContentProps = {
  sx?: SxProps;
};

function DrawerContent({ sx }: DrawerContentProps) {
  // const t = useTranslations();
  const t = (str: string) => str;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "gray.08",
        ...sx,
      }}
    >
      <List sx={{ py: 2 }}>
        <Box className="flex justify-between items-center gap-5 px-3 py-2 mb-3">
          <Button variant="contained" color="primary">
            {t("navbar.viewPlan")}
          </Button>
        </Box>
        {DrawerData.map((item) => (
          <DrawerListItem key={item.id} data={item} />
        ))}
        <Divider className="m-0" />
      </List>
    </Box>
  );
}

export default DrawerContent;
