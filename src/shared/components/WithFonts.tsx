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

const heebos = ["ExtraBold", "Regular", "Thin"];
const resolve = (fontTypes: string[]) =>
  fontTypes.reduce(
    (obj, typ) => ({
      ...obj,
      [`Heebo-${typ}`]: require(`../assets/fonts/Heebo/Heebo-${typ}.ttf`),
    }),
    {}
  );

export default (props: { children: any }) => {
  let [fontsLoaded] = useFonts({
    ...resolve(heebos),
  });

  return fontsLoaded ? props.children : <AppLoading />;
};
