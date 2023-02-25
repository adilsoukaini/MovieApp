import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GET } from "../service/API";
import { SafeAreaView } from "react-native-safe-area-context";
import { POSTER_IMAGE, IMAGE_POSTER_URL } from "../src/config";
import Constant from "../src/Constant";
import { Feather } from "@expo/vector-icons";
import { AnimatedCircularProgress } from "react-native-circular-progress";

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
      //console.log(foundObject);
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
            <TouchableOpacity
              className="z-10 absolute top-[75%] left-[42%] bg-white rounded-full h-16 w-16 pl-5 justify-evenly"
              style={styles.shadow}
            >
              <Feather name="play" size={24} color="black" />
            </TouchableOpacity>
            <View className="bg-white w-full h-[550]  absolute top-[250]  rounded-[50px] ">
              <Text className="font-bold text-2xl mt-8 ml-8">
                {Movie.original_title}
              </Text>
              <Text className="ml-8 mt-1  mr-8 text-justify text-[#969696]">
                {Movie.vote_count} views . {Movie.release_date}{" "}
              </Text>
              <Text
                className="ml-8 mt-5  mr-8  italic font-normal tracking-wide
                leading-5 text-center truncate              "
              >
                {Movie.overview}
              </Text>
              <View className="absolute bottom-20 right-7 ">
                <AnimatedCircularProgress
                  size={80}
                  width={7}
                  fill={Movie.vote_average * 10}
                  tintColor="black"
                  rotation="0"
                  lineCap="round"
                  onAnimationComplete={() => console.log("onAnimationComplete")}
                  backgroundColor="#969696"
                >
                  {(fill) => (
                    <Text className="font-bold text-lg ">
                      {Number(Movie.vote_average).toFixed(1)}
                    </Text>
                  )}
                </AnimatedCircularProgress>
              </View>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 20,
  },
});
export default MovieDetails;
