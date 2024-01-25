import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  //   Get Categories List
  const getCategories = () => {
    GlobalApi.getCategories().then((resp) => {
      //   console.log(resp)
      setCategories(resp?.categories);
    });
  };
  return (
    <View>
      <Text>Categories</Text>
    </View>
  );
}
