import { View, Text } from "react-native";
import React, { useEffect } from "react";
import GlobalApi from "../../Utils/GlobalApi";

export default function Categories() {
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = () => {
    GlobalApi.getCategories().then((resp) => {
      console.log(resp);
    });
  };
  return (
    <View>
      <Text>Categories</Text>
    </View>
  );
}
