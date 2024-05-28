import express from 'express';
const router = express.Router();
import registeredUser from "../Models/Registration.js";
import * as faceapi from 'face-api.js';
import Attendance from "../Models/AttendanceModel.js";

router.post('/punchin', async (req, res) => {
    try {
        const userimg = req.body;
        const detectedDescriptors = userimg.descriptor;
        const detectedDescriptorArray = Object.values(detectedDescriptors);
        const matchThreshold = 0.6;
        let recognizedUser = null;

        // Fetch all registered users from the database
        const database = await registeredUser.find({});

        // Compare detected face descriptor with each user in the database
        for (let i = 0; i < database.length; i++) {
            const user = database[i];
            const databaseDescriptors = user.faceDescriptor;
            const distance = faceapi.euclideanDistance(detectedDescriptorArray, databaseDescriptors);

            if (distance < matchThreshold) {
                recognizedUser = user;
                break;
            }
        }

        if (!recognizedUser) {
            return res.json({
                success: false,
                message: 'Unknown user'
            });
        }
        const currentDateTime = new Date();
        const currentDate = currentDateTime.toISOString().split('T')[0];

        // Check if there is an attendance record for today
        let attendanceRecord = await Attendance.findOne({
            userId: recognizedUser._id,
            date: { $gte: new Date(currentDate), $lt: new Date(currentDate + 'T23:59:59Z') }
        });
        // console.log(attendanceRecord);

        if (attendanceRecord) {
            if (attendanceRecord.punchOut) {
                return res.json({
                    success: false,
                    message: 'Already punched out for today'
                });
            } else {
                return res.json({
                    success: false,
                    message: 'Already punched in for today'
                });
            }
        } else {
            const newAttendance = new Attendance({
                userId: recognizedUser._id,
                date: currentDateTime,
                punchIn: currentDateTime
            });
            await newAttendance.save();
            return res.json({
                success: true,
                message: 'Punch in recorded', punchIn: currentDateTime
            });
        }
    } catch (error) {
        console.error('Error processing punch in:', error);
        res.json({ message: 'Internal server error' });
    }
});

router.post('/punchout', async (req, res) => {

    try {
        const userimg = req.body;
        const detectedDescriptors = userimg.descriptor;
        const detectedDescriptorArray = Object.values(detectedDescriptors);
        const matchThreshold = 0.6;
        let recognizedUser = null;

        const database = await registeredUser.find({});

        for (let i = 0; i < database.length; i++) {
            const user = database[i];
            const databaseDescriptors = user.faceDescriptor;
            const distance = faceapi.euclideanDistance(detectedDescriptorArray, databaseDescriptors);

            if (distance < matchThreshold) {
                recognizedUser = user;
                break;
            }
        }

        if (!recognizedUser) {
            return res.json({
                success: false,
                message: 'Unknown Employee'
            });
        }
        const currentDateTime = new Date();
        const currentDate = currentDateTime.toISOString().split('T')[0];

        let attendanceRecord = await Attendance.findOne({
            userId: recognizedUser._id,
            date: { $gte: new Date(currentDate), $lt: new Date(currentDate + 'T23:59:59Z') }
        });

        console.log(attendanceRecord);
        if (attendanceRecord) {
            if (!attendanceRecord.punchOut) {
                attendanceRecord.punchOut = currentDateTime;
                await attendanceRecord.save();
                return res.json({
                    success: true,
                    message: 'Punch out recorded',
                    punchOut: currentDateTime
                });
            } else {
                return res.json({
                    success: false,
                    message: 'Already punched out for today'
                });
            }
        } else {
            return res.json({
                success: false,
                message: 'No punch in record found for today'
            });
        }
    } catch (error) {
        console.error('Error processing punch out:', error);
        res.json({
            success: false,
            message: 'Internal server error'
        });
    }
});
export default router