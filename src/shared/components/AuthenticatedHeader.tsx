import React from "react";
import { Appbar } from "react-native-paper";

const AuthenticatedHeader = () => (
  <Appbar>
    <Appbar.Action icon="menu" onPress={() => console.log("Pressed menu")} />
    <Appbar.Content title="ImSafe Pass" />
  </Appbar>
);

export default AuthenticatedHeader;
