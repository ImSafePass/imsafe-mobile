import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface Props {
  style: object;
}

const LogoWhite = ({ style = {} }: Props) => (
  <View style={[{ alignItems: "center", justifyContent: "center" }, style]}>
    <Svg viewBox="0 0 36 49" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 0L0 6.86598V14.5988V15.2165V28.5047C0 35.9338 7.98081 41.3127 15.7874 46.5742C16.5199 47.0679 17.2508 47.5606 17.9735 48.0538C18.6962 47.5606 19.4271 47.0679 20.1596 46.5742C27.9662 41.3127 35.947 35.9338 35.947 28.5047V15.2165H36V6.86598L18 0Z"
        fill="#F4F8FB"
      />
      <Path
        d="M27.4152 18.088C26.7675 16.8929 22.707 12.8907 17.9999 18.685C13.0567 12.8907 9.23126 16.8929 8.58468 18.088C7.40735 20.298 8.11353 23.6437 9.76201 25.2567L18.0011 33.6205L26.2401 25.2567C27.8864 23.6437 28.5925 20.2991 27.4152 18.088H27.4152Z"
        fill="#3341C0"
      />
    </Svg>
  </View>
);

export default LogoWhite;
