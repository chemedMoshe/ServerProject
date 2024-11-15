import "dotenv/config";
import express from "express";
import { connectDB } from "./Config/connectionDB";
import userController from "./controllers/Auth";
import detailsController from "./controllers/userDetailsController";
import dispatchController from './controllers/dispatchController'
import cors from 'cors'
import verify from "./Middleware/verify";
import http from 'http'
import { Server } from "socket.io";
import { startConnection } from "./socket/io";
import { getTimeMissiesByName } from "./utils/missiles";
import { missilesEunm } from "./Models/enums/MissilesEnum";
const PORT = process.env.PORT || 3000;
const app = express();

const httpServer = http.createServer(app)
export const io = new Server(httpServer, { cors: { origin: "*",methods:"*" } })
io.on('connection',startConnection)

connectDB();

app.use(cors())

app.use(express.json());

app.use('/api/users', userController)

app.use('/api/details', verify,detailsController)

app.use('/api/dispatch',verify,dispatchController)



httpServer.listen(PORT, () => {

    console.log(`Server is running on portt ${PORT}`);

})
