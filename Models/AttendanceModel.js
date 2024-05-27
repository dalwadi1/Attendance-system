import mongoose from "mongoose";

const attendance = mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    punchIn: {
        type: Date
    },
    punchOut: {
        type: Date
    },
    date: {
        type: Date
    }
})

const attendanceTable = mongoose.model("attendance", attendance);

export default attendanceTable