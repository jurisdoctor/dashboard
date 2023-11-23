"use client";

import { Box, IconButton, ThemeProvider } from "@mui/material";
import { createTheme, useTheme } from "@mui/material/styles";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Dashboard from "@/app/dashboard";
import Header from "@/app/components/Header";
import Login from "./components/Login";
import React from "react";
import SideMenu from "@/app/components/SideMenu";
import scss from "./page.module.scss";
import { useSession } from "next-auth/react";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Home = () => {
  const { data: session } = useSession();

  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <main className={scss.main}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.default",
                color: "text.primary",
                borderRadius: 1,
                p: 3,
              }}
            >
              {theme.palette.mode} mode
              <IconButton
                sx={{ ml: 1 }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
            </Box>
            <Header />
            {session && (
              <>
                <SideMenu />
                <Dashboard />
              </>
            )}
            <Login />
          </main>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default Home;
