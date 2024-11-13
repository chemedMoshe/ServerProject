import "dotenv/config";
import Express from "express";
import { connectDB } from "./Config/connectionDB";
import userController from "./controllers/Auth";
import detailsController from "./controllers/userDetailsController";
import { updateMissiles } from "./Server/dispatchServer";
import { missilesEunm } from "./Models/enums/MissilesEnum";
const PORT = process.env.PORT || 3000;
const app = Express();

connectDB();

app.use(Express.json());

app.use('/api/users', userController)

app.use('/api/details', detailsController)

//app.use('/api/dispatch')

app.listen(PORT, () => {

    console.log(`Server is running on portt ${PORT}`);

})
