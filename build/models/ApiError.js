"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseError_1 = __importStar(require("./BaseError"));
class ApiError extends BaseError_1.default {
    constructor(name) {
        super(name, BaseError_1.HttpStatusCode.INTERNAL_SERVER, 'Internal server error', true);
    }
}
exports.ApiError = ApiError;
;
