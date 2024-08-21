"use client";

import { Box, Typography } from "@mui/material";
import { getTextContrast } from "@/utils/get-text-contrast";

const ColorBadge = ({
  color,
  colorName,
}: {
  color: string;
  colorName: string;
}) => {
  return (
    <Box
      sx={{
        backgroundColor: color,
        border: "1px solid black",
        borderColor: "outline",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        width: 160,
        fontSize: 11,
        gap: 2,
      }}
    >
      <Typography variant="12/Medium" sx={{ color: getTextContrast(color) }}>
        {colorName}
      </Typography>
      <Typography
        variant="12/Light"
        sx={{ color: getTextContrast(color), textTransform: "uppercase" }}
      >
        {color}
      </Typography>
    </Box>
  );
};

export default ColorBadge;
