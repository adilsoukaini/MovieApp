import { View, Text } from "react-native";
import React from "react";
import DiscoverMovies from "../Component/DiscoverMovies";
import TrendingPeople from "../Component/TrendingPeople";
import TrendingMovies from "../Component/TrendingMovies";

const Home = (props) => {
  return (
    <View className="bg-[#151C26] h-full">
      <DiscoverMovies />
      <TrendingPeople />
      <TrendingMovies navigation={props.navigation} />
    </View>
  );
};

export default Home;
