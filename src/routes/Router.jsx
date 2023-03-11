import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/colors";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInSignUpScreen from "../screens/SignInSignUpScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import Constant from "expo-constants";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StatusBarHeight = Constant.statusBarHeight;

const Router = () => {
  const isLogged = true;
  return (
    <SafeAreaView style={style.container}>
      <NavigationContainer>
        {isLogged ? (
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveTintColor: Colors.active,
              tabBarInactiveTintColor: Colors.inactive,
              tabBarStyle: {
                backgroundColor: "#e6e7e8",
                marginHorizontal: 20,
                borderRadius: 32,
                marginBottom: 20,
              },
              tabBarIconStyle: {},
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ focused, color }) => {
                  return (
                    <MaterialCommunityIcons
                      name="movie-roll"
                      size={32}
                      color={color}
                    />
                  );
                },
              }}
            />
            <Tab.Screen
              name="Favourite"
              component={FavouriteScreen}
              options={{
                tabBarIcon: ({ focused, color }) => {
                  return (
                    <MaterialCommunityIcons
                      name="cards-heart"
                      size={32}
                      color={color}
                    />
                  );
                },
              }}
            />
            <Tab.Screen
              name="Notifications"
              component={NotificationsScreen}
              options={{
                tabBarIcon: ({ focused, color }) => {
                  return (
                    <MaterialCommunityIcons
                      name="bell"
                      size={32}
                      color={color}
                    />
                  );
                },
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({ focused, color }) => {
                  return (
                    <MaterialCommunityIcons
                      name="account"
                      size={32}
                      color={color}
                    />
                  );
                },
              }}
            />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="SignInSignUp" component={SignInSignUpScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Router;

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBarHeight,
  },
  tab_navigator: {
    // backgroundColor: "#e6e7e8",
  },
});
