import express from 'express';
const router = express.Router();
import registeredUser from "../Models/Registration.js";
import * as faceapi from 'face-api.js';
import Attendance from "../Models/AttendanceModel.js";


router.post('/punchin', async (req, res) => {
    const userimg = req.body;
    var distance;
    const detectedDescriptors = userimg.descriptor;

    const detectedDescriptorArray = Object.values(detectedDescriptors);

    const database = await registeredUser.find({});
    const matchThreshold = 0.6;
    let recognizedUser = null;
    let user

    database.forEach((e, i) => {
        const databaseDescriptors = e.faceDescriptor;
        distance = faceapi.euclideanDistance(detectedDescriptorArray, databaseDescriptors);

        if (distance < matchThreshold) {
            recognizedUser = `User ${i + 1, e}`;

            const userAttendance = Attendance({
                userId: e._id,
                punchIn: new Date(),
                punchOut: new Date(),
                date: new Date(),
            })
            const data = userAttendance.save()
            if (data) {
                return res.json({
                    success: true,
                    message: "Mared Attendance",
                    data: user
                })
            }
        }
    });
})

export default router