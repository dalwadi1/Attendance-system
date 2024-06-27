import mongoose from "mongoose";

const attendance = mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    punchIn: {
        type: String,
        required: true
    },
    punchOut: {
        type: String
    },
    date: {
        type: Date
    }
})

const attendanceTable = mongoose.model("attendance", attendance);

export default attendanceTable