import "dotenv/config";
import Express from "express";
import { connectDB } from "./Config/connectionDB";
import userController from "./controllers/Auth";
const PORT = process.env.PORT || 3000;
const app = Express();

connectDB();

app.use(Express.json());

app.use('/api/users',userController)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
})
