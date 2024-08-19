"use client";

import Drawer from "@mui/material/Drawer";
import { useAppDispatch, useAppSelector } from "@/redux";
import { closeSidebarSearch } from "@/redux/sidebarReducer";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  useTheme,
} from "@mui/material";
import { Add, ArrowBack, Search } from "@mui/icons-material";
// import { useTranslations } from "use-intl";
import { Fragment, useEffect, useRef, useState } from "react";
import useDebounce from "@/hooks/useDebounce";

type SearchOptionType = {
  id: string;
  label: string;
};

function MainAppSearchDrawer() {
  // const t = useTranslations();
  const t = (str: string) => str;
  const dispatch = useAppDispatch();
  const { palette } = useTheme();
  const { open } = useAppSelector((s) => s.sidebar.search);
  const searchBoxRef = useRef<HTMLElement>(null);

  const [searchKeyword, setSearchKeyword] = useState("");
  const searchDebounce = useDebounce(searchKeyword);

  const [searchOptions, setSearchOptions] = useState<{
    options: SearchOptionType[];
    loading: boolean;
  }>({ options: [], loading: false });

  useEffect(() => {
    if (open) {
      searchBoxRef.current?.focus();
    }
  }, [open]);

  /**
   * Call API get search suggestion
   */
  useEffect(() => {
    let mounted = true;
    const cleanup = () => {
      mounted = false;
    };

    if (!searchOptions.loading) return cleanup;

    const keyword = searchDebounce.trim();

    if (!keyword.length) {
      setSearchOptions({
        options: [],
        loading: false,
      });
      return;
    }
    console.log("CALL API SEARCH", keyword);
    new Promise<{
      data: { id: string; label: string }[];
    }>((resolve) => {
      if (keyword.includes("rain")) {
        setTimeout(() => {
          resolve({
            data: Array.from({ length: 9 }).map((_, index) => ({
              id:
                index % 3 == 2
                  ? `peopleIntelligence-id-${index + 1}`
                  : index % 3 == 1
                  ? `e8ee4077-3848-46cc-827f-fc2a576725${index + 1}d`
                  : `company-id-${index + 1}`,
              label:
                index % 3 == 2
                  ? `${keyword} PeopleIntelligence ${keyword} ${index + 1}`
                  : index % 3 == 1
                  ? `The ASEAN Post ${keyword} ${index + 1} ${keyword}`
                  : `${keyword} Company ${keyword} ${index + 1} ${keyword}`,
            })),
          });
        }, 1000);
      } else {
        resolve({ data: [] });
      }
    }).then((res) => {
      if (!mounted) return;

      setSearchOptions({
        options: res.data,
        loading: false,
      });
    });

    return cleanup;
  }, [searchDebounce]);

  const handleCloseSidebarSearch = () => {
    dispatch(closeSidebarSearch());
  };

  return (
    <Drawer
      variant="temporary"
      anchor="bottom"
      open={open}
      onClose={handleCloseSidebarSearch}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      PaperProps={{
        className: "mobile-scrollbar",
        sx: { backgroundColor: "gray.10" },
      }}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          top: "auto",
          bottom: 0,
          width: "100%",
          height: "100%",
        },
        display: { xs: "block", sm: "none" },
      }}
    >
      <div>
        <Box
          sx={{
            backgroundColor: "gray.09",
            borderBottom: `1px solid ${palette.gray["07"]}`,
          }}
          className="flex gap-1 pl-1 pr-4 py-4"
        >
          <IconButton className="sm:hidden" onClick={handleCloseSidebarSearch}>
            <ArrowBack />
          </IconButton>
          <TextField
            variant="outlined"
            placeholder={t("navbar.searchPlaceHolder")}
            type="text"
            size="small"
            autoComplete="off"
            inputRef={searchBoxRef}
            onInput={(e) => {
              setSearchOptions({ options: [], loading: true });
              setSearchKeyword(String((e.target as any).value).trim());
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search color="primary" />
                </InputAdornment>
              ),
              size: "small",
            }}
            className="w-full"
          />
        </Box>
        {/* {searchOptions.loading ? (
          <ComponentLoader />
        ) : (
          <div>
            {[
              ...(searchOptions.options.length
                ? searchOptions.options
                : latestSearchHistories),
            ].map((option) => (
              <Fragment key={option.id}>
                <SearchItem
                  option={option}
                  searchDebounce={searchDebounce}
                  setSelectedOption={setSelectedOption}
                  onSearchItemClick={handleCloseSidebarSearch}
                />
              </Fragment>
            ))}
          </div>
        )} */}
        <div className="flex w-full gap-3 p-4">
          <Button variant="outlined" color="primary" className="w-full">
            {t("navbar.searchHistory")}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="w-full flex items-center"
          >
            {t("navbar.watchListSearch")}
            <Add color="primary" className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </Drawer>
  );
}

export default MainAppSearchDrawer;
