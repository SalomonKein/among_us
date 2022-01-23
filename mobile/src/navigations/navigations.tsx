import React, {useState} from "react";
import {StyleSheet} from "react-native";
import MainPage from "../pages/MainPage";
import Registration from "../pages/Registration";
import Auth from "../pages/Auth";
import CreateTodo from "../pages/CreateTodo";
import TodoList from "../pages/TodoList";
import UpdateTodo from "../pages/UpdateTodo";

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainPage}
          options={{title: "Main page"}}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{title: "Registration page"}}
        />
        <Stack.Screen
          name="TodoList"
          component={TodoList}
          options={{title: "Todo list"}}
        />
        <Stack.Screen
          name="CreateTodo"
          component={CreateTodo}
          options={{title: "Create new Todo"}}
        />
        <Stack.Screen
          name="UpdateTodo"
          component={UpdateTodo}
          options={{title: "Update new Todo"}}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{title: "Authentification page"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
