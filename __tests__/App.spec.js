import "react-native";
import React from "react";
import { BaseApp } from "../src/App.tsx";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const app = renderer.create(<BaseApp />);
  expect(app).toMatchSnapshot();
});
