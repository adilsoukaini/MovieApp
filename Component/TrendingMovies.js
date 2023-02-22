import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GET } from "../service/API";
import { IMAGE_POSTER_URL, POSTER_IMAGE } from "../src/config";
import Constant from "../src/Constant";

const TrendingMovies = (props) => {
  const [Movies, setDiscoverMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getMovies = async () => {
      const response = await GET("/trending/movie/week");
      setDiscoverMovies(response.results);
      setLoading(false);
      //console.log(response.results);
    };
    getMovies();
  }, []);
  const displayMovies = ({ item }, props) => {
    //console.log(IMAGE_POSTER_URL, item.poster_path);
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("movieDetails", { movieId: item.id });
        }}
      >
        <View className="m-2">
          <Image
            source={{ uri: `${POSTER_IMAGE}${item.poster_path}` }}
            className="h-[200] w-[100] rounded-sm"
          />
          <Text className="w-[90] text-xs text-center mt-2 text-white ">
            {item.original_title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View className="m-2">
      {loading ? (
        <ActivityIndicator size="large" color={Constant.Text} />
      ) : (
        <View>
          <Text className="text-[19] text-[#969696] m-1">Trending Movies</Text>
          <FlatList
            data={Movies}
            renderItem={(item) => displayMovies(item, props)}
            keyExtractor={(item) => item.id}
            horizontal
            onPres
          />
        </View>
      )}
    </View>
  );
};

export default TrendingMovies;
