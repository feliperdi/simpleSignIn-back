"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRouter_1 = __importDefault(require("./route/userRouter"));
dotenv_1.default.config();
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use('/', userRouter_1.default);
const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running at http://localhost:${address.port}`);
    }
    else {
        console.log(`Failed to start the server`);
    }
});
