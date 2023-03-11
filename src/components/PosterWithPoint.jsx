import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const PosterWithPoint = ({ poster_uri, point }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: poster_uri }} />

      <View style={styles.point_container}>
        <MaterialCommunityIcons name="star" size={26} color="white" />
        <Text style={styles.point}>{point}</Text>
      </View>
      <MaterialCommunityIcons
        style={styles.favourite_icon}
        name="cards-heart-outline"
        size={26}
        color="white"
      />
    </View>
  );
};

export default PosterWithPoint;

const styles = StyleSheet.create({
  container: {},
  img: {
    height: 292,
    width: 206,
    borderRadius: 22,
  },
  point_container: {
    position: "absolute",
    top: 13,
    left: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  point: {
    color: "white",
    fontWeight: "bold",
  },
  favourite_icon: {
    position: "absolute",
    top: 13,
    right: 30,
  },
});
