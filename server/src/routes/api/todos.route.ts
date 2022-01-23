import {Router} from 'express';
import todoController from '../../controllers/todo.controller';

const authMiddleware = require('../../middleware/authMiddleware');
const todosRouter: Router = Router();

todosRouter.get('/', todoController.getAllTodo.bind(todoController));
todosRouter.get('/:id', todoController.getOneTodo.bind(todoController));
todosRouter.post(
  '/',
  // authMiddleware,
  todoController.createTodo.bind(todoController)
);
todosRouter.put('/', todoController.updateTodo.bind(todoController));
todosRouter.delete('/', todoController.deleteTodo.bind(todoController));

export default todosRouter;
