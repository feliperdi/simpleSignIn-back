import express from 'express';
import UserController from '../control/UserController';


const userRouter = express.Router();
const userController = new UserController();

userRouter.post('/signUp', userController.createUser);
userRouter.post('/signIn', userController.signIn);
userRouter.delete('/', userController.deleteUser);

export default userRouter