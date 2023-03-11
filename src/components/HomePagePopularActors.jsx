import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Actors from "../data/Actors";
import PopularActor from "./PopularActor";

const HomePagePopularActors = () => {
  return (
    <View>
      <FlatList
        horizontal
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        data={Actors}
        renderItem={({ item }) => (
          <PopularActor img_uri={item.img_uri} full_name={item.full_name} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomePagePopularActors;

const styles = StyleSheet.create({});
