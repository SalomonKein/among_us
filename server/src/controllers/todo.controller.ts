import {ITodo} from "./../types/todos.type";
import {Response, Request, NextFunction} from "express";
import TodoService from "../services/todo.service";

const ResponseHandler = require("../utils/ResponseHandler");

export class TodoController {
  constructor(private todoService: TodoService) {}
  async getAllTodo(_: Request, res: Response, next: NextFunction) {
    const findAllHandler = new ResponseHandler(_, res, next);
    findAllHandler.tryCatchWrapper(this.todoService.findAll);
  }
  async getOneTodo(_: Request, res: Response, next: NextFunction) {
    const {id} = _.params;
    const findOneHandler = new ResponseHandler(id, res, next);
    findOneHandler.tryCatchWrapper(this.todoService.findOne);
  }
  async createTodo(_: Request, res: Response, next: NextFunction) {
    const props: ITodo = _.body;
    const createHandler = new ResponseHandler(props, res, next);
    createHandler.tryCatchWrapper(this.todoService.create);
  }
  async updateTodo(_: Request, res: Response, next: NextFunction) {
    const props: ITodo = _.body;
    const updateHandler = new ResponseHandler(props, res, next);
    updateHandler.tryCatchWrapper(this.todoService.update);
  }
  async deleteTodo(_: Request, res: Response, next: NextFunction) {
    const {_id}: {_id: string} = _.body;
    const deleteHandler = new ResponseHandler(_id, res, next);
    deleteHandler.tryCatchWrapper(this.todoService.delete);
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
