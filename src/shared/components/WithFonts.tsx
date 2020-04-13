import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";

function useFonts(fontMap: { [fontFamily: string]: Font.FontSource }) {
  let [fontsLoaded, setFontsLoaded] = useState(false);
  (async () => {
    await Font.loadAsync(fontMap);
    setFontsLoaded(true);
  })();
  return [fontsLoaded];
}

export default (props: { children: any }) => {
  let [fontsLoaded] = useFonts({
    "Heebo-Bold": require("../assets/fonts/Heebo/Heebo-Bold.ttf"),
    "Heebo-Regular": require("../assets/fonts/Heebo/Heebo-Regular.ttf"),
    "Heebo-ExtraBold": require("../assets/fonts/Heebo/Heebo-ExtraBold.ttf"),
  });

  return fontsLoaded ? props.children : <AppLoading />;
};
