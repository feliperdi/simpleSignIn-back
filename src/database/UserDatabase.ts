import { ApiError } from "../models/ApiError";
import { HttpStatusCode } from "../models/BaseError";
import { UserError } from "../models/UserErrors";
import { UserModel } from "../models/UserModel";
import BaseDatabase from "./BaseDatabase";


export default class UserDatabase extends BaseDatabase {
    private table: string = 'user';

   async createUser(user: UserModel): Promise<void> {
       try {
            await this.getConection().insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                hash: user.getHash()
            }).into(this.table);
       } catch(error: any) {
            if(error.code === 'ER_DUP_ENTRY') throw new UserError('user already exist', HttpStatusCode.ALREADY_EXIST, `The user ${user.getEmail()} already exist`, false);
            throw new ApiError(error.message);
       } finally {
           await this.closeConnection();
       }
   };

   async getUserByEmail(email: string): Promise<UserModel> {
        try {
            const data = await this.getConection().select("*").where({email}).into(this.table);
            if(!data[0]) throw new UserError("user not found", HttpStatusCode.NOT_FOUND ,`Can't find user: ${email}`, false);
            const user = new UserModel(
                data[0].id,
                data[0].email,
                data[0].hash,
                data[0].name,
            );
            return user;
        } catch(error: any) {
            throw error;
        } finally {
            await this.closeConnection();
        }
   };

   async deleteUser(email: string): Promise<void> {
        try {
            await this.getConection().delete().where({email}).into(this.table);         
        } catch(error: any) {
            throw new ApiError(error.message);
        } finally {
            await this.closeConnection();
        }
    };
}