import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {HEADER_CONTAINER, HEADER_TEXT, HEADER_TEXT_CONTAINER} from '../utils/consts';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Todo App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: HEADER_CONTAINER,
  textContainer: HEADER_TEXT_CONTAINER,
  text: HEADER_TEXT,
});

export default Header;
