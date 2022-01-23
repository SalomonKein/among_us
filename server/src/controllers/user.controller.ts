import {Response, Request, NextFunction} from "express";
import {IUser} from "./../types/user.type";
import UserService from "../services/user.service";

const ResponseHandler = require("../utils/ResponseHandler");

export class UserController {
  constructor(private userService: UserService) {}
  async getAllUser(_: Request, res: Response, next: NextFunction) {
    const findAllHandler = new ResponseHandler(_, res, next);
    findAllHandler.tryCatchWrapper(this.userService.findAll);
  }
  async createUser(_: Request, res: Response, next: NextFunction) {
    const props: IUser = _.body;
    const createHandler = new ResponseHandler(props, res, next);
    createHandler.tryCatchWrapper(this.userService.create);
  }
  async deleteUser(_: Request, res: Response, next: NextFunction) {
    const {_id}: {_id: string} = _.body;
    const deleteHandler = new ResponseHandler(_id, res, next);
    deleteHandler.tryCatchWrapper(this.userService.delete);
  }
}

const userController = new UserController(new UserService());
export default userController;
