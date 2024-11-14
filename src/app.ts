import "dotenv/config";
import express from "express";
import { connectDB } from "./Config/connectionDB";
import userController from "./controllers/Auth";
import detailsController from "./controllers/userDetailsController";
import dispatchController from './controllers/dispatchController'
import cors from 'cors'
import { getDispatchByLocation } from "./Server/dispatchServer";
import { LocationsEnum } from "./Models/enums/LocationEnum";
const PORT = process.env.PORT || 3000;
const app = express();

connectDB();
app.use(cors())
app.use(express.json());

app.use('/api/users', userController)

app.use('/api/details', detailsController)

app.use('/api/dispatch',dispatchController)



app.listen(PORT, () => {

    console.log(`Server is running on portt ${PORT}`);

})
