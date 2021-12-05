import dotenv from 'dotenv';
import express from 'express';
import { AddressInfo } from 'net';
import userRouter from './route/userRouter';


dotenv.config();

const app = express();

app.use(express.json());
app.use('/', userRouter);


const server = app.listen(3000, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running at http:localhost:${address.port}`);
    } else {
        console.log(`Failed to start the server`);
    }
})
