import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./src/Home";
import Constant from "./src/Constant";
import { FontAwesome } from "@expo/vector-icons";
import MovieDetails from "./src/movieDetails";
import movieDetails from "./src/movieDetails";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen name="Movie" component={Home} options={HeaderStyle} />
        <Stack.Screen
          name="movieDetails"
          component={MovieDetails}
          options={HeaderStyle}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HeaderStyle = {
  title: "Movie",
  headerStyle: {
    backgroundColor: Constant.BaseColor,
  },
  headerTintColor: Constant.TextColor,
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerLeft: () => (
    <Ionicons name="menu" size={24} color={Constant.TextColor} />
  ),
  headerRight: () => (
    <FontAwesome name="search" size={24} color={Constant.TextColor} />
  ),
};
export default App;
