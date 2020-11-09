import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Button, Animated } from "react-native";

const styles = StyleSheet.create({
  container__text: {
    fontWeight: "bold",
    color: "#0A66C2",
    fontSize: 20,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#F4F5F7",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: Platform.OS === "android" ? 25 : 0,
  },
  cercle: {
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: "white",
    position: "absolute",
    left: -120,
    top: -20,
  },
});

/**
 * Welcome component rendered when we open the application
 */
function Welcome({ navigation }) {
  // initialize animation to 0 => opacity
  const fadeAnimFirstText = useRef(new Animated.Value(0)).current;
  const fadeAnimSecondText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // run text animation when render component
    Animated.timing(fadeAnimFirstText, {
      toValue: 1,
      duration: 1000,
    }).start();

    // run button animation after 1s of rendering (when text animation is finished)
    setTimeout(() => {
      Animated.timing(fadeAnimSecondText, {
        toValue: 1,
        duration: 1000,
      }).start();
    }, 2000);

    // redirect to main view
    setTimeout(() => {
      navigation.navigate("Main");
    }, 5000);
  }, [fadeAnimFirstText, fadeAnimSecondText]);

  return (
    <View style={styles.container}>
      <View style={styles.cercle}></View>
      <Animated.View
        style={{
          opacity: fadeAnimFirstText,
        }}
      >
        <Text style={styles.container__text}>What is the meaning of life</Text>
      </Animated.View>
      <Animated.View
        style={{
          opacity: fadeAnimSecondText,
        }}
      >
        <Text style={styles.container__text}>Wihout TODO-List!</Text>
      </Animated.View>
    </View>
  );
}

export default Welcome;
