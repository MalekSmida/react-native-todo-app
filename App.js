// import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import { StyleSheet, Text, View, Image, Button, Animated } from "react-native";

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}
      >
        <Text style={styles.container__text}>Welcome to the world</Text>
      </Animated.View>
      <Button
        onPress={() => {
          alert("First move toward Wisdom");
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
