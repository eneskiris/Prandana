import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../components/Button";
import Divider from "../components/Divider";

const SignInSignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Button
        text={"As Guest"}
        text_style={[styles.as_guest_text]}
        button_style={[styles.as_guest_button]}
      />
      <View style={styles.img_container}>
        <ImageBackground
          source={require("../../assets/signin_signup.png")}
          resizeMode={"stretch"}
        >
          <LinearGradient
            colors={[
              "rgba(255,255,255,0.3)",
              "rgba(255,255,255,0.7)",
              "rgba(255,255,255,0.9)",
            ]}
            style={{
              height: "100%",
            }}
          />
        </ImageBackground>
      </View>
      <View style={styles.content}>
        <View style={styles.content_title_container}>
          <Image source={require("../../assets/film-reel.png")} />
          <Text style={styles.content_title_container__title}>
            PR<Text style={styles.content_title_container__title__A}>A</Text>
            NDANA
          </Text>
        </View>
        <Text style={styles.content_description}>
          By creating an account you get access to an unlimited number of
          exercises
        </Text>
        <View style={styles.buttons}>
          <View style={styles.sign_in_sign_up_buttons}>
            <Button
              text={"Sign in"}
              text_style={[styles.sign_in_button_text]}
              button_style={[styles.sign_in_button]}
            />
            <Button
              text={"Sign up"}
              text_style={[styles.sign_up_button_text]}
              button_style={[styles.sign_up_button]}
            />
          </View>
          <Divider />
          <Button
            text={"Sign in with Facebook"}
            button_style={[{ backgroundColor: "#3A559F" }]}
          />
        </View>
      </View>
    </View>
  );
};

export default SignInSignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  as_guest_button: {
    width: "32%",
    paddingVertical: "12%",
    position: "absolute",
    top: 23,
    right: 20,
    zIndex: 999,
    backgroundColor: "#fff",
  },
  as_guest_text: {
    color: "#000",
  },
  img_container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  content_title_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: "-2%",
    marginBottom: "5%",
  },
  content_title_container__title: {
    fontSize: 18,
    fontWeight: "800",
  },
  content_title_container__title__A: {
    color: "#3544C4",
  },
  content_description: {
    paddingHorizontal: "10%",
    lineHeight: 24,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "600",
    color: "#ACAFB7",
  },
  buttons: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "10%",
    marginTop: "5%",
    gap: 40,
  },
  sign_in_sign_up_buttons: {
    width: "100%",
    gap: 20,
  },

  sign_in_button: {
    backgroundColor: "#C70C3C",
  },
  sign_in_button_text: {
    color: "white",
  },
  sign_up_button_text: {
    color: "#3544C4",
    fontWeight: "600",
  },
  sign_up_button: {
    backgroundColor: "#e6e7e8",
  },
});
