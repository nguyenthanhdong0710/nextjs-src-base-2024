"use client";

import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import { getTextContrast } from "@/utils/get-text-contrast";
import { fontSizes, fontWeights } from "@/theme/overrides/typography";
import ColorBadge from "./_components/ColorBadge";
import FaviconBox from "./_components/FaviconBox";
import { LockOpen, RemoveRedEye, Search } from "@mui/icons-material";

const DevComponents = () => {
  const { palette, breakpoints } = useTheme();
  const [input, setInput] = useState("value");
  const [selectValue, setSelectValue] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        gap: 20,
        p: 20,
      }}
    >
      <Box id="colors" sx={{ scrollMarginTop: 100, width: "100%" }}>
        <Typography
          component="div"
          variant="h3"
          sx={{ mb: 5, backgroundColor: "green.main", p: 2 }}
        >
          Colors
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <div id="Primary">
            <Typography variant="h6" color="primary" sx={{ mb: 4 }}>
              Primary
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                flexWrap: "wrap",
                gap: 2,
                borderRadius: 1,
                padding: 4,
                border: "1px dashed black",
                borderColor: "green.main",
              }}
            >
              <ColorBadge
                color={palette.green.hoverPressed}
                colorName="palette.green.HoverPressed"
              />
              <ColorBadge
                color={palette.green.main}
                colorName="palette.green.Main"
              />
              <ColorBadge
                color={palette.green[10]}
                colorName="palette.green[10]"
              />
              <ColorBadge
                color={palette.green[20]}
                colorName="palette.green[20]"
              />
              <ColorBadge
                color={palette.green[30]}
                colorName="palette.green[30]"
              />
            </Box>
          </div>
          <div id="Red">
            <Typography variant="h6" color="primary" sx={{ mb: 4 }}>
              Red
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                flexWrap: "wrap",
                gap: 2,
                borderRadius: 1,
                padding: 4,
                border: "1px dashed black",
                borderColor: "green.main",
              }}
            >
              <ColorBadge
                color={palette.red.hoverPressed}
                colorName="palette.red.HoverPressed"
              />
              <ColorBadge
                color={palette.red.main}
                colorName="palette.red.Main"
              />
              <ColorBadge color={palette.red[10]} colorName="palette.red[10]" />
              <ColorBadge color={palette.red[20]} colorName="palette.red[20]" />
              <ColorBadge color={palette.red[30]} colorName="palette.red[30]" />
            </Box>
          </div>
          <div id="Waring">
            <Typography variant="h6" color="primary" sx={{ mb: 4 }}>
              Waring
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                flexWrap: "wrap",
                gap: 2,
                borderRadius: 1,
                padding: 4,
                border: "1px dashed black",
                borderColor: "green.main",
              }}
            >
              <ColorBadge
                color={palette.waring.hoverPressed}
                colorName="palette.waring.HoverPressed"
              />
              <ColorBadge
                color={palette.waring.main}
                colorName="palette.waring.Main"
              />
              <ColorBadge
                color={palette.waring[10]}
                colorName="palette.waring[10]"
              />
              <ColorBadge
                color={palette.waring[20]}
                colorName="palette.waring[20]"
              />
              <ColorBadge
                color={palette.waring[30]}
                colorName="palette.waring[30]"
              />
            </Box>
          </div>
          <div id="Blue">
            <Typography variant="h6" color="primary" sx={{ mb: 4 }}>
              Blue
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                flexWrap: "wrap",
                gap: 2,
                borderRadius: 1,
                padding: 4,
                border: "1px dashed black",
                borderColor: "green.main",
              }}
            >
              <ColorBadge
                color={palette.blue.hoverPressed}
                colorName="palette.blue.HoverPressed"
              />
              <ColorBadge
                color={palette.blue.main}
                colorName="palette.blue.Main"
              />
              <ColorBadge
                color={palette.blue[10]}
                colorName="palette.blue[10]"
              />
              <ColorBadge
                color={palette.blue[20]}
                colorName="palette.blue[20]"
              />
              <ColorBadge
                color={palette.blue[30]}
                colorName="palette.blue[30]"
              />
            </Box>
          </div>
          <div id="Other">
            <Typography variant="h6" color="primary" sx={{ mb: 4 }}>
              Other
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                flexWrap: "wrap",
                gap: 2,
                borderRadius: 1,
                padding: 4,
                border: "1px dashed black",
                borderColor: "green.main",
              }}
            >
              <ColorBadge color={palette.icon} colorName="palette.icon" />
              <ColorBadge color={palette.outline} colorName="palette.outline" />
              <ColorBadge
                color={palette.background.default}
                colorName="palette.background.default"
              />
              <ColorBadge
                color={palette.background.paper}
                colorName="palette.background.paper"
              />
            </Box>
          </div>
        </Box>
      </Box>

      <Box id="typographies" sx={{ scrollMarginTop: 100, width: "100%" }}>
        <Typography
          component="div"
          variant="h3"
          sx={{ mb: 10, backgroundColor: "green.main", p: 2 }}
        >
          Typography
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            flexWrap: "wrap",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          {Object.keys(fontSizes)
            .reverse()
            .flatMap((fsKey) =>
              Object.keys(fontWeights).map((fwKey) => (
                <Typography
                  key={`${fsKey}/${fwKey}`}
                  color="primary"
                  variant={`${fsKey}/${fwKey}` as any}
                  sx={{ flexBasis: 1 / 4 }}
                >
                  {`${fsKey}/${fwKey}`}
                </Typography>
              )),
            )}
        </Box>
      </Box>

      <Box id="button-contained" sx={{ scrollMarginTop: 100, width: "100%" }}>
        <Typography
          component="div"
          variant="h3"
          sx={{ mb: 10, backgroundColor: "green.main", p: 2 }}
        >
          Button/Contained
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Large
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <Button variant="contained" size="large" color="primary">
            Large
          </Button>

          <Button variant="contained" size="large" color="error">
            Large
          </Button>

          <Button variant="contained" size="large" color="warning">
            Large
          </Button>

          <Button variant="contained" size="large" color="info">
            Large
          </Button>

          <Button variant="contained" size="large" color="secondary">
            Large
          </Button>
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Large / Disabled
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <Button variant="contained" size="large" color="primary" disabled>
            Large
          </Button>

          <Button variant="contained" size="large" color="error" disabled>
            Large
          </Button>

          <Button variant="contained" size="large" color="warning" disabled>
            Large
          </Button>

          <Button variant="contained" size="large" color="info" disabled>
            Large
          </Button>

          <Button variant="contained" size="large" color="secondary" disabled>
            Large
          </Button>
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Medium
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <Button variant="contained" size="medium" color="primary">
            Medium
          </Button>

          <Button variant="contained" size="medium" color="error">
            Medium
          </Button>

          <Button variant="contained" size="medium" color="warning">
            Medium
          </Button>

          <Button variant="contained" size="medium" color="info">
            Medium
          </Button>

          <Button variant="contained" size="medium" color="secondary">
            Medium
          </Button>
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Medium / Disabled
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <Button variant="contained" size="medium" color="primary" disabled>
            Medium
          </Button>

          <Button variant="contained" size="medium" color="error" disabled>
            Medium
          </Button>

          <Button variant="contained" size="medium" color="warning" disabled>
            Medium
          </Button>

          <Button variant="contained" size="medium" color="info" disabled>
            Medium
          </Button>

          <Button variant="contained" size="medium" color="secondary" disabled>
            Medium
          </Button>
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Small
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <Button variant="contained" size="small" color="primary">
            Small
          </Button>

          <Button variant="contained" size="small" color="error">
            Small
          </Button>

          <Button variant="contained" size="small" color="warning">
            Small
          </Button>

          <Button variant="contained" size="small" color="info">
            Small
          </Button>

          <Button variant="contained" size="small" color="secondary">
            Small
          </Button>
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Small / Disabled
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <Button variant="contained" size="small" color="primary" disabled>
            Small
          </Button>

          <Button variant="contained" size="small" color="error" disabled>
            Small
          </Button>

          <Button variant="contained" size="small" color="warning" disabled>
            Small
          </Button>

          <Button variant="contained" size="small" color="info" disabled>
            Small
          </Button>

          <Button variant="contained" size="small" color="secondary" disabled>
            Small
          </Button>
        </Box>
      </Box>

      <Box id="button-outlined" sx={{ scrollMarginTop: 100, width: "100%" }}>
        <Typography
          component="div"
          variant="h3"
          sx={{ mb: 10, backgroundColor: "green.main", p: 2 }}
        >
          Button/Outlined
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Large
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <Button variant="outlined" size="large" color="primary">
            Large
          </Button>

          <Button variant="outlined" size="large" color="error">
            Large
          </Button>

          <Button variant="outlined" size="large" color="warning">
            Large
          </Button>

          <Button variant="outlined" size="large" color="info">
            Large
          </Button>

          <Button variant="outlined" size="large" color="secondary">
            Large
          </Button>
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Large / Disabled
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <Button variant="outlined" size="large" color="primary" disabled>
            Large
          </Button>

          <Button variant="outlined" size="large" color="error" disabled>
            Large
          </Button>

          <Button variant="outlined" size="large" color="warning" disabled>
            Large
          </Button>

          <Button variant="outlined" size="large" color="info" disabled>
            Large
          </Button>

          <Button variant="outlined" size="large" color="secondary" disabled>
            Large
          </Button>
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Medium
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <Button variant="outlined" size="medium" color="primary">
            Medium
          </Button>

          <Button variant="outlined" size="medium" color="error">
            Medium
          </Button>

          <Button variant="outlined" size="medium" color="warning">
            Medium
          </Button>

          <Button variant="outlined" size="medium" color="info">
            Medium
          </Button>

          <Button variant="outlined" size="medium" color="secondary">
            Medium
          </Button>
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Medium / Disabled
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <Button variant="outlined" size="medium" color="primary" disabled>
            Medium
          </Button>

          <Button variant="outlined" size="medium" color="error" disabled>
            Medium
          </Button>

          <Button variant="outlined" size="medium" color="warning" disabled>
            Medium
          </Button>

          <Button variant="outlined" size="medium" color="info" disabled>
            Medium
          </Button>

          <Button variant="outlined" size="medium" color="secondary" disabled>
            Medium
          </Button>
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Small
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <Button variant="outlined" size="small" color="primary">
            Small
          </Button>

          <Button variant="outlined" size="small" color="error">
            Small
          </Button>

          <Button variant="outlined" size="small" color="warning">
            Small
          </Button>

          <Button variant="outlined" size="small" color="info">
            Small
          </Button>

          <Button variant="outlined" size="small" color="secondary">
            Small
          </Button>
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Small / Disabled
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <Button variant="outlined" size="small" color="primary" disabled>
            Small
          </Button>

          <Button variant="outlined" size="small" color="error" disabled>
            Small
          </Button>

          <Button variant="outlined" size="small" color="warning" disabled>
            Small
          </Button>

          <Button variant="outlined" size="small" color="info" disabled>
            Small
          </Button>

          <Button variant="outlined" size="small" color="secondary" disabled>
            Small
          </Button>
        </Box>
      </Box>

      <Box id="button-text" sx={{ scrollMarginTop: 100, width: "100%" }}>
        <Typography
          component="div"
          variant="h3"
          sx={{ mb: 10, backgroundColor: "green.main", p: 2 }}
        >
          Button/Text
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Large
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <Button variant="text" size="large" color="primary">
            Large
          </Button>

          <Button variant="text" size="large" color="error">
            Large
          </Button>

          <Button variant="text" size="large" color="warning">
            Large
          </Button>

          <Button variant="text" size="large" color="info">
            Large
          </Button>

          <Button variant="text" size="large" color="secondary">
            Large
          </Button>
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Large / Disabled
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <Button variant="text" size="large" color="primary" disabled>
            Large
          </Button>

          <Button variant="text" size="large" color="error" disabled>
            Large
          </Button>

          <Button variant="text" size="large" color="warning" disabled>
            Large
          </Button>

          <Button variant="text" size="large" color="info" disabled>
            Large
          </Button>

          <Button variant="text" size="large" color="secondary" disabled>
            Large
          </Button>
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Medium
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <Button variant="text" size="medium" color="primary">
            Medium
          </Button>

          <Button variant="text" size="medium" color="error">
            Medium
          </Button>

          <Button variant="text" size="medium" color="warning">
            Medium
          </Button>

          <Button variant="text" size="medium" color="info">
            Medium
          </Button>

          <Button variant="text" size="medium" color="secondary">
            Medium
          </Button>
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Medium / Disabled
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <Button variant="text" size="medium" color="primary" disabled>
            Medium
          </Button>

          <Button variant="text" size="medium" color="error" disabled>
            Medium
          </Button>

          <Button variant="text" size="medium" color="warning" disabled>
            Medium
          </Button>

          <Button variant="text" size="medium" color="info" disabled>
            Medium
          </Button>

          <Button variant="text" size="medium" color="secondary" disabled>
            Medium
          </Button>
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Small
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <Button variant="text" size="small" color="primary">
            Small
          </Button>

          <Button variant="text" size="small" color="error">
            Small
          </Button>

          <Button variant="text" size="small" color="warning">
            Small
          </Button>

          <Button variant="text" size="small" color="info">
            Small
          </Button>

          <Button variant="text" size="small" color="secondary">
            Small
          </Button>
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Small / Disabled
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <Button variant="text" size="small" color="primary" disabled>
            Small
          </Button>

          <Button variant="text" size="small" color="error" disabled>
            Small
          </Button>

          <Button variant="text" size="small" color="warning" disabled>
            Small
          </Button>

          <Button variant="text" size="small" color="info" disabled>
            Small
          </Button>

          <Button variant="text" size="small" color="secondary" disabled>
            Small
          </Button>
        </Box>
      </Box>

      <Box id="input-outlined" sx={{ scrollMarginTop: 100, width: "100%" }}>
        <Typography
          component="div"
          variant="h3"
          sx={{ mb: 10, backgroundColor: "green.main", p: 2 }}
        >
          Input/Outlined
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Normal
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <OutlinedInput placeholder="placeholder" size="large" />
          <OutlinedInput placeholder="placeholder" size="medium" />
          <OutlinedInput placeholder="placeholder" size="small" />
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Normal / Has Value
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <OutlinedInput value="Value" size="large" />
          <OutlinedInput value="Value" size="medium" />
          <OutlinedInput value="Value" size="small" />
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Normal / Has Icon Prefix
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <OutlinedInput
            value="Value"
            size="large"
            startAdornment={<Search />}
          />
          <OutlinedInput
            value="Value"
            size="medium"
            startAdornment={<Search />}
          />
          <OutlinedInput
            value="Value"
            size="small"
            startAdornment={<Search />}
          />
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Normal / Has Icon Suffix
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <OutlinedInput
            value="Value"
            size="large"
            endAdornment={<RemoveRedEye />}
          />
          <OutlinedInput
            value="Value"
            size="medium"
            type="password"
            endAdornment={<RemoveRedEye />}
          />
          <OutlinedInput
            value="Value"
            size="small"
            endAdornment={<RemoveRedEye />}
          />
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Normal / Has Icon
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <OutlinedInput
            value="Value"
            size="large"
            startAdornment={<LockOpen />}
            endAdornment={<RemoveRedEye />}
          />
          <OutlinedInput
            value="Value"
            size="medium"
            type="password"
            startAdornment={<LockOpen />}
            endAdornment={<RemoveRedEye />}
          />
          <OutlinedInput
            value="Value"
            size="small"
            startAdornment={<LockOpen />}
            endAdornment={<RemoveRedEye />}
          />
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Error
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <OutlinedInput error placeholder="placeholder" size="large" />
          <OutlinedInput error placeholder="placeholder" size="medium" />
          <OutlinedInput error placeholder="placeholder" size="small" />
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Error / Has Value
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <OutlinedInput error value="Value" size="large" />
          <OutlinedInput error value="Value" size="medium" />
          <OutlinedInput error value="Value" size="small" />
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Error / Has Icon Prefix
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <OutlinedInput
            error
            value="Value"
            size="large"
            startAdornment={<Search />}
          />
          <OutlinedInput
            error
            value="Value"
            size="medium"
            startAdornment={<Search />}
          />
          <OutlinedInput
            error
            value="Value"
            size="small"
            startAdornment={<Search />}
          />
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Error / Has Icon Suffix
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <OutlinedInput
            error
            value="Value"
            size="large"
            endAdornment={<RemoveRedEye />}
          />
          <OutlinedInput
            error
            value="Value"
            size="medium"
            type="password"
            endAdornment={<RemoveRedEye />}
          />
          <OutlinedInput
            error
            value="Value"
            size="small"
            endAdornment={<RemoveRedEye />}
          />
        </Box>

        <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
          Error / Has Icon
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            gap: 10,
            borderRadius: 1,
            padding: 4,
            border: "1px dashed black",
            borderColor: "green.main",
          }}
        >
          <OutlinedInput
            error
            value="Value"
            size="large"
            startAdornment={<LockOpen />}
            endAdornment={<RemoveRedEye />}
          />
          <OutlinedInput
            error
            value="Value"
            size="medium"
            type="password"
            startAdornment={<LockOpen />}
            endAdornment={<RemoveRedEye />}
          />
          <OutlinedInput
            error
            value="Value"
            size="small"
            startAdornment={<LockOpen />}
            endAdornment={<RemoveRedEye />}
          />
        </Box>
      </Box>

      {/* <Box id="others" sx={{ scrollMarginTop: 100, width: "100%" }}>
        <Typography
          component="div"
          variant="h3"
          sx={{ mb: 5, backgroundColor: "green.main", p: 2 }}
        >
          Others
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <div id="Elevation">
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                gap: 10,
                flexWrap: "wrap",
                borderRadius: 1,
                padding: 4,
                border: "1px dashed black",
                borderColor: "green.main",
              }}
            >
              <Typography variant="h6" color="primary" sx={{ width: "100%" }}>
                Elevation
              </Typography>
              {Array.from({ length: 5 }).map((_, index) => (
                <Paper
                  key={index}
                  sx={{
                    width: 200,
                    height: 200,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  elevation={index}
                >
                  {`elevation${index >= 4 ? ">" : "="}${index}`}
                </Paper>
              ))}
            </Box>
          </div>
          <div id="Break-Points">
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                gap: 2,
                flexWrap: "wrap",
                borderRadius: 1,
                padding: 4,
                border: "1px dashed black",
                borderColor: "green.main",
              }}
            >
              <Typography variant="h6" color="primary" sx={{ width: "100%" }}>
                Break-Points
              </Typography>
              {Object.entries(breakpoints.values).map(([key, value]) => (
                <Typography
                  key={key}
                  variant="14/Bold"
                  color="primary"
                  sx={{ width: "100%" }}
                >
                  {`${key}: ${value}px`}
                </Typography>
              ))}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  columnGap: 10,
                  flexWrap: "wrap",
                  borderRadius: 1,
                  padding: 4,
                  border: "1px dashed black",
                  borderColor: "green.main",
                  width: "100%",
                }}
              >
                <Typography
                  variant="14/Bold"
                  color="primary"
                  sx={{ width: "100%" }}
                >
                  Resize Window
                </Typography>
                {Object.entries(breakpoints.values).map(([key, value]) => (
                  <Typography
                    key={key}
                    variant="16/Regular"
                    color="primary"
                    sx={{
                      display: (() => {
                        const bp: any = {};
                        breakpoints.keys.forEach((item) => {
                          if (item === key) {
                            bp[item] = "block";
                          } else {
                            bp[item] = "none";
                          }
                        });
                        return bp;
                      })(),
                    }}
                  >
                    {`Current Breakpoint is ${key}: ${value}px`}
                  </Typography>
                ))}
              </Box>
            </Box>
          </div>
          <div id="Favicons">
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                gap: 4,
                flexWrap: "wrap",
                borderRadius: 1,
                padding: 4,
                border: "1px dashed black",
                borderColor: "green.main",
              }}
            >
              <Typography variant="h6" color="primary" sx={{ width: "100%" }}>
                Favicons
              </Typography>
              {[
                "/favicons/apple-icon-57x57.png",
                "/favicons/apple-icon-60x60.png",
                "/favicons/apple-icon-72x72.png",
                "/favicons/apple-icon-76x76.png",
                "/favicons/apple-icon-114x114.png",
                "/favicons/apple-icon-120x120.png",
                "/favicons/apple-icon-144x144.png",
                "/favicons/apple-icon-152x152.png",
                "/favicons/apple-icon-180x180.png",
                "/favicons/android-icon-192x192.png",
                "/favicons/favicon-32x32.png",
                "/favicons/favicon-96x96.png",
                "/favicons/favicon-16x16.png",
              ].map((favicon) => (
                <FaviconBox key={favicon} path={favicon} />
              ))}
            </Box>
          </div>
        </Box>
      </Box> */}
    </Box>
  );
};

export default DevComponents;
