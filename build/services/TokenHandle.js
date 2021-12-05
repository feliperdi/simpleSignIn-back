"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
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
