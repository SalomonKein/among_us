import {useIsFocused} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { useQuery } from 'react-query';
import TodoItem from '../components/TodoItem';
import {TodoService} from '../services/todo.services';
import {ITodo} from '../types/todos.type';
import { TodoStackNavigator } from '../types/TodoStackNavigator';
import {
  APP_CONTAINER,
  APP_FORM_CONTAINER,
  TODO_LIST_CREATE_CONTAINER_TEXT,
} from '../utils/consts';

const DATA: any[] | (() => any[]) = [];

type TodosListScreenNavigationProp = StackNavigationProp<
  TodoStackNavigator,
  'TodoList'
>;

type Props = {
  navigation: TodosListScreenNavigationProp;
};

const TodoList = ({navigation}: Props) => {
  const [todos, setTodos] = useState(DATA);
  const [isUdate, setIsUdate] = useState(false);

  const isFocused = useIsFocused();

  const createTodo = () => {
    navigation.navigate('CreateTodo');
  };

  

  useEffect(() => {    
      const todosPromis = new TodoService();
      const res = todosPromis.getTodos();
      res
        .then((res) => setTodos(res.data))
        .catch((error) => console.log(`Something went wrong: ${error}`));    
  }, [isFocused, isUdate]);

  const updateList = () => {
        setIsUdate(!isUdate)
  }; 
  
  
  // async function fetchData() {
  //     const todosPromis = new TodoService();
  //     const res = await todosPromis.getTodos();    
  //     return res.data
  //   };

  //    const { isLoading, error, data, refetch } = useQuery('todos', () => fetchData() )       
  //    if (error) return <h1>Error: {error.message}, try again </h1>
  //    if (isLoading) return <h1> Is loading </h1>  
  //    const updateList = () => {
  //     // fetchData();
  //     console.log('date update');
  //   };    
     

  console.log(DATA, "DATA");

  const renderItem = ({item}: {item: ITodo}) => {
    const backgroundColor = '#A9A9A9';
    const color = 'black';

    return (
      <TodoItem
        item={item}
        updateList={updateList}
        onPress={() => console.log(item._id, 'delted id item')}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.createContainer}>
        <Text style={styles.createContainerText} onPress={createTodo}>
          Create new Todo
        </Text>
      </View>
      { todos ?  (
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      ) : (
        <View><p>No todos</p></View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: APP_CONTAINER,
  formContainer: APP_FORM_CONTAINER,
  createContainerText: TODO_LIST_CREATE_CONTAINER_TEXT,
});

export default TodoList;
