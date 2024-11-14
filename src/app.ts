import "dotenv/config";
import express from "express";
import { connectDB } from "./Config/connectionDB";
import userController from "./controllers/Auth";
import detailsController from "./controllers/userDetailsController";
import dispatchController from './controllers/dispatchController'
import cors from 'cors'
import http from 'http'
import { Server } from "socket.io";
import { startConnection } from "./socket/io";
const PORT = process.env.PORT || 3000;
const app = express();

const httpServer = http.createServer(app)
export const io = new Server(httpServer, { cors: { origin: "*",methods:"*" } })
io.on('connection',startConnection)

connectDB();
app.use(cors())
app.use(express.json());

app.use('/api/users', userController)

app.use('/api/details', detailsController)

app.use('/api/dispatch',dispatchController)



httpServer.listen(PORT, () => {

    console.log(`Server is running on portt ${PORT}`);

})
