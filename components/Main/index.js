import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../utilities/Colors";

/**
 * Main component of TODO-List
 */
function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.container__header}>
        <Text style={styles.container__text}>
          Todo
          <Text style={styles.container__blue}>Lists</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: Platform.OS === "android" ? 25 : 0,
  },
  container__header: {
    flexDirection: "row",
  },
  container__text: {
    fontWeight: "800",
    color: colors.black,
    fontSize: 38,
  },
  container__blue: {
    fontWeight: "300",
    color: colors.blue,
    marginLeft: 5,
  },
});

export default Main;
