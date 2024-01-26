import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import Heading from "../../Components/Heading";

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
    <View style={{ marginTop: 10 }}>
      {/* <Text>Categories</Text> */}
      <Heading text={"Categories"} />
    </View>
  );
}
