import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import HomePageMovieList from "../components/HomePageMovieList";
import HomePagePopularActors from "../components/HomePagePopularActors";
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <View style={styles.header_container__movies}>
          <MaterialCommunityIcons name="movie-open" size={20} color="#B1B2B3" />
          <Text style={styles.header_container__movies_text}>MOVIES</Text>
        </View>
        <View style={styles.header_container__see_today}>
          <Text style={styles.header_container__see_today__text}>
            What would you like to see today?{" "}
            <Text style={styles.header_container__see_today__text_popular}>
              Popular
              <MaterialCommunityIcons
                name="chevron-down"
                size={24}
                color="#3544C4"
              />
            </Text>
          </Text>
          <FontAwesome name="search" size={24} color="black" />
        </View>
      </View>
      <View style={styles.movie_list}>
        <HomePageMovieList />
      </View>
      <View style={styles.popular_actors}>
        <View style={styles.popular_actors_texts}>
          <Text style={styles.popular_actors_texts_first_text__popular_actors}>
            Popular Actor's
          </Text>
          <Text style={styles.popular_actors_texts__see_all}>See all</Text>
        </View>
        <View style={styles.popular_actors_list}>
          <HomePagePopularActors />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const margin_top_13_percent = {
  marginTop: "13%",
};

const styles = StyleSheet.create({
  container: {
    marginLeft: "5%",
  },
  header_container: {
    marginTop: "7%",
  },
  header_container__movies: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  header_container__movies_text: {
    fontWeight: "800",
    fontSize: 18,
    color: "#B1B2B3",
  },
  header_container__see_today: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 2,
    marginTop: "3%",
  },
  header_container__see_today__text: {
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 36,
    letterSpacing: 0.7,
    width: "85%",
  },
  header_container__see_today__text_popular: {
    color: "#3544C4",
  },
  movie_list: {
    ...margin_top_13_percent,
  },
  popular_actors: {
    ...margin_top_13_percent,
  },
  popular_actors_texts: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "93%",
  },
  popular_actors_texts_first_text__popular_actors: {
    fontSize: 19,
    fontWeight: "600",
  },
  popular_actors_texts__see_all: {
    fontWeight: "600",
    color: "#3544C4",
  },
  popular_actors_list: {
    marginTop: "5%",
  },
});
