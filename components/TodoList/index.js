import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

// local files
import colors from "../../utilities/Colors";

function TodoList({ list }) {
  return (
    <View style={[styles.listContainer, { backgroundColor: list.color }]}>
      <Text style={styles.title} numberOfLines={1}>
        {list.name}
      </Text>
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
});

export default TodoList;
