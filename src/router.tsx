import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import * as React from "react";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});
export const Router = () => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ColorModeContext.Provider>
  );
};

export default Router;
