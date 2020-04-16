import React from "react";
import { View, Platform } from "react-native";
import { Title, Subheading } from "react-native-paper";

const Home = () => (
  <View>
    <Title>ImSafe</Title>
    <Subheading>You are viewing this on: {Platform.OS}</Subheading>
  </View>
);

export default Home;
