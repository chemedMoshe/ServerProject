import mongoose from "mongoose";

const dispatchHistorySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dispatches: {
        type: [{
            name: String,
            staus: String
        }],
        default: []
    }
})
export default mongoose.model("DispatchHistory", dispatchHistorySchema)