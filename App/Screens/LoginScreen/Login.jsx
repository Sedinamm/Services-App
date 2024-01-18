import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
// import { Button } from "react-native";
WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
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
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Lets Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    alignItems: "center",
    // width: 230,
    // height: 380,
    width: 230,
    height: 450,
    // marginTop: 80,
    marginBottom: 30,
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
