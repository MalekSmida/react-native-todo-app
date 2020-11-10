import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

// local files
import colors from "../../utilities/Colors";

export default function AddListModal({ onCloseModal }) {
  const defaultColors = [
    "#D88559",
    "#D85963",
    "#D159D8",
    "#8022D9",
    "#595BD9",
    "#24A6D9",
    "#5CD859",
  ];
  const [todo, setTodo] = useState({
    name: "",
    color: defaultColors[0],
  });

  const colorPicker = () =>
    defaultColors.map((item) => {
      return (
        <TouchableOpacity
          key={item}
          onPress={() => setTodo({ ...todo, color: item })}
          style={[styles.colorPicker, { backgroundColor: item }]}
        />
      );
    });
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <TouchableOpacity
        style={{ position: "absolute", top: 40, right: 30 }}
        onPress={onCloseModal}
      >
        <AntDesign name="close" size={25} color={colors.black} />
      </TouchableOpacity>

      <View style={{ alignSelf: "stretch", marginHorizontal: 32 }}>
        <Text style={styles.title}>Create Todo List</Text>
        <TextInput
          style={styles.input}
          placeholder="List name ?"
          value={todo.name}
          onChangeText={(text) => setTodo({ ...todo, name: text })}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignSelf: "stretch",
          marginHorizontal: 30,
          marginTop: 24,
        }}
      >
        {colorPicker()}
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: todo.color }]}
      >
        <Text style={{ color: "white", fontWeight: "600" }}>Create</Text>
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
  title: {
    fontWeight: "800",
    fontSize: 28,
    color: colors.black,
    alignSelf: "center",
    marginBottom: 16,
  },
  input: {
    borderColor: colors.blue,
    borderRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 15,
    height: 50,
    marginTop: 8,
    fontSize: 18,
  },
  button: {
    borderRadius: 6,
    height: 50,
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    marginHorizontal: 30,
  },
  colorPicker: {
    height: 37,
    width: 37,
    borderRadius: 6,
  },
});
