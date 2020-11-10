import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

// local files
import colors from "../../utilities/Colors";

export default function TodoModal({ onCloseModal, list }) {
  const [todo, setTodo] = useState({
    ...list,
  });
  const taskCount = todo.todos.length;
  const completedCount = todo.todos.filter((item) => item.completed).length;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ position: "absolute", top: 15, right: 30, zIndex: 10 }}
        onPress={onCloseModal}
      >
        <AntDesign name="close" size={25} color={colors.black} />
      </TouchableOpacity>

      <View style={[styles.section, { borderBottomColor: todo.color }]}>
        <View>
          <Text style={styles.title}>{todo.name}</Text>
          <Text
            style={styles.count}
          >{`${completedCount} from ${taskCount}`}</Text>
        </View>
      </View>

      <View style={{ alignSelf: "stretch", flex: 2, paddingVertical: 20 }}>
        <FlatList
          data={todo.todos}
          keyExtractor={(item) => item.title}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 64 }}
          renderItem={({ item }) => (
            <View style={styles.todoContainer}>
              <TouchableOpacity>
                <Ionicons
                  name={item.completed ? "ios-square" : "ios-square-outline"}
                  size={24}
                  color={colors.gray}
                  style={{ width: 32 }}
                />
              </TouchableOpacity>
              <Text
                style={[
                  styles.todo,
                  {
                    textDecorationLine: item.completed
                      ? "line-through"
                      : "none",
                    color: item.completed ? colors.gray : colors.black,
                  },
                ]}
              >
                {item.title}
              </Text>
            </View>
          )}
        />
      </View>

      <KeyboardAvoidingView
        style={styles.add}
        // behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <TextInput
          style={[styles.input, { borderColor: todo.color }]}
          placeholder="Todo name ?"
          // value={todo.name}
          // onChangeText={(text) => setTodo({ ...todo, name: text })}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: todo.color }]}
        >
          <AntDesign name="plus" size={25} color="white" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "700",
    fontSize: 30,
    color: colors.black,
  },
  section: {
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "flex-end",
    marginLeft: 64,
    borderBottomWidth: 3,
  },
  count: {
    marginTop: 4,
    marginBottom: 16,
    color: colors.gray,
    fontWeight: "700",
  },
  add: {
    flexDirection: "row",
    flex: 1,
    alignItems: "stretch",
    paddingHorizontal: 32,
  },
  input: {
    borderRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 15,
    height: 50,
    fontSize: 18,
    marginRight: 8,
    flex: 1,
  },
  button: {
    borderRadius: 6,
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  todoContainer: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  todo: {
    fontWeight: "700",
    fontSize: 16,
  },
});
