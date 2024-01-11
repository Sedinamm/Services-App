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
        <Text style={styles.subContainerText}>
          Lets find{" "}
          <Text style={styles.subContainerTextEdited}>
            Professional Cleaning and repair
          </Text>{" "}
          Services
        </Text>
        <Text style={styles.description1}>
          Best app to find services near you which delivers professional
          services
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("button Click")}
        >
          <Text style={styles.buttonText}>Lets Get Started</Text>
        </TouchableOpacity>
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
    width: "100%",
    width: 360,
    backgroundColor: "#8E3FFF",
    height: "50%",
    marginTop: -20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
  },
  subContainerText: {
    fontSize: 23,
    color: "white",
    textAlign: "center",
    marginTop: 10,
  },
  subContainerTextEdited: {
    fontWeight: "bold",
    color: "gold",
    fontStyle: "italic",
  },
  description1: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 12,
    borderRadius: 5,
    height: 50,
    marginTop: 50,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    color: "#8E3FFF",
  },
});
