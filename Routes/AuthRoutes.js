import express from 'express';
const router = express.Router();
import registeredUser from "../Models/Registration.js";
import * as faceapi from 'face-api.js';
import Auth from "../Models/Registration.js";
import validateUser from "../Routes/Helper/Validate.js";

router.get('/', (req, res) => {
    res.send("welcom to the dalwadi's world")
})

router.post('/sign-up', async (req, res) => {
    const { username, useremail } = req.body.userData;
    const image = req.body.userfaceUrl
    const userimg = image.descriptor
    var result = Object.keys(userimg).map((k) => userimg[k]);

    const { error, value } = validateUser.validateUser.validate({
        username: username,
        email: useremail,
    });

    if (error) {
        res.json({
            success: false,
            message: error.message
        })
    } else {
        const checkEmail = await Auth.findOne({ email: useremail })
        if (checkEmail) {
            res.json({
                success: false,
                message: 'Email Address allready Exist!'
            })
        } else {
            const token = Math.random().toString(36).slice(2);

            const register = Auth({
                userName: username,
                email: useremail,
                token: token,
                faceDescriptor: result,
            })
            const data = register.save()
            if (data) {
                res.json({
                    success: true,
                    message: 'You are successfully registered!'
                })
            }
        }
    }
})

router.post('/sign-in', async (req, res) => {
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
            user = e
        }
    });
    if (recognizedUser === null) {
        return res.json({
            success: false,
            message: "please sign up",
        })
    }
    else {
        return res.json({
            success: true,
            message: "loged in successfully",
            data: user
        })
    }
})
export default router