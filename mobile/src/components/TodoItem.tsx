import {useNavigation} from "@react-navigation/native";
import React, {useContext} from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useQuery } from "react-query";
import { string } from "yup";

import {TodoService} from "../services/todo.services";
import { ITodo } from "../types/todos.type";
import { BUTTON_COLOR_CONFIRM, BUTTON_COLOR_DELETE, TODO_ITEM, TODO_ITEM_BUTTON, TODO_ITEM_BUTTON_CONTAINER, TODO_ITEM_CONTAINER, TODO_ITEM_CONTENT, TODO_ITEM_CONTENT_CONTAINER, TODO_ITEM_TITLE, TODO_ITEM_TITLE_THROW } from "../utils/consts";

const TodoItem = ({
  item,
  updateList,
  onPress,
  backgroundColor,
  textColor,
}: {
  item: any;
  updateList: any;
  onPress: any;
  backgroundColor: any;
  textColor: any;
}) => {
  
  const navigation = useNavigation();

  async function deleteTodo(){    
    const deletePromis = new TodoService();
    try{
    const res = await deletePromis.deleteTodo(item._id);    
      console.log(res.data, "deleted")
      } catch(error) { console.log(`Something went wrong: ${error}`)}
      updateList();
  };
  // async function fetchData() {
  //   const todosPromis = new TodoService();
  //   const res = await todosPromis.deleteTodo(item._id);    
  //   return res.data
  // };

// function deleteTodo(){    
//   const { isLoading, error, data, refetch } = useQuery('todos', () => fetchData() ) 
//   console.log('control point');      
//   if (error) return <h1>Error: {error.message}, try again </h1>
//   if (isLoading) return <h1> Is loading </h1>
//   };

 

       




  const updTodo = () => {
    navigation.navigate("UpdateTodo", {
      id: item._id,
      item: item,
    });
  };

  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <View style={styles.contentContainer}>
        {!item.isCompleted ? (
          <Text style={[styles.title, textColor]}>{item.title}</Text>
        ) : (
          <Text style={[styles.titleThrow, textColor]}>{item.title}</Text>
        )}
        <Text style={styles.content}>{item.description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Update" color={BUTTON_COLOR_CONFIRM} onPress={() => updTodo()} />
        <Button title="Delete" color={BUTTON_COLOR_DELETE} onPress={() => deleteTodo()} />
      </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  container: TODO_ITEM_CONTAINER,
  item: TODO_ITEM,
  title: TODO_ITEM_TITLE,
  titleThrow: TODO_ITEM_TITLE_THROW,
  contentContainer: TODO_ITEM_CONTENT_CONTAINER,
  content: TODO_ITEM_CONTENT,
  buttonContainer: TODO_ITEM_BUTTON_CONTAINER,
  Button: TODO_ITEM_BUTTON,
});

export default TodoItem;
