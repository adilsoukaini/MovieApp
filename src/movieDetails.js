import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { GET } from "../service/API";

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
      setDiscoverMovie(foundObject)
      console.log(foundObject);
    };
    getMovies();
  }, []);
  return (
    <View>
      <Text>{Movie.overview}</Text>
    </View>
  );
};

export default MovieDetails;
