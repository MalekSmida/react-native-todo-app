import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

// local files
import colors from "../../utilities/Colors";

/**
 * Main component of TODO-List
 */
function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.container__text}>
        Todo
        <Text style={styles.container__blue}>Lists</Text>
      </Text>
      <View style={{ marginVertical: 48 }}>
        <TouchableOpacity style={styles.container__addList}>
          <AntDesign name="plus" size={16} color={colors.blue} />
        </TouchableOpacity>
        <Text style={styles.container__add}>Add List</Text>
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
  container__text: {
    fontWeight: "800",
    color: colors.black,
    fontSize: 38,
  },
  container__blue: {
    fontWeight: "400",
    color: colors.blue,
    marginLeft: 5,
  },
  container__addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
  },
  container__add: {
    fontWeight: "600",
    color: colors.blue,
    fontSize: 14,
    marginTop: 8,
  },
});

export default Main;
