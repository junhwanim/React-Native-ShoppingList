import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'

// View allows us use flexbox, style, some touch handling and accessibility controls
// Text supports nesting, styling, and touch handling.

const ListItem = ({item, deleteItem}) => {
  return (
    // using the template of stylesheet we created below
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Icon name="remove" size={20} color="firebrick" onPress={()=> deleteItem(item.id)} />
      </View>
    </TouchableOpacity>
  );
};

// making template of stylesheet
const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
});

export default ListItem;