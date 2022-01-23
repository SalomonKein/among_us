import { ITodo } from "./todos.type";


export type TodoStackNavigator = {
  TodoList: undefined;
  CreateTodo: undefined;
  TodoDetails: { todo: ITodo };
};