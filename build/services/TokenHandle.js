"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const BaseError_1 = require("../models/BaseError");
const UserErrors_1 = require("../models/UserErrors");
class TokenHandle {
    static generate(email, role) {
        return jwt.sign({ email, role }, process.env.JWT_KEY, { expiresIn: '1h' });
    }
    ;
    static verify(t) {
        try {
            return jwt.verify(t, process.env.JWT_KEY);
        }
        catch (error) {
            throw new UserErrors_1.UserError("INVALID TOKEN", BaseError_1.HttpStatusCode.UNAUTHORIZED, "invalid token", false);
        }
    }
}
exports.default = TokenHandle;
