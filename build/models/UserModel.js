"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserRole;
(function (UserRole) {
    UserRole["admin"] = "ADMIN";
    UserRole["user"] = "USER";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
;
class UserModel {
    constructor(id, email, hash, role, name) {
        this.id = id;
        this.email = email;
        this.hash = hash;
        this.role = role;
        this.name = name;
    }
    ;
    getId() {
        return this.id;
    }
    ;
    getName() {
        return this.name;
    }
    ;
    getRole() {
        return this.role;
    }
    ;
    getEmail() {
        return this.email;
    }
    ;
    getHash() {
        return this.hash;
    }
    ;
    setId(id) {
        this.id = id;
    }
    ;
    setRole(role) {
        return this.role = role;
    }
    ;
    setName(name) {
        this.name = name;
    }
    ;
    setEmail(email) {
        this.email = email;
    }
    ;
    setHash(hash) {
        this.hash = hash;
    }
    ;
}
exports.UserModel = UserModel;
class UserModelDTO {
    constructor(email, password, role) {
        this.email = email;
        this.password = password;
        this.role = role;
    }
    ;
}
exports.UserModelDTO = UserModelDTO;
