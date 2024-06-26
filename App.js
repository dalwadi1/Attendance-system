import express from 'express';
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
import Routes from './Routes/AuthRoutes.js';
import AttendaceRoutes from './Routes/AttendanceRoutes.js';
import mongoose from 'mongoose';

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
console.log("done");

mongoose.connect('mongodb://localhost:27017/attendance_system')
app.use(Routes)
app.use(AttendaceRoutes)
app.listen(8000, () => {
    console.log('server start')
})