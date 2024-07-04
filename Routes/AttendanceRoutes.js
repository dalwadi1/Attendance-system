import express from 'express';
const router = express.Router();
import registeredUser from "../Models/Registration.js";
import * as faceapi from 'face-api.js';
import Attendance from "../Models/AttendanceModel.js";
import jwt from "jsonwebtoken";
import mongoose from 'mongoose';


router.post('/punchin', async (req, res) => {
    // console.log(req.body);
    try {
        const userimg = req.body;
        const detectedDescriptors = userimg.descriptor;
        const detectedDescriptorArray = Object.values(detectedDescriptors);
        const matchThreshold = 0.6;
        let recognizedUser = null;
        let user;
        const database = await registeredUser.find({});


        database.forEach((e, i) => {
            const databaseDescriptors = e.faceDescriptor;
            let distance = faceapi.euclideanDistance(detectedDescriptorArray, databaseDescriptors);

            if (distance < matchThreshold) {
                recognizedUser = e;
                user = e;
            }
        });

        if (!recognizedUser) {
            return res.json({
                success: false,
                message: 'Unknown user'
            });
        }
        const currentDateTime = new Date();
        const currentTime = currentDateTime.toTimeString().split(' ')[0]; // HH:MM:SS
        const currentDate = currentDateTime.toISOString().split('T')[0]; // YYYY-MM-DD

        // Check if there is an attendance record for today
        let attendanceRecord = await Attendance.findOne({
            userId: recognizedUser._id,
            date: { $gte: new Date(currentDate), $lt: new Date(currentDate + 'T23:59:59Z') }
        });

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
                punchIn: currentTime
            });
            await newAttendance.save();
            return res.json({
                success: true,
                message: 'Punch in recorded', punchIn: currentDateTime
            });
        }
    } catch (error) {
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
        let user;


        const database = await registeredUser.find({});

        database.forEach((e, i) => {
            const databaseDescriptors = e.faceDescriptor;
            let distance = faceapi.euclideanDistance(detectedDescriptorArray, databaseDescriptors);

            if (distance < matchThreshold) {
                recognizedUser = e;
                user = e;
            }
        });
        if (!recognizedUser) {
            return res.json({
                success: false,
                message: 'Unknown Employee'
            });
        }
        const currentDateTime = new Date();
        const currentTime = currentDateTime.toTimeString().split(' ')[0].toLocaleString('en-US', { hour: 'numeric', hour12: true }); // HH:MM:SS
        const currentDate = currentDateTime.toISOString().split('T')[0]; // YYYY-MM-DD

        let attendanceRecord = await Attendance.findOne({
            userId: recognizedUser._id,
            date: { $gte: new Date(currentDate), $lt: new Date(currentDate + 'T23:59:59Z') }
        });
        if (attendanceRecord) {
            if (!attendanceRecord.punchOut) {
                attendanceRecord.punchOut = currentTime;
                await attendanceRecord.save();
                return res.json({
                    success: true,
                    message: 'Punch out recorded',
                    punchOut: currentTime
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
router.post('/getUserAttendance', async (req, res) => {

    const token = req.body.token
    // console.log(token);

    const decoded = jwt.verify(token, 'Dalwadi')

    const userId = new mongoose.Types.ObjectId(decoded.id)

    const attendance = await Attendance.find({
        userId: userId
    })
    res.json({
        users: attendance
    })
})
export default router