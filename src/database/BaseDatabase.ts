import {Knex, knex} from 'knex';
import { ApiError } from '../models/ApiError';

export default abstract class BaseDatabase {
    private connection: Knex | null = null;

    protected getConection(): Knex {
        try {
           this.connection = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE
                }
            });
            return this.connection;
        } catch (error: any) {
                throw new ApiError(error.message);
        }
    };

    protected async closeConnection(): Promise<void> {
        try {
            await this.getConection().destroy();
        } catch(error: any) {
            throw new ApiError(error.message);
        }
    };
}