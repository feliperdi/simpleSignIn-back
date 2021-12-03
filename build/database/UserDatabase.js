"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = require("../models/ApiError");
const BaseError_1 = require("../models/BaseError");
const UserErrors_1 = require("../models/UserErrors");
const UserModel_1 = require("../models/UserModel");
const BaseDatabase_1 = __importDefault(require("./BaseDatabase"));
class UserDatabase extends BaseDatabase_1.default {
    constructor() {
        super(...arguments);
        this.table = 'user';
    }
    async createUser(user) {
        try {
            await this.getConection().insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                hash: user.getHash()
            }).into(this.table);
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY')
                throw new UserErrors_1.UserError('user already exist', BaseError_1.HttpStatusCode.ALREADY_EXIST, `The user ${user.getEmail()} already exist`, false);
            throw new ApiError_1.ApiError(error.message);
        }
        finally {
            await this.closeConnection();
        }
    }
    ;
    async getUserByEmail(email) {
        try {
            const data = await this.getConection().select("*").where({ email }).into(this.table);
            if (!data[0])
                throw new UserErrors_1.UserError("user not found", BaseError_1.HttpStatusCode.NOT_FOUND, `Can't find user: ${email}`, false);
            const user = new UserModel_1.UserModel(data[0].id, data[0].email, data[0].hash, data[0].name);
            return user;
        }
        catch (error) {
            throw error;
        }
        finally {
            await this.closeConnection();
        }
    }
    ;
    async deleteUser(email) {
        try {
            await this.getConection().delete().where({ email }).into(this.table);
        }
        catch (error) {
            throw new ApiError_1.ApiError(error.message);
        }
        finally {
            await this.closeConnection();
        }
    }
    ;
}
exports.default = UserDatabase;
