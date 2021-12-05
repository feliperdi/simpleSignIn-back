import { Request, Response } from "express";
import UserBusines from "../business/UserBusiness";
import { UserModelDTO } from "../models/UserModel";

export default class UserController {


    public async createUser(req: Request, res: Response): Promise<void> {
        try {
            const userDTO: UserModelDTO = {
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            };

            const userBusiness = new UserBusines();

            const data = await userBusiness.createUser(userDTO);
            res.status(201).send(data);

        } catch(error: any) {
            res.status(error.httpCode).send(error.message);
        }
    };
    
    public async signIn(req: Request, res: Response): Promise<void> {
        try {
            const userBusiness = new UserBusines();
            const userDTO: UserModelDTO = {
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            };
            const data = await userBusiness.login(userDTO);
            res.status(200).send(data);

        } catch(error: any) {
            res.status(error.httpCode).send(error.message);
        }
    };

    public async test(req: Request, res: Response): Promise<void> {
        try {
            res.sendStatus(200);
        } catch(error: any) {
            res.status(error.httpCode).send(error.message);
        }
    };

    public async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            const userBusiness = new UserBusines();
            const userDTO: UserModelDTO = {
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            };
            await userBusiness.deleteUser(userDTO);
            res.sendStatus(200);
        } catch(error: any) {
            res.status(error.httpCode).send(error.message);
        }
    };
}