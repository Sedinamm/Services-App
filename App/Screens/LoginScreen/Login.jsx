import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

export default function Login() {
  return (
    <View>
      <Image
        style={styles.loginImage}
        source={require("./../../../assets/Images/3.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    alignItems: "center",
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: Colors.BLACK,
  },
});
