"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserError = void 0;
const BaseError_1 = __importDefault(require("./BaseError"));
class UserError extends BaseError_1.default {
    constructor(name, httpCode, description, isOperational = false) {
        super(name, httpCode, description, isOperational);
    }
}
exports.UserError = UserError;
;
