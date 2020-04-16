import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import AuthedPage from "./shared/components/AuthedPage";
import Home from "./shared/pages/Home";

import WithFonts from "./shared/components/WithFonts";

const theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3341c0", // royal blue
    accent: "#1c2468", // dark blue
  },
};

// Exported separately for testing
// (because WithFonts is asynchronous)
export const BaseApp = () => (
  <PaperProvider theme={theme}>
    <AuthedPage>
      <Home />
    </AuthedPage>
  </PaperProvider>
);

const App = () => (
  <WithFonts>
    <BaseApp />
  </WithFonts>
);

export default App;
