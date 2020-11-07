import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.container__text}>Welcome to the world</Text>
      <Button
        onPress={() => {
          alert("You tapped the button!");
        }}
        title="Open up"
        // color="#0A66C2"
      />
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
  container__text: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 20,
    marginBottom: 20,
  },
});
