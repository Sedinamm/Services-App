import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import GlobalApi from "../../Utils/GlobalApi";
import BusinessListItem from "./BusinessListItem";

export default function BusinessListByCategoryScreen() {
  const param = useRoute().params;
  const navigation = useNavigation();

  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    // console.log("Category", param.category);
    param && getBusinessByCategory();
  }, [param]);

  // Business List By Category
  const getBusinessByCategory = () => {
    GlobalApi.getBusinessListByCategory(param.category).then((resp) => {
      setBusinessList(resp.businessLists);
    });
  };
  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
      <TouchableOpacity
        style={{ display: "flex", flexDirection: "row", gap: 10 }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={30} color="black" />
        <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
          {param?.category}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={businessList}
        renderItem={({ item, index }) => <BusinessListItem business={item} />}
      />
    </View>
  );
}
