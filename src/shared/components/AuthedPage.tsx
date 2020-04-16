import React from "react";
import { StyleSheet, View } from "react-native";

import { padding } from "utils/style/dims";
import AuthenticatedHeader from "./AuthenticatedHeader";

interface Props {
  children: React.ReactNode | null;
}

const AuthedPage = ({ children }: Props) => (
  <>
    <AuthenticatedHeader />
    <View style={styles.main}>{children}</View>
  </>
);

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: padding,
  },
});

export default AuthedPage;
