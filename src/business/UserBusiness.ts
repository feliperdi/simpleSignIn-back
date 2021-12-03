import UserDatabase from "../database/UserDatabase";
import { HttpStatusCode } from "../models/BaseError";
import { UserError } from "../models/UserErrors";
import { UserModel, UserModelDTO, UserRole } from "../models/UserModel";
import HashHandle from "../services/HashHandle";
import IdHandle from "../services/IdHandle";
import TokenHandle  from "../services/TokenHandle";

const db = new UserDatabase();

export default class UserBusines {
    private emailRegex =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
 

    private verifyDTO(userDTO: UserModelDTO): void {
        if(!userDTO.email) throw new UserError('BAD REQUEST EMAIL', HttpStatusCode.BAD_REQUEST, 'user email not found', false);
        if(!userDTO.password) throw new UserError('BAD REQUEST EMAIL', HttpStatusCode.BAD_REQUEST, 'user password not found', false);
        if(!this.emailRegex.test(userDTO.email)) throw new UserError("BAD REQUEST EMAIL", HttpStatusCode.BAD_REQUEST, 'invalid email format', false);
        if(userDTO.password.length < 8) throw new UserError("BAD REQUEST PASSWORD", HttpStatusCode.BAD_REQUEST, 'password too short', false);
        if(userDTO.role !== UserRole.admin && userDTO.role !== UserRole.user ) throw new UserError('BAD REQUEST ROLE', HttpStatusCode.BAD_REQUEST, 'invalid user role', false);
    };
    
    public async createUser(userDTO: UserModelDTO): Promise<any> {
        try {
            this.verifyDTO(userDTO);            
            const hash = await HashHandle.hash(userDTO.password);
            const id = IdHandle.generate();
            const token = await TokenHandle.generate(userDTO.email, userDTO.role);
            const user = new UserModel(id, userDTO.email, hash, userDTO.role , "");

            await db.createUser(user);

            const email = user.getEmail();
            return {
                email,
                token
            };

        } catch(error: any) {
            throw error;
        }
    };

    public async login(userDTO: UserModelDTO): Promise<any> {
        try {
            this.verifyDTO(userDTO);
            const user = await db.getUserByEmail(userDTO.email);
            await HashHandle.verify(userDTO.email, user.getHash());
            const token = await TokenHandle.generate(userDTO.email, userDTO.role);
            const email = user.getEmail();
            return {
                email,
                token
            };
        } catch (error: any) {
            throw error;
        }
    }; 

    public async deleteUser(userDTO: UserModelDTO): Promise<void> {
        try {
            this.verifyDTO(userDTO);
            const user = await db.getUserByEmail(userDTO.email);
            const _isPasswordValid = await HashHandle.verify(userDTO.password ,user.getHash());
            if(!_isPasswordValid) throw new UserError("BAD REQUEST PASSWORD", HttpStatusCode.BAD_REQUEST, 'wrong password', false);
            await db.deleteUser(userDTO.email);
        } catch (error: any) {
            throw error;
        }
    };
}