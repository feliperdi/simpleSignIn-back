"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = require("knex");
const ApiError_1 = require("../models/ApiError");
class BaseDatabase {
    constructor() {
        this.connection = null;
    }
    getConection() {
        try {
            this.connection = (0, knex_1.knex)({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE
                }
            });
            return this.connection;
        }
        catch (error) {
            throw new ApiError_1.ApiError(error.message);
        }
    }
    ;
    async closeConnection() {
        try {
            await this.getConection().destroy();
        }
        catch (error) {
            throw new ApiError_1.ApiError(error.message);
        }
    }
    ;
}
exports.default = BaseDatabase;
