import React from "react";
import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { H4 } from "./Text";
import Logo from "./LogoWhite";

import { headerHeight, padding } from "../utils/style/dims";
import { royalBlue, white } from "../utils/style/colors";

const iconDims = {
  height: 40,
  width: 40,
};

const AuthenticatedHeader = () => (
  <View style={styles.header}>
    <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
      <Logo style={{ width: 30, height: 40 }} />
      <H4 style={{ marginLeft: 10, color: white }}>ImSafe Pass</H4>
    </View>

    <View style={styles.hamburger}>
      <Feather name="menu" size={iconDims.height} color={white} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: headerHeight,
    maxHeight: headerHeight,
    justifyContent: "space-between",
    backgroundColor: royalBlue,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: padding,
  },
  hamburger: {
    ...iconDims,
  },
});

export default AuthenticatedHeader;
