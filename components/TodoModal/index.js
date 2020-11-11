import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  FlatList,
  TextInput,
  Keyboard,
  Animated,
} from "react-native";

// node modules
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

// local files
import colors from "../../utilities/Colors";

/**
 * display our todo list as modal
 *
 * @param {Object} onCloseModal => handle modal close
 * @param {Object} list => todo list data
 * @param {Object} updateList => update todo list
 */
export default function TodoModal({ onCloseModal, list, updateList }) {
  const [todoItem, setTodoItem] = useState("");

  // count tasks
  const taskCount = list.todos.length;
  const completedCount = list.todos.filter((item) => item.completed).length;

  // toggle todo item
  const toggleTodoComplete = (index) => {
    let updatedList = list;
    updatedList.todos[index].completed = !updatedList.todos[index].completed;
    updateList(updatedList);
  };

  // add todo item
  const addTodoItem = () => {
    if (todoItem !== "") {
      let updatedList = list;
      updatedList.todos.push({ title: todoItem, completed: false });
      updateList(updatedList);
      Keyboard.dismiss();
      setTodoItem("");
    } else {
      alert("Please enter todo name!");
    }
  };

  // delete item swipe animation
  const rightActions = (dragX, index) => (
    <TouchableOpacity>
      <Animated.View>
        <Animated.Text>Delete</Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableOpacity
        style={{ position: "absolute", top: 15, right: 30, zIndex: 10 }}
        onPress={onCloseModal}
      >
        <AntDesign name="close" size={25} color={colors.black} />
      </TouchableOpacity>

      <View style={[styles.section, { borderBottomColor: list.color }]}>
        <View>
          <Text style={styles.title}>{list.name}</Text>
          <Text
            style={styles.count}
          >{`${completedCount} from ${taskCount}`}</Text>
        </View>
      </View>

      <View style={{ alignSelf: "stretch", flex: 3, paddingVertical: 16 }}>
        <FlatList
          data={list.todos}
          keyExtractor={(item) => item.title.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 32 }}
          renderItem={({ item, index }) => (
            <Swipeable
              renderRightActions={(_, dragX) => rightActions(dragX, index)}
            >
              <View style={styles.todoContainer}>
                <TouchableOpacity onPress={() => toggleTodoComplete(index)}>
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
            </Swipeable>
          )}
        />
      </View>

      <View style={styles.add}>
        <TextInput
          style={[styles.input, { borderColor: list.color }]}
          placeholder="Todo name ?"
          value={todoItem}
          onChangeText={(text) => setTodoItem(text)}
        />
        <TouchableOpacity
          onPress={addTodoItem}
          style={[styles.button, { backgroundColor: list.color }]}
        >
          <AntDesign name="plus" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
