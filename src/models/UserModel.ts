export enum UserRole {
    admin =  'ADMIN',
    user = 'USER'
};


export class UserModel {
     private id: string;
     private name?: string;
     private email: string;
     private hash: string;
     private role: UserRole;

     constructor(
        id: string,
        email: string,
        hash: string,
        role: UserRole,
        name?: string | undefined
     ) {
         this.id = id;
         this.email = email;
         this.hash = hash;
         this.role = role;
         this.name = name;
     };

    public getId(): string {
         return this.id;
     };

    public getName(): string | undefined{
        return this.name;
    };

    public getRole(): UserRole{
        return this.role;
    };

    public getEmail(): string {
        return this.email;
    };

    public getHash(): string {
        return this.hash;
    };

    public setId(id: string) {
        this.id = id;
    };

    public setRole(role: UserRole): UserRole{
        return this.role = role;
    };

    public setName(name: string) {
        this.name = name;
    };
    
    public setEmail(email: string) {
        this.email = email;
    };

    public setHash(hash: string) {
        this.hash = hash;
    };
}

export class UserModelDTO {
    public readonly email: string;
    public readonly password: string;
    public readonly role: UserRole;
    constructor(
       email: string,
       password: string,
       role: UserRole,
    ) {
        this.email = email;
        this.password = password;
        this.role = role;
    };
}