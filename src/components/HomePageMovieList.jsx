import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Movies from "../data/Movies";
import PosterWithPoint from "./PosterWithPoint";

const HomePageMovieList = () => {
  return (
    <View>
      <FlatList
        horizontal
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        data={Movies}
        renderItem={({ item }) => (
          <PosterWithPoint poster_uri={item.poster} point={item.point} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomePageMovieList;

const styles = StyleSheet.create({});
