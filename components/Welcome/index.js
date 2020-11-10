import React, { useRef, useEffect } from "react";
import { StyleSheet, Image, View, Animated } from "react-native";

const styles = StyleSheet.create({
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
  logo: {
    width: 152,
    height: 100,
  },
});

/**
 * Welcome component rendered when we open the application
 */
function Welcome({ navigation }) {
  // initialize animation to 0 => opacity
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // run svg animation when render component
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start();

    // redirect to main view
    setTimeout(() => {
      navigation.navigate("Main");
    }, 2000);
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.cercle}></View>
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}
      >
        <Image style={styles.logo} source={require("../../assets/Todo.svg")} />
      </Animated.View>
    </View>
  );
}

export default Welcome;
