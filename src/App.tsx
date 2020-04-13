import React from "react";
import { StyleSheet, View, Platform } from "react-native";

import { H1, H4 } from "./shared/components/Text";
import AuthenticatedHeader from "./shared/components/AuthenticatedHeader";
import { padding } from "./shared/utils/style/dims";
import { white } from "./shared/utils/style/colors";

const App = () => (
  <View style={styles.container}>
    <AuthenticatedHeader />
    <View style={styles.main}>
      <H1>Welcome to ImSafe!</H1>
      <H4>You're on {Platform.OS}</H4>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  main: {
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: padding,
  },
});

export default App;
