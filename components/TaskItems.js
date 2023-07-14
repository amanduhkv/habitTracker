import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={[styles.category, {backgroundColor: `${props.color}`}]}>
        <Text style={styles.categoryTitle}>{props.category}</Text>
      </View>
      <TouchableOpacity style={[styles.itemBox, {backgroundColor: `${props.color}`}]}>
        <Text style={styles.timeFrame}>{props.time}</Text>
        <Text style={styles.notes}>{props.notes}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  category: {
    transform: [{rotate: '90deg'}],
    justifyContent: 'center',
    padding: 15,
    borderRadius: 40
  },
  categoryTitle: {
    color: 'white'
  },
  itemBox: {
    padding: 20,
    borderRadius: 10
  },
  timeFrame: {

  },
  notes: {
    color: 'white'
  },
});

export default Task;
