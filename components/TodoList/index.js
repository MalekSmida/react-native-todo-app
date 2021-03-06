import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";

// local files
import colors from "../../utilities/Colors";
import TodoModal from "../TodoModal";

/**
 * present each todoList displayed in main interface
 *
 * @param {Object} list => todoList object
 * @param {Object} updateList
 */
function TodoList({ list, updateList }) {
  // count completed todos in todos list
  const remainingCount = list.todos.filter((item) => !item.completed).length;
  const completedCount = list.todos.length - remainingCount;

  // Modal visibility
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => setModalVisible(!modalVisible);

  return (
    <View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={handleModal}
      >
        <TodoModal
          onCloseModal={handleModal}
          list={list}
          updateList={updateList}
        />
      </Modal>

      <TouchableOpacity
        style={[styles.listContainer, { backgroundColor: list.color }]}
        onPress={handleModal}
      >
        <Text style={styles.title} numberOfLines={1}>
          {list.name}
        </Text>

        <View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.count}>{remainingCount}</Text>
            <Text style={styles.subTitle}>Remaining</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.count}>{completedCount}</Text>
            <Text style={styles.subTitle}>Completed</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    width: 200,
    alignItems: "center",
  },
  title: {
    fontWeight: "700",
    color: colors.white,
    fontSize: 24,
    marginBottom: 18,
  },
  count: {
    fontWeight: "200",
    color: colors.white,
    fontSize: 42,
  },
  subTitle: {
    fontWeight: "700",
    color: colors.white,
    fontSize: 12,
  },
});

export default TodoList;
