import { View, Text, FlatList, ActivityIndicator, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { GET } from "../service/API";
import { IMAGE_POSTER_URL } from "../src/config";
import Constant from "../src/Constant";

const TrendingPeople = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPeople = async () => {
      const response = await GET("/trending/person/week");
      setPeople(response.results);
      //console.log("response", response.results);
      setLoading(false);
    };
    //console.log("images", images);

    getPeople();
  }, []);
  const displayPeople = ({ item }) => {
    //console.log(IMAGE_POSTER_URL, item.profile_path);
    return (
      <View className="mt-2">
        <Image
          source={{ uri: `${IMAGE_POSTER_URL}${item.profile_path}` }}
          className="h-[50] w-[50] rounded-full   "
        />
        <Text className="w-[60] text-xs  mt-2 text-white ">{item.name}</Text>
      </View>
    );
  };

  return (
    <View className="m-2">
      {loading ? (
        <ActivityIndicator size="large" color={Constant.Text} />
      ) : (
        <View>
          <Text className="text-[19] text-[#969696] m-1">Trending People</Text>
          <FlatList
            data={people}
            renderItem={displayPeople}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>
      )}
    </View>
  );
};

export default TrendingPeople;
