"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatusCode = void 0;
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCode[HttpStatusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatusCode[HttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCode[HttpStatusCode["ALREADY_EXIST"] = 409] = "ALREADY_EXIST";
    HttpStatusCode[HttpStatusCode["INTERNAL_SERVER"] = 500] = "INTERNAL_SERVER";
})(HttpStatusCode = exports.HttpStatusCode || (exports.HttpStatusCode = {}));
class BaseError extends Error {
    constructor(name, httpCode, description, isOperational) {
        super(description);
        this.name = name;
        this.httpCode = httpCode;
        this.isOperational = isOperational;
    }
}
exports.default = BaseError;
