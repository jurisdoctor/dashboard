"use client";

import { ThemeProvider, createTheme } from "@mui/material";

import Header from "../components/Header";
import React from "react";
import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const ModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const darkThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...darkTheme,
      }),
    [mode]
  );

  const lightThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...lightTheme,
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider
        theme={mode === "dark" ? darkThemeChosen : lightThemeChosen}
      >
        <Header ColorModeContext={ColorModeContext} />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ModeProvider;
