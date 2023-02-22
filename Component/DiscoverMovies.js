import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { GET } from "../service/API";
//import  SliderBox  from "react-native-image-slider-box";
import { ImageSlider } from "react-native-image-slider-banner";
import { IMAGE_POSTER_URL } from "../src/config";
import Constant from "../src/Constant";

const DiscoverMovies = () => {
  const [DiscoverMovies, setDiscoverMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await GET("/discover/movie");
      setDiscoverMovies(response.results);
      setLoading(false);

      const images = response.results.map(
        (data) => `${IMAGE_POSTER_URL}${data.backdrop_path}`
      );

      let backImages = [];
      for (let i = 0; i < 10; ++i) {
        let objectImages = { img: images[i] }; // create a new object in each iteration
        //console.log("objectImages", objectImages);
        backImages.push(objectImages);
        //console.log("backImages", backImages);
      }

      setImages(backImages);
    };
    //console.log("images", images);

    getMovies();
  }, []);
  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color={Constant.Text} />
      ) : (
        <View>
          <ImageSlider
            data={images}
            headerStyle={{ padding: 10, backgroundColor: "rgba(0,0,0, 0.6)" }}
            //onItemChanged={(item) => console.log("item", item)}
            onClick={(item, index) => {
              alert("hello" + index);
            }}
            caroselImageStyle={{ height: 232 }}
            indicatorContainerStyle={{ top: 5 }}
          />
        </View>
      )}
    </View>
  );
};

export default DiscoverMovies;
