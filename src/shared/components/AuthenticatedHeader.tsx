import React from "react";
import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { headerHeight, padding } from "../utils/style/dims";
import { darkBlue, white } from "../utils/style/colors";

const AuthenticatedHeader = () => (
  <View style={styles.header}>
    <View style={styles.logo}></View>
    <View style={styles.hamburger}>
      <Feather name="menu" size={40} color={white} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: headerHeight,
    maxHeight: headerHeight,
    justifyContent: "space-between",
    backgroundColor: darkBlue,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: padding,
  },
  logo: {
    backgroundColor: white,
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  hamburger: {
    width: 40,
    height: 40,
  },
});

export default AuthenticatedHeader;
