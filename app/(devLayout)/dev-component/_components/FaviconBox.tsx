"use client";

import { Box, Typography } from "@mui/material";

const FaviconBox = ({ path }: { path: string }) => {
  return (
    <Box
      sx={{
        borderRadius: 1,
        padding: 4,
        border: "1px dashed black",
        borderColor: "green.main",
      }}
    >
      <Typography component="div" color="primary" sx={{ mb: 4 }}>
        {path}
      </Typography>
      <Box component="img" alt={path} src={path} />
    </Box>
  );
};

export default FaviconBox;
