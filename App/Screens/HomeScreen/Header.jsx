import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";

export default function Header() {
  const { user, isLoading } = useUser();
  return (
    user && (
      <View>
        <View>
          <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
          <View></View>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  userImage: {
    width: 45,
    height: 45,
  },
});
