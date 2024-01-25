import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";

export default function Slider() {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    getSliders();
  }, []);

  // Get Slider from API
  const getSliders = () => {
    GlobalApi.getSlider().then((resp) => {
      console.log("resp", resp);
      setSlider(resp?.sliders);
    });
  };
  return (
    <View>
      <Text style={styles.textHeading}>Special Offers For You</Text>
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 20 }}>
            <Image
              source={{ uri: item?.image?.url }}
              style={styles.sliderImage}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 20,
    fontFamily: "outfit-medium",
    marginBottom: 10,
    // color: "white",
  },
  sliderImage: {
    width: 270,
    height: 160,
    borderRadius: 20,
    // objectFit: "contain",
  },
});
