"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../control/UserController"));
const userRouter = express_1.default.Router();
const userController = new UserController_1.default();
userRouter.post('/signUp', userController.createUser);
userRouter.post('/signIn', userController.signIn);
userRouter.delete('/', userController.deleteUser);
userRouter.get("/", userController.test);
exports.default = userRouter;
