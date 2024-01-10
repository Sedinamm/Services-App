import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

export default function Login() {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={styles.loginImage}
        source={require("./../../../assets/Images/3.jpg")}
      />
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 26, color: "white", textAlign: "center" }}>
          Lets find{" "}
          <Text style={{ fontWeight: "bold" }}>
            Professional Cleaning and repair
          </Text>{" "}
          Services
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "white",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Best app to find services near you which delivers professional
          services
        </Text>
        <View style={styles.button}>
          <Text style={{ textAlign: "center", fontSize: 15 }}>
            Lets Get Started
          </Text>
        </View>
      </View>
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
    borderColor: "black",
    borderRadius: 15,
  },
  subContainer: {
    // width: "100%",
    width: 360,
    backgroundColor: "red",
    height: "70%",
    marginTop: -20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
  },
  button: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 99,
    marginTop: 40,
  },
});
