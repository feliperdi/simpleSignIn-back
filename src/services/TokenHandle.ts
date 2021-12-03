import * as jwt from 'jsonwebtoken';
import BaseError, { HttpStatusCode } from '../models/BaseError';
import { UserError } from '../models/UserErrors';
import { UserRole } from '../models/UserModel';

export default abstract class TokenHandle {

    public static generate(email: string, role: UserRole): string {
        return jwt.sign({email, role}, process.env.JWT_KEY as string, {expiresIn: '1h'});
    };

    public static verify(t: string): any {
        try {
            return jwt.verify(t, process.env.JWT_KEY as string);
        } catch (error) {
            throw new UserError("INVALID TOKEN", HttpStatusCode.UNAUTHORIZED, "invalid token", false);
        }
    }
}