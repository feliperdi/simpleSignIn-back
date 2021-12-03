"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDatabase_1 = __importDefault(require("../database/UserDatabase"));
const BaseError_1 = require("../models/BaseError");
const UserErrors_1 = require("../models/UserErrors");
const UserModel_1 = require("../models/UserModel");
const HashHandle_1 = __importDefault(require("../services/HashHandle"));
const IdHandle_1 = __importDefault(require("../services/IdHandle"));
const TokenHandle_1 = __importDefault(require("../services/TokenHandle"));
const db = new UserDatabase_1.default();
class UserBusines {
    constructor() {
        this.emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    }
    verifyDTO(userDTO) {
        if (!userDTO.email)
            throw new UserErrors_1.UserError('BAD REQUEST EMAIL', BaseError_1.HttpStatusCode.BAD_REQUEST, 'user email not found', false);
        if (!userDTO.password)
            throw new UserErrors_1.UserError('BAD REQUEST EMAIL', BaseError_1.HttpStatusCode.BAD_REQUEST, 'user password not found', false);
        if (!this.emailRegex.test(userDTO.email))
            throw new UserErrors_1.UserError("BAD REQUEST EMAIL", BaseError_1.HttpStatusCode.BAD_REQUEST, 'invalid email format', false);
        if (userDTO.password.length < 8)
            throw new UserErrors_1.UserError("BAD REQUEST PASSWORD", BaseError_1.HttpStatusCode.BAD_REQUEST, 'password too short', false);
        if (userDTO.role !== UserModel_1.UserRole.admin && userDTO.role !== UserModel_1.UserRole.user)
            throw new UserErrors_1.UserError('BAD REQUEST ROLE', BaseError_1.HttpStatusCode.BAD_REQUEST, 'invalid user role', false);
    }
    ;
    async createUser(userDTO) {
        try {
            this.verifyDTO(userDTO);
            const hash = await HashHandle_1.default.hash(userDTO.password);
            const id = IdHandle_1.default.generate();
            const token = await TokenHandle_1.default.generate(userDTO.email, userDTO.role);
            const user = new UserModel_1.UserModel(id, userDTO.email, hash, userDTO.role, "");
            await db.createUser(user);
            const email = user.getEmail();
            return {
                email,
                token
            };
        }
        catch (error) {
            throw error;
        }
    }
    ;
    async login(userDTO) {
        try {
            this.verifyDTO(userDTO);
            const user = await db.getUserByEmail(userDTO.email);
            await HashHandle_1.default.verify(userDTO.email, user.getHash());
            const token = await TokenHandle_1.default.generate(userDTO.email, userDTO.role);
            const email = user.getEmail();
            return {
                email,
                token
            };
        }
        catch (error) {
            throw error;
        }
    }
    ;
    async deleteUser(userDTO) {
        try {
            this.verifyDTO(userDTO);
            const user = await db.getUserByEmail(userDTO.email);
            const _isPasswordValid = await HashHandle_1.default.verify(userDTO.password, user.getHash());
            if (!_isPasswordValid)
                throw new UserErrors_1.UserError("BAD REQUEST PASSWORD", BaseError_1.HttpStatusCode.BAD_REQUEST, 'wrong password', false);
            await db.deleteUser(userDTO.email);
        }
        catch (error) {
            throw error;
        }
    }
    ;
}
exports.default = UserBusines;
