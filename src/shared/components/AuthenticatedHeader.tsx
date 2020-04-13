import React from "react";
import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import T from "./Text";
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
      <T.H4 style={{ marginLeft: 10, color: white }}>ImSafe Pass</T.H4>
    </View>

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
    backgroundColor: royalBlue,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: padding,
  },
  logo: {
    backgroundColor: white,
    borderRadius: 20,
    ...iconDims,
  },
  hamburger: {
    ...iconDims,
  },
});

export default AuthenticatedHeader;
