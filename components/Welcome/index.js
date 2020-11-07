import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Button, Animated } from "react-native";

const styles = StyleSheet.create({
  container__text: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#0A66C2",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "android" ? 25 : 0,
  },
});

/**
 * Welcome component rendered when we open the application
 */
function Welcome({ navigation }) {
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
    <View style={styles.container}>
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
            // alert("First move toward Wisdom");
            navigation.navigate("Main" /* , { name: 'Jane' } */);
          }}
          title="Open up"
        />
      </Animated.View>
    </View>
  );
}

export default Welcome;
