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

/**
 * Main component rendered when we open the application
 */
function Main() {
  // initialize animation to 0 => opacity
  const fadeAnimText = useRef(new Animated.Value(0)).current;
  const fadeAnimButton = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // run text animation when render component
    Animated.timing(fadeAnimText, {
      toValue: 1,
      duration: 1000,
    }).start();

    // run button animation after 1s of rendering (when text animation is finished)
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
        />
      </Animated.View>
    </View>
  );
}

export default Main;
