import { View, Text, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { GET } from "../service/API";
import { SafeAreaView } from "react-native-safe-area-context";
import { POSTER_IMAGE, IMAGE_POSTER_URL } from "../src/config";
import Constant from "../src/Constant";
import { Feather } from "@expo/vector-icons";
const MovieDetails = ({ route, navigation }) => {
  const [Movie, setDiscoverMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getMovies = async () => {
      const response = await GET("/trending/movie/week");
      setDiscoverMovie(response.results);
      setLoading(false);
      const foundObject = response.results.find(
        (obj) => obj.id === route.params.movieId
      );
      setDiscoverMovie(foundObject);
      console.log(foundObject);
    };
    getMovies();
  }, []);
  return (
    <SafeAreaView className="bg-[#151C26] h-full relative">
      <View>
        {loading ? (
          <ActivityIndicator size="large" color={Constant.Text} />
        ) : (
          <View>
            <Image
              source={{ uri: `${IMAGE_POSTER_URL}${Movie.backdrop_path}` }}
              className="h-[290] w-full rounded-md"
            />
            <View className="z-10 absolute top-[75%] left-[42%] bg-white rounded-full h-16 w-16 pl-5 justify-evenly t.shadow2xl	">
              <Feather name="play" size={24} color="black" />
            </View>
            <View className="bg-white w-full h-[1000]  absolute top-[250]  rounded-[50px] ">
              <Text className="m-5 ">{Movie.overview}</Text>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MovieDetails;
