import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";

export default function Slider() {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    getSliders();
  }, []);
  const getSliders = () => {
    GlobalApi.getSlider().then((resp) => {
      console.log("resp", resp);
      setSlider(resp?.sliders);
    });
  };
  return (
    <View>
      <Text style={styles.textHeading}>Special Offers For You</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 20,
    fontFamily: "outfit-medium",
    marginBottom: 10,
  },
});
