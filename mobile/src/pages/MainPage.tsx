import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  APP_CONTAINER,
  MAIN_TEXT_CONTAINER,
  TODO_TEXT_STYLE,
} from '../utils/consts';

const MainPage = ({navigation}: {navigation: any}) => {
  const logIn = () => {
    navigation.navigate('Auth');
  };
  const signUp = () => {
    navigation.navigate('Registration');
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text} onPress={logIn}>
          Log in
        </Text>
        <Text style={styles.text} onPress={signUp}>
          Sign up
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: APP_CONTAINER,
  textContainer: MAIN_TEXT_CONTAINER,
  text: TODO_TEXT_STYLE,
});

export default MainPage;
