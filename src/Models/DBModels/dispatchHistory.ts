import mongoose from "mongoose";

const dispatchHistorySchema = new mongoose.Schema({
            name: String,
            status: String,
            location: String,
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
})
export default mongoose.model("DispatchHistory", dispatchHistorySchema)