import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Divider = () => {
  return <View style={divider} />;
};

export default Divider;

const { divider } = StyleSheet.create({
  divider: {
    width: "100%",
    height: 2,
    backgroundColor: "#e6e7e8",
  },
});
