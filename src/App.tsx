import React from "react";
import { StyleSheet, Text, View } from "react-native";

import WithFonts from "./shared/components/WithFonts";
import AuthenticatedHeader from "./shared/components/AuthenticatedHeader";
import { padding } from "./shared/utils/style/dims";
import { white } from "./shared/utils/style/colors";

const App = () => (
  <WithFonts>
    <View style={styles.container}>
      <AuthenticatedHeader />
      <View style={styles.main}>
        <Text style={styles.header}>Welcome to ImSafe!</Text>
      </View>
    </View>
  </WithFonts>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    fontSize: 40,
    fontFamily: "Heebo-Regular",
  },
  main: {
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: padding,
  },
});

export default App;