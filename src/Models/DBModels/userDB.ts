import mongoose from "mongoose";
import IUser from "../interfaces/UserInterface";

const userSchema = new mongoose.Schema(
    {
      Name: {
        type: String,
        required: true,
      },
      Password: {
        type: String,
        required: true,
      },
      Organization: {
        type: String,
        required: true,
      },
      Location: {
        type: String,
        default:undefined
      },
    },
    {
      timestamps: true, 
    }
  );
  
  
  export default mongoose.model<IUser>("User", userSchema);