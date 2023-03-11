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
  const isLogged = false;
  return (
    <SafeAreaView style={container}>
      <NavigationContainer>
        {isLogged ? (
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <MaterialCommunityIcons
                      name="movie-roll"
                      size={32}
                      color={focused ? Colors.active : Colors.inactive}
                    />
                  );
                },
              }}
            />
            <Tab.Screen
              name="Favourite"
              component={FavouriteScreen}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <MaterialCommunityIcons
                      name="cards-heart"
                      size={32}
                      color={focused ? Colors.active : Colors.inactive}
                    />
                  );
                },
              }}
            />
            <Tab.Screen
              name="Notifications"
              component={NotificationsScreen}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <MaterialCommunityIcons
                      name="bell"
                      size={32}
                      color={focused ? Colors.active : Colors.inactive}
                    />
                  );
                },
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <MaterialCommunityIcons
                      name="account"
                      size={32}
                      color={focused ? Colors.active : Colors.inactive}
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

const { container } = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBarHeight,
  },
});
