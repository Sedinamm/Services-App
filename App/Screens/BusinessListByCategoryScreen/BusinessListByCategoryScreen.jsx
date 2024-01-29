import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function BusinessListByCategoryScreen() {
  const param = useRoute().params;
  useEffect(() => {
    console.log("Category", param.category);
  }, []);
  return (
    <View>
      <Ionicons name="arrow-back-outline" size={24} color="black" />
    </View>
  );
}
