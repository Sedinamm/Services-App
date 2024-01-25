import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Heading({ text, isViewAll = false }) {
  return (
    <View>
      <Text style={styles.textHeading}>{text}</Text>
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
});
