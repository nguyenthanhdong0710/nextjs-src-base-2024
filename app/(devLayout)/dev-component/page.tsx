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
      <Box id="typography" sx={{ scrollMarginTop: 100, width: "100%" }}>
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
      {
        // <>
        //   <Box id="components" sx={{ scrollMarginTop: 100, width: "100%" }}>
        //     <Typography
        //       component="div"
        //       variant="h3"
        //       color="primary"
        //       sx={{ mb: 5, backgroundColor: "green.main", p: 2 }}
        //     >
        //       Components
        //     </Typography>
        //     <Box
        //       sx={{
        //         display: "flex",
        //         flexDirection: "column",
        //         justifyContent: "start",
        //         alignItems: "start",
        //         flexWrap: "wrap",
        //         gap: 4,
        //       }}
        //     >
        //       <Typography variant="h6" color="primary" sx={{ width: "100%" }}>
        //         Button
        //       </Typography>
        //       <Box
        //         sx={{
        //           display: "flex",
        //           justifyContent: "start",
        //           gap: 10,
        //           flexWrap: "wrap",
        //         }}
        //       >
        //         <Box
        //           sx={{
        //             display: "flex",
        //             flexDirection: "column",
        //             gap: 4,
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <Typography
        //             variant="bodyS.regular"
        //             color="primary"
        //             component="div"
        //           >
        //             Primary - disabled
        //           </Typography>
        //           <div>
        //             <Button variant="contained" disabled>
        //               Label
        //             </Button>
        //           </div>
        //         </Box>
        //         <Box
        //           sx={{
        //             display: "flex",
        //             flexDirection: "column",
        //             gap: 4,
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <Typography
        //             variant="bodyS.regular"
        //             color="primary"
        //             component="div"
        //           >
        //             Primary - show icon false
        //           </Typography>
        //           <div>
        //             <Button variant="contained">Label</Button>
        //           </div>
        //         </Box>
        //         <Box
        //           sx={{
        //             display: "flex",
        //             flexDirection: "column",
        //             gap: 4,
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <Typography
        //             variant="bodyS.regular"
        //             color="primary"
        //             component="div"
        //           >
        //             Primary - show icon right
        //           </Typography>
        //           <div>
        //             <Button variant="contained">Label</Button>
        //           </div>
        //         </Box>
        //         <Box
        //           sx={{
        //             display: "flex",
        //             flexDirection: "column",
        //             gap: 4,
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <Typography
        //             variant="bodyS.regular"
        //             color="primary"
        //             component="div"
        //           >
        //             Primary - show icon left
        //           </Typography>
        //           <div>
        //             <Button variant="contained">Label</Button>
        //           </div>
        //         </Box>
        //         <Box
        //           sx={{
        //             display: "flex",
        //             flexDirection: "column",
        //             gap: 4,
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <Typography
        //             variant="bodyS.regular"
        //             color="primary"
        //             component="div"
        //           >
        //             Primary - show icon only
        //           </Typography>
        //         </Box>
        //       </Box>
        //       <Box
        //         sx={{
        //           display: "flex",
        //           justifyContent: "start",
        //           gap: 10,
        //           flexWrap: "wrap",
        //         }}
        //       >
        //         <Box
        //           sx={{
        //             display: "flex",
        //             flexDirection: "column",
        //             gap: 4,
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <Typography
        //             variant="bodyS.regular"
        //             color="primary"
        //             component="div"
        //           >
        //             Secondary - disabled
        //           </Typography>
        //           <div>
        //             <Button variant="contained" color="secondary" disabled>
        //               Label
        //             </Button>
        //           </div>
        //         </Box>
        //         <Box
        //           sx={{
        //             display: "flex",
        //             flexDirection: "column",
        //             gap: 4,
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <Typography
        //             variant="bodyS.regular"
        //             color="primary"
        //             component="div"
        //           >
        //             Secondary - show icon false
        //           </Typography>
        //           <div>
        //             <Button variant="contained" color="secondary">
        //               Label
        //             </Button>
        //           </div>
        //         </Box>
        //         <Box
        //           sx={{
        //             display: "flex",
        //             flexDirection: "column",
        //             gap: 4,
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <Typography
        //             variant="bodyS.regular"
        //             color="primary"
        //             component="div"
        //           >
        //             Secondary - show icon right
        //           </Typography>
        //           <div>
        //             <Button variant="contained" color="secondary">
        //               Label
        //             </Button>
        //           </div>
        //         </Box>
        //         <Box
        //           sx={{
        //             display: "flex",
        //             flexDirection: "column",
        //             gap: 4,
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <Typography
        //             variant="bodyS.regular"
        //             color="primary"
        //             component="div"
        //           >
        //             Secondary - show icon left
        //           </Typography>
        //           <div>
        //             <Button variant="contained" color="secondary">
        //               Label
        //             </Button>
        //           </div>
        //         </Box>
        //         <Box
        //           sx={{
        //             display: "flex",
        //             flexDirection: "column",
        //             gap: 4,
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <Typography
        //             variant="bodyS.regular"
        //             color="primary"
        //             component="div"
        //           >
        //             Secondary - show icon only
        //           </Typography>
        //           <div>
        //             <Button
        //               variant="contained"
        //               color="secondary"
        //               sx={{ px: 1.75 }}
        //             >
        //               {/* <Icon icon="mdi:add" height={24} width={24} /> */}
        //             </Button>
        //           </div>
        //         </Box>
        //       </Box>
        //       <Box
        //         sx={{
        //           display: "flex",
        //           justifyContent: "start",
        //           gap: 10,
        //           flexWrap: "wrap",
        //         }}
        //       >
        //         <Box
        //           sx={{
        //             display: "flex",
        //             flexDirection: "column",
        //             gap: 4,
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <Typography
        //             variant="bodyS.regular"
        //             color="primary"
        //             component="div"
        //           >
        //             Turquoise - disabled
        //           </Typography>
        //           <div>
        //             <Button variant="contained" color="turquoise" disabled>
        //               Label
        //             </Button>
        //           </div>
        //         </Box>
        //         <Box
        //           sx={{
        //             display: "flex",
        //             flexDirection: "column",
        //             gap: 4,
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <Typography
        //             variant="bodyS.regular"
        //             color="primary"
        //             component="div"
        //           >
        //             Turquoise - show icon false
        //           </Typography>
        //           <div>
        //             <Button variant="contained" color="turquoise">
        //               Label
        //             </Button>
        //           </div>
        //         </Box>
        //         <Box
        //           sx={{
        //             display: "flex",
        //             flexDirection: "column",
        //             gap: 4,
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <Typography
        //             variant="bodyS.regular"
        //             color="primary"
        //             component="div"
        //           >
        //             Turquoise - show icon right
        //           </Typography>
        //           <div>
        //             <Button variant="contained" color="turquoise">
        //               Label
        //             </Button>
        //           </div>
        //         </Box>
        //         <Box
        //           sx={{
        //             display: "flex",
        //             flexDirection: "column",
        //             gap: 4,
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <Typography
        //             variant="bodyS.regular"
        //             color="primary"
        //             component="div"
        //           >
        //             Turquoise - show icon left
        //           </Typography>
        //           <div>
        //             <Button variant="contained" color="turquoise">
        //               Label
        //             </Button>
        //           </div>
        //         </Box>
        //         <Box
        //           sx={{
        //             display: "flex",
        //             flexDirection: "column",
        //             gap: 4,
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <Typography
        //             variant="bodyS.regular"
        //             color="primary"
        //             component="div"
        //           >
        //             Turquoise - show icon only
        //           </Typography>
        //           <div>
        //             <Button
        //               variant="contained"
        //               color="turquoise"
        //               sx={{ px: 1.75 }}
        //             >
        //               {/* <Icon icon="mdi:add" height={24} width={24} /> */}
        //             </Button>
        //           </div>
        //         </Box>
        //       </Box>
        //       <Typography
        //         id="outlineInput"
        //         variant="h6"
        //         color="primary"
        //         sx={{ width: "100%", scrollMarginTop: 100 }}
        //       >
        //         Outlined Input
        //       </Typography>
        //       <Box
        //         sx={{
        //           display: "flex",
        //           justifyContent: "start",
        //           gap: 10,
        //           flexWrap: "wrap",
        //         }}
        //       >
        //         <Box
        //           sx={{
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <FormControl>
        //             <Typography
        //               variant="bodyM.regular"
        //               component="div"
        //               sx={{ color: "navy.20" }}
        //             >
        //               Input disable (no value)
        //             </Typography>
        //             <OutlinedInput placeholder="type something..." disabled />
        //           </FormControl>
        //         </Box>
        //         <Box
        //           sx={{
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <FormControl>
        //             <Typography
        //               variant="bodyM.regular"
        //               component="div"
        //               sx={{ color: "navy.20" }}
        //             >
        //               Input disable (have value)
        //             </Typography>
        //             <OutlinedInput
        //               value="Value"
        //               placeholder="Content"
        //               disabled
        //             />
        //           </FormControl>
        //         </Box>
        //         <Box
        //           sx={{
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <FormControl>
        //             <Typography
        //               variant="bodyM.regular"
        //               component="div"
        //               sx={{ color: "navy.20" }}
        //             >
        //               Input active (no value)
        //             </Typography>
        //             <OutlinedInput placeholder="type something..." />
        //           </FormControl>
        //         </Box>
        //         <Box
        //           sx={{
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <FormControl>
        //             <Typography
        //               variant="bodyM.regular"
        //               component="div"
        //               sx={{ color: "navy.20" }}
        //             >
        //               Input active (have value)
        //             </Typography>
        //             <OutlinedInput
        //               placeholder="type something..."
        //               value={input}
        //               onChange={(e) => setInput(e.target.value)}
        //             />
        //           </FormControl>
        //         </Box>
        //         <Box
        //           sx={{
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <FormControl>
        //             <Typography
        //               variant="bodyM.regular"
        //               component="div"
        //               sx={{ color: "navy.20" }}
        //             >
        //               Input Error
        //             </Typography>
        //             <OutlinedInput
        //               value={input}
        //               onChange={(e) => setInput(e.target.value)}
        //               placeholder="Content"
        //               error
        //             />
        //             <FormHelperText error>Error message</FormHelperText>
        //           </FormControl>
        //         </Box>
        //       </Box>
        //       <Typography
        //         variant="h6"
        //         color="primary"
        //         sx={{ width: "100%", scrollMarginTop: 100 }}
        //         id="dropdown"
        //       >
        //         Dropdown
        //       </Typography>
        //       <Box
        //         sx={{
        //           display: "flex",
        //           justifyContent: "start",
        //           gap: 10,
        //           flexWrap: "wrap",
        //         }}
        //       >
        //         <Box
        //           sx={{
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <FormControl>
        //             <Typography
        //               variant="bodyM.regular"
        //               component="div"
        //               sx={{ color: "navy.20" }}
        //             >
        //               Select disabled
        //             </Typography>
        //             <Select
        //               disabled
        //               displayEmpty
        //               defaultValue=""
        //               value={selectValue}
        //               onChange={(e) => setSelectValue(e.target.value)}
        //               renderValue={
        //                 selectValue
        //                   ? undefined
        //                   : () => (
        //                       <Typography sx={{ color: "neutral.80" }}>
        //                         None
        //                       </Typography>
        //                     )
        //               }
        //             >
        //               <MenuItem value={10}>Ten</MenuItem>
        //               <MenuItem value={20}>Twenty</MenuItem>
        //               <MenuItem value={30}>Thirty</MenuItem>
        //             </Select>
        //           </FormControl>
        //         </Box>
        //         <Box
        //           sx={{
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <FormControl>
        //             <Typography
        //               variant="bodyM.regular"
        //               component="div"
        //               sx={{ color: "navy.20" }}
        //             >
        //               Select active
        //             </Typography>
        //             <Select
        //               displayEmpty
        //               defaultValue=""
        //               value={selectValue}
        //               onChange={(e) => setSelectValue(e.target.value)}
        //               renderValue={
        //                 selectValue
        //                   ? undefined
        //                   : () => (
        //                       <Typography sx={{ color: "neutral.80" }}>
        //                         None
        //                       </Typography>
        //                     )
        //               }
        //             >
        //               <MenuItem value={10}>Ten</MenuItem>
        //               <MenuItem value={20}>Twenty</MenuItem>
        //               <MenuItem value={30}>Thirty</MenuItem>
        //             </Select>
        //           </FormControl>
        //         </Box>
        //         <Box
        //           sx={{
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <FormControl>
        //             <Typography
        //               variant="bodyM.regular"
        //               component="div"
        //               sx={{ color: "navy.20" }}
        //             >
        //               Select error
        //             </Typography>
        //             <Select
        //               error
        //               displayEmpty
        //               defaultValue=""
        //               value={selectValue}
        //               onChange={(e) => setSelectValue(e.target.value)}
        //               renderValue={
        //                 selectValue
        //                   ? undefined
        //                   : () => (
        //                       <Typography sx={{ color: "neutral.80" }}>
        //                         None
        //                       </Typography>
        //                     )
        //               }
        //             >
        //               <MenuItem value={10}>Ten</MenuItem>
        //               <MenuItem value={20}>Twenty</MenuItem>
        //               <MenuItem value={30}>Thirty</MenuItem>
        //             </Select>
        //             <FormHelperText>Error message</FormHelperText>
        //           </FormControl>
        //         </Box>
        //       </Box>
        //     </Box>
        //   </Box>
        //   <Box id="others" sx={{ scrollMarginTop: 100, width: "100%" }}>
        //     <Typography
        //       component="div"
        //       variant="h3"
        //       color="primary"
        //       sx={{ mb: 5, backgroundColor: "green.main", p: 2 }}
        //     >
        //       Others
        //     </Typography>
        //     <Box
        //       sx={{
        //         display: "flex",
        //         flexDirection: "column",
        //         justifyContent: "start",
        //         alignItems: "start",
        //         flexWrap: "wrap",
        //         gap: 10,
        //       }}
        //     >
        //       <div id="Elevation">
        //         <Box
        //           sx={{
        //             display: "flex",
        //             justifyContent: "start",
        //             gap: 10,
        //             flexWrap: "wrap",
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <Typography
        //             variant="h6"
        //             color="primary"
        //             sx={{ width: "100%" }}
        //           >
        //             Elevation
        //           </Typography>
        //           {Array.from({ length: 5 }).map((_, index) => (
        //             <Paper
        //               key={index}
        //               sx={{
        //                 width: 200,
        //                 height: 200,
        //                 display: "flex",
        //                 justifyContent: "center",
        //                 alignItems: "center",
        //               }}
        //               elevation={index}
        //             >
        //               {`elevation${index >= 4 ? ">" : "="}${index}`}
        //             </Paper>
        //           ))}
        //         </Box>
        //       </div>
        //       <div id="Break-Points">
        //         <Box
        //           sx={{
        //             display: "flex",
        //             justifyContent: "start",
        //             gap: 2,
        //             flexWrap: "wrap",
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <Typography
        //             variant="h6"
        //             color="primary"
        //             sx={{ width: "100%" }}
        //           >
        //             Break-Points
        //           </Typography>
        //           {Object.entries(breakpoints.values).map(([key, value]) => (
        //             <Typography
        //               key={key}
        //               variant="bodyM.regular"
        //               color="primary"
        //               sx={{ width: "100%" }}
        //             >
        //               {`${key}: ${value}px`}
        //             </Typography>
        //           ))}
        //           <Box
        //             sx={{
        //               display: "flex",
        //               justifyContent: "start",
        //               columnGap: 10,
        //               flexWrap: "wrap",
        //               borderRadius: 1,
        //               padding: 4,
        //               border: "1px dashed black",
        //               borderColor: "green.main",
        //               width: "100%",
        //             }}
        //           >
        //             <Typography
        //               variant="bodyM.bold"
        //               color="primary"
        //               sx={{ width: "100%" }}
        //             >
        //               Resize Window
        //             </Typography>
        //             {Object.entries(breakpoints.values).map(([key, value]) => (
        //               <Typography
        //                 key={key}
        //                 variant="bodyL.regular"
        //                 color="primary"
        //                 sx={{
        //                   display: (() => {
        //                     const bp: any = {};
        //                     breakpoints.keys.forEach((item) => {
        //                       if (item === key) {
        //                         bp[item] = "block";
        //                       } else {
        //                         bp[item] = "none";
        //                       }
        //                     });
        //                     return bp;
        //                   })(),
        //                 }}
        //               >
        //                 {`Current Breakpoint is ${key}: ${value}px`}
        //               </Typography>
        //             ))}
        //           </Box>
        //         </Box>
        //       </div>
        //       <div id="Favicons">
        //         <Box
        //           sx={{
        //             display: "flex",
        //             justifyContent: "start",
        //             gap: 4,
        //             flexWrap: "wrap",
        //             borderRadius: 1,
        //             padding: 4,
        //             border: "1px dashed black",
        //             borderColor: "green.main",
        //           }}
        //         >
        //           <Typography
        //             variant="h6"
        //             color="primary"
        //             sx={{ width: "100%" }}
        //           >
        //             Favicons
        //           </Typography>
        //           {[
        //             "/favicons/apple-icon-57x57.png",
        //             "/favicons/apple-icon-60x60.png",
        //             "/favicons/apple-icon-72x72.png",
        //             "/favicons/apple-icon-76x76.png",
        //             "/favicons/apple-icon-114x114.png",
        //             "/favicons/apple-icon-120x120.png",
        //             "/favicons/apple-icon-144x144.png",
        //             "/favicons/apple-icon-152x152.png",
        //             "/favicons/apple-icon-180x180.png",
        //             "/favicons/android-icon-192x192.png",
        //             "/favicons/favicon-32x32.png",
        //             "/favicons/favicon-96x96.png",
        //             "/favicons/favicon-16x16.png",
        //           ].map((favicon) => (
        //             <FaviconBox key={favicon} path={favicon} />
        //           ))}
        //         </Box>
        //       </div>
        //     </Box>
        //   </Box>
        // </>
      }
    </Box>
  );
};

export default DevComponents;
