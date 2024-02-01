import {
  Text,
  View,
  TextBusinessListItem,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
// import { TouchableOpacity } from "react-native-gesture-handler";

export default function BusinessListItem({ business }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: business?.images[0]?.url }} style={styles.image} />
      <View style={styles.subContainer}>
        {/* Name */}
        <Text style={{ fontFamily: "outfit", color: "gray", fontSize: 15 }}>
          {business.contactPerson}
        </Text>
        {/* Business */}
        <Text style={{ fontFamily: "outfit-bold", fontSize: 18 }}>
          {business.name}
        </Text>
        {/* Address */}
        <Text style={{ fontFamily: "outfit", color: "gray", fontSize: 12 }}>
          <Ionicons name="location-sharp" size={18} color="#0096FF" />
          {business.address}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  subContainer: {
    display: "flex",
    gap: 6,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
});
