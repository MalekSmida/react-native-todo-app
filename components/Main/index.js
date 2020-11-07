import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Button, Animated } from "react-native";

const styles = StyleSheet.create({
  container__text: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 20,
    marginBottom: 20,
  },
});

function Main() {
  const fadeAnimText = useRef(new Animated.Value(0)).current;
  const fadeAnimButton = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimText, {
      toValue: 1,
      duration: 1000,
    }).start();

    setTimeout(() => {
      Animated.timing(fadeAnimButton, {
        toValue: 1,
        duration: 1000,
      }).start();
    }, 1000);
  }, [fadeAnimText, fadeAnimButton]);

  return (
    <View>
      <Animated.View
        style={{
          opacity: fadeAnimText,
        }}
      >
        <Text style={styles.container__text}>Welcome to the world</Text>
      </Animated.View>
      <Animated.View
        style={{
          opacity: fadeAnimButton,
          width: 100,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Button
          onPress={() => {
            alert("First move toward Wisdom");
          }}
          title="Open up"
          // color="#0A66C2"
        />
      </Animated.View>
    </View>
  );
}

export default Main;
