import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  const { user, isLoading } = useUser();
  return (
    user && (
      <View style={styles.container}>
        {/* Profile Header Section */}
        <View style={styles.profileMainContainer}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
            <View>
              <Text style={{ color: "white", fontFamily: "outfit" }}>
                Welcome
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  // fontFamily: "helvetica",
                  fontFamily: "outfit-medium",
                }}
              >
                {user?.fullName}
              </Text>
            </View>
          </View>
          <FontAwesome name="bookmark-o" size={27} color="white" />
        </View>
        {/* Search Bar Section */}
        <View style={styles.searchBarContainer}>
          <TextInput placeholder="Search" style={styles.textInput} />
          <FontAwesome
            name="search"
            style={styles.searchButton}
            size={24}
            color="blue"
          />
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#0096FF",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  searchBarContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderRadius: 8,
    width: "85%",
    fontSize: 15,
  },
  searchButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
  },
});
