import { ApiError } from "../models/ApiError";
import * as bcrypt from 'bcrypt';


export default abstract class HashHandle {

    public static async hash(s: string): Promise<string> {
        try {
            const rounds = Number(process.env.BCRYPT_ROUNDS);
            const salt = await bcrypt.genSalt(rounds);
            return await bcrypt.hash(s, salt);
        } catch(error: any) {
            throw new ApiError(error.message);
        }
    };
    
    public static async verify(s: string, hash: string): Promise<boolean> {
        try {
            return await bcrypt.compare(s, hash);
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    };
}