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
const ApiError_1 = require("../models/ApiError");
const bcrypt = __importStar(require("bcrypt"));
class HashHandle {
    static async hash(s) {
        try {
            const rounds = Number(process.env.BCRYPT_ROUNDS);
            const salt = await bcrypt.genSalt(rounds);
            return await bcrypt.hash(s, salt);
        }
        catch (error) {
            throw new ApiError_1.ApiError(error.message);
        }
    }
    ;
    static async verify(s, hash) {
        try {
            return await bcrypt.compare(s, hash);
        }
        catch (error) {
            throw new ApiError_1.ApiError(error.message);
        }
    }
    ;
}
exports.default = HashHandle;
