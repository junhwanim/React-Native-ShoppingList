import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// View allows us use flexbox, style, some touch handling and accessibility controls
// Text supports nesting, styling, and touch handling.

const Header = ({title}) => {
  return (
    // using the template of stylesheet we created below
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Shopping List',
};

// making template of stylesheet
const styles = StyleSheet.create({
  header: {
    // We dont wrtie px after number in react-native
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
