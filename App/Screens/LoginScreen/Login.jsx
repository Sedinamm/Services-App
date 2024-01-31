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
    <View style={{ alignItems: "center", flex: 1 }}>
      <Image
        style={styles.loginImage}
        source={require("./../../../assets/Images/1.jpg")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Spotless Hub</Text>
        <Text style={styles.description}>
          Elevate your space
          <Text style={{ fontStyle: "italic", color: "yellow" }}>
            {" "}
            effortlessly.
          </Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Lets Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-end",
    // marginBottom: "30%",
    paddingRight: "33%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  description: {
    fontSize: 16,
    color: "white",
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    borderRadius: 5,
    width: "90%",
    marginBottom: 40,
    marginTop: 30,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    // color: "#007BFF",
    color: "#000",
  },
});
