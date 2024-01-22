import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./App/Screens/LoginScreen/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";

// const tokenCache = {
//   async getToken(key) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };

export default function App() {
  return (
    <ClerkProvider
      // tokenCache={tokenCache}
      publishableKey="pk_test_aGVhbHRoeS1tYXJtb3QtOS5jbGVyay5hY2NvdW50cy5kZXYk"
    >
      <View style={styles.container}>
        {/* Sign in Component */}
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        {/* Sign Out */}
        <SignedOut>
          <Login />
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
