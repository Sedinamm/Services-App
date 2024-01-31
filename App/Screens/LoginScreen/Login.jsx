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
    // <View style={{ alignItems: "center" }}>
    //    <Image
    //     style={styles.loginImage}
    //     source={require("./../../../assets/Images/3.jpg")}
    //   />
    //   <View style={styles.subContainer}>
    //     <Text style={styles.subContainerText}>
    //       Lets find{" "}
    //       <Text style={styles.subContainerTextEdited}>
    //         Professional Cleaning and repair
    //       </Text>{" "}
    //       Services
    //     </Text>
    //     <Text style={styles.description1}>
    //       Best app to find services near you which delivers professional
    //       services
    //     </Text>
    //     <TouchableOpacity style={styles.button} onPress={onPress}>
    //       <Text style={styles.buttonText}>Lets Get Started</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
    <View style={{ alignItems: "center", flex: 1 }}>
      <Image
        style={styles.loginImage}
        source={require("./../../../assets/Images/1.jpg")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Spotless Hub</Text>
        <Text style={styles.description}>Elevate your space effortlessly.</Text>
      </View>
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
    // alignItems: "center",
    marginBottom: "40%",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    marginBottom: 7,
  },
  description: {
    fontSize: 18,
    color: "white",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "green",
    paddingVertical: 12,
    borderRadius: 5,
    height: 50,
    marginTop: 50,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    color: "#fff",
    // color: "#8E3FFF",
  },
});
