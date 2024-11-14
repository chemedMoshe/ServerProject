import mongoose from "mongoose";

export interface IMunitionsDB extends Document {
    name: string;
    amount: number;
}

const munitionsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    munitions: {
        type: [{
            name: String,
            amount: Number
        }]
    }
})


export default mongoose.model("Munitions", munitionsSchema)