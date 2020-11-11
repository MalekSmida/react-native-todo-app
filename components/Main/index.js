import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

// local files
import colors from "../../utilities/Colors";
import todoList from "../../store/data";
import TodoList from "../TodoList";
import AddListModal from "../AddListModal";

/**
 * Main component of TODO-List
 */
function Main() {
  const [todoData, setTodoData] = useState(todoList);

  // Modal visibility
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => setModalVisible(!modalVisible);

  // create new todo list
  const createTodo = (todo) => {
    setTodoData([...todoData, { ...todo, todos: [], id: todoData.length }]);
    handleModal();
  };

  // update list
  const updateList = (list) => {
    setTodoData(todoData.map((item) => (item.id === list.id ? list : item)));
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        // transparent={true}
        visible={modalVisible}
        onRequestClose={handleModal}
      >
        <AddListModal onCloseModal={handleModal} onCreateTodo={createTodo} />
      </Modal>

      <Text style={styles.text}>
        Todo
        <Text style={styles.blue}>Lists</Text>
      </Text>
      <View style={{ marginVertical: 48 }}>
        <TouchableOpacity style={styles.addList} onPress={handleModal}>
          <AntDesign name="plus" size={16} color={colors.blue} />
        </TouchableOpacity>
        <Text style={styles.add}>New List</Text>
      </View>
      <View style={{ height: 275, paddingLeft: 12 }}>
        <FlatList
          data={todoData}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
          renderItem={({ item }) => (
            <TodoList list={item} updateList={updateList} />
          )}
        />
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
  text: {
    fontWeight: "800",
    color: colors.black,
    fontSize: 38,
  },
  blue: {
    fontWeight: "400",
    color: colors.blue,
    marginLeft: 5,
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 999,
    padding: 16,
    alignItems: "center",
  },
  add: {
    fontWeight: "600",
    color: colors.blue,
    fontSize: 14,
    marginTop: 8,
  },
});

export default Main;
