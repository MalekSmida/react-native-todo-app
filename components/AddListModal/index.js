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
import todoList from "../../utilities/data";

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

  // list of color picker for our todo list
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

  const createTodo = () => {
    if (todo.name !== "") {
      todoList.push({ ...todo, todos: [] });
      onCloseModal();
    } else {
      alert("Please enter todo name!");
    }
  };
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
          style={[styles.input, { borderColor: todo.color }]}
          placeholder="List name ?"
          value={todo.name}
          onChangeText={(text) => setTodo({ ...todo, name: text })}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          {colorPicker()}
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: todo.color }]}
          onPress={createTodo}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>Create</Text>
        </TouchableOpacity>
      </View>
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
  },
  colorPicker: {
    height: 35,
    width: 35,
    borderRadius: 6,
  },
});
