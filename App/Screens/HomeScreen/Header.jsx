import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";

export default function Header() {
  const { user, isLoading } = useUser();
  return (
    user && (
      <View style={styles.container}>
        <View>
          <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
          <View></View>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
});
