import {Router} from "express";
import userController from "../../controllers/user.controller";

const userRouter: Router = Router();

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public

userRouter.get("/", userController.getAllUser.bind(userController));
userRouter.post("/", userController.createUser.bind(userController));
userRouter.delete("/", userController.deleteUser.bind(userController));

export default userRouter;
