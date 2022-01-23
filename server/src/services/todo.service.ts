import {ITodo} from './../types/todos.type';
import Todo from '../models/Todo';

export default class TodoService {
  async findAll() {
    const todos = await Todo.find({});
    return todos;
  }
  async findOne(id: string) {
    const todo = await Todo.findById(id);
    return todo;
  }
  async create(props: ITodo) {
    const todo = new Todo({
      title: props.title,
      description: props.description,
      isCompleted: props.isCompleted,
      isPublic: props.isPublic,
      userId: props.userId,
      year: props.year,
    });
    await todo.save();
    return todo;
  }
  async update(props: ITodo) {
    const todo = Todo.findByIdAndUpdate(props._id, {
      title: props.title,
      description: props.description,
      isCompleted: props.isCompleted,
      isPublic: props.isPublic,
      userId: props.userId,
      year: props.year,
    });
    return todo;
  }
  async delete(id: string) {
    const todo = Todo.findByIdAndRemove(id, function(err: Error) {
      if (err) throw err;
    });
    return `${id} is deleted`;
  }
}
