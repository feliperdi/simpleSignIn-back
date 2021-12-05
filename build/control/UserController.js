"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserBusiness_1 = __importDefault(require("../business/UserBusiness"));
class UserController {
    async createUser(req, res) {
        try {
            const userDTO = {
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            };
            const userBusiness = new UserBusiness_1.default();
            const data = await userBusiness.createUser(userDTO);
            res.status(201).send(data);
        }
        catch (error) {
            res.status(error.httpCode).send(error.message);
        }
    }
    ;
    async signIn(req, res) {
        try {
            const userBusiness = new UserBusiness_1.default();
            const userDTO = {
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            };
            const data = await userBusiness.login(userDTO);
            res.status(200).send(data);
        }
        catch (error) {
            res.status(error.httpCode).send(error.message);
        }
    }
    ;
    async test(req, res) {
        try {
            res.sendStatus(200);
        }
        catch (error) {
            res.status(error.httpCode).send(error.message);
        }
    }
    ;
    async deleteUser(req, res) {
        try {
            const userBusiness = new UserBusiness_1.default();
            const userDTO = {
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            };
            await userBusiness.deleteUser(userDTO);
            res.sendStatus(200);
        }
        catch (error) {
            res.status(error.httpCode).send(error.message);
        }
    }
    ;
}
exports.default = UserController;
