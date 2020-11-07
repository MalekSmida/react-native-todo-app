// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

// local files
import Main from "./components/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A66C2",
    alignItems: "center",
    justifyContent: "center",
  },
});
