import BaseError, { HttpStatusCode } from "./BaseError";

export class ApiError extends BaseError {

    constructor(
        name: string,
    ) {
        super(name, HttpStatusCode.INTERNAL_SERVER, 'Internal server error', true);
    }
};