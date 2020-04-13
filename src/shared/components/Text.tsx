import React from "react";
import { Text } from "react-native";
import WithFonts from "./WithFonts";

type TProps = {
  children: any;
  style?: object;
  type?: string;
};

interface TObject {
  [key: string]: object;
}

const typeStyles: TObject = {
  h1: {
    fontSize: 40,
    fontFamily: "Heebo-ExtraBold",
  },
  h2: {
    fontSize: 32,
    fontFamily: "Heebo-Bold",
  },
  h3: {
    fontSize: 28,
    fontFamily: "Heebo-Regular",
  },
  h4: {
    fontSize: 24,
    fontFamily: "Heebo-Regular",
  },
  p: {
    fontSize: 16,
    fontFamily: "Heebo-Regular",
  },
  label: {
    fontSize: 16,
    fontFamily: "Heebo-Bold",
  },
};

const T = ({ type = "p", children, style = {}, ...other }: TProps) => {
  const typeStyle = typeStyles[type];

  if (!typeStyle) {
    throw new Error(`Bad text element type: ${type}`);
  }
  const finalStyles = {
    ...typeStyle,
    ...style,
  };

  return (
    <WithFonts>
      <Text {...other} style={finalStyles}>
        {children}
      </Text>
    </WithFonts>
  );
};

export const H1 = (props: TProps) => <T {...props} type="h1" />;
export const H2 = (props: TProps) => <T {...props} type="h2" />;
export const H3 = (props: TProps) => <T {...props} type="h3" />;
export const H4 = (props: TProps) => <T {...props} type="h4" />;
export const P = (props: TProps) => <T {...props} type="p" />;
export const Label = (props: TProps) => <T {...props} type="label" />;

export default {
  H1,
  H2,
  H3,
  H4,
  P,
  Label,
};
