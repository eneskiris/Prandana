import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const PopularActor = ({ full_name, img_uri }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: img_uri }} />
      <Text style={styles.full_name}>{full_name}</Text>
    </View>
  );
};

export default PopularActor;

const styles = StyleSheet.create({
  container: {
    rowGap: 13,
  },
  img: {
    height: 77,
    width: 77,
    borderRadius: 15,
  },
  full_name: {
    width: 77,
    textAlign: "center",
    lineHeight: 18,
  },
});
