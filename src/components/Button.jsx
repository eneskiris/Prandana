import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Button = ({ button_style = [], text_style = [], text: content }) => {
  return (
    <Pressable style={[styles.container, ...button_style]}>
      <Text style={[styles.text, ...text_style]}>{content}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#eee",
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "6%",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
