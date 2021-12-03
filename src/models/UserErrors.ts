import BaseError, { HttpStatusCode } from "./BaseError";

export class UserError extends BaseError {

    constructor(
        name: string, 
        httpCode: HttpStatusCode, 
        description: string,
        isOperational = false
    ) {
        super(name, httpCode, description, isOperational);
    }
};

