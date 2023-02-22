import { View, Text } from "react-native";
import React from "react";
import DiscoverMovies from "../Component/DiscoverMovies";
import TrendingPeople from "../Component/TrendingPeople";

const Home = () => {
  return (
    <View className="bg-[#151C26] h-full">
      <DiscoverMovies />
      <TrendingPeople />
    </View>
  );
};

export default Home;
