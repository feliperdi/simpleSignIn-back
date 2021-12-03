export enum HttpStatusCode {
    OK = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    ALREADY_EXIST = 409,
    INTERNAL_SERVER = 500,
}

export default class BaseError extends Error {
    public readonly name: string;
    public readonly httpCode: HttpStatusCode;
    public readonly isOperational: boolean;

    constructor(
        name: string, 
        httpCode: HttpStatusCode, 
        description: string, 
        isOperational: boolean
    ){
        super(description);
        this.name = name;
        this.httpCode = httpCode;
        this.isOperational = isOperational;
    }
}