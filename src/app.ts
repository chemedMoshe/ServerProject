import "dotenv/config";
import Express from "express";

const PORT = process.env.PORT || 3000;
const app = Express();


app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
    
})
