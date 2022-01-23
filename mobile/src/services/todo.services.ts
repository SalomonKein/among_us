import { ITodo } from "../types/todos.type";
import {HttpSerivce} from "./http.services";

export class TodoService extends HttpSerivce {
  constructor() {
    super();
  }
  async getTodo(id: string) {
    const todo = await this.get({
      url: `todos/${id}`,
    });
    return todo;
  }
  async getTodos() {
    const todos = await this.get({
      url: "todos",
    });
    return todos;
  }
  async createTodo(todo: any) {
    const todoCreate = await this.post({
      url: "todos",
      data: todo,
      headers: undefined,
    });
    return todoCreate;
  }
  async updateTodo(todo: any) {
    const todoUpd = await this.put({
      url: "todos",
      data: todo,
      headers: undefined,
    });
    return todoUpd;
  }
  async deleteTodo(id: string) {
    const todoDel = await this.delete({
      url: "todos",
      data: {_id: id},
      headers: undefined,
    });
    return todoDel;
  }
}
