import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

function MovieRating({ rating }) {
  const [fill, setFill] = useState(0);

  useEffect(() => {
    setFill(Math.min(Math.max((rating / 10) * 100, 0), 100));
    console.log(Math.min(Math.max((rating / 10) * 100)));
  }, [rating]);

  return (
    <View style={styles.ratingCircle}>
      <View style={[styles.ratingCircleFill, { scaleX: fill / 100 }]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  ratingCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#ccc",
    overflow: "hidden",
    position: "relative",
  },
  ratingCircleFill: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    backgroundColor: "red",
    transformOrigin: "left center",
    transitionProperty: "transform",
    transitionDuration: "1000ms",
  },
});

export default MovieRating;
