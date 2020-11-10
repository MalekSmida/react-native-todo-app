import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

// local files
import colors from "../../utilities/Colors";

export default function AddListModal({ onCloseModal }) {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableOpacity
        style={{ position: "absolute", top: 40, right: 30 }}
        onPress={onCloseModal}
      >
        <AntDesign name="close" size={25} color={colors.black} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
