"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
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
