import React from "react";
import { Text } from "react-native";

type Props = {
  children: any;
  style?: object;
  type?: string;
};

interface TypeSet {
  [key: string]: object;
}

const typeStyles: TypeSet = {
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

const T = ({ type = "p", children, style = {}, ...other }: Props) => {
  const typeStyle = typeStyles[type];

  const finalStyles = {
    ...typeStyle,
    ...style,
  };

  return (
    <Text {...other} style={finalStyles}>
      {children}
    </Text>
  );
};

export const H1 = (props: Props) => <T {...props} type="h1" />;
export const H2 = (props: Props) => <T {...props} type="h2" />;
export const H3 = (props: Props) => <T {...props} type="h3" />;
export const H4 = (props: Props) => <T {...props} type="h4" />;
export const P = (props: Props) => <T {...props} type="p" />;
export const Label = (props: Props) => <T {...props} type="label" />;
