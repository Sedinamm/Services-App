import { View, Text } from "react-native";
import React from "react";
import Heading from "../../Components/Heading";

export default function BusinessList() {
  return (
    <View style={{ marginTop: 10 }}>
      <Heading text={"Latest Business"} isViewAll={true} />
    </View>
  );
}
