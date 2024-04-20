import express from 'express';
const router = express.Router();
import registeredUser from "../Models/Registration.js";
import * as faceapi from 'face-api.js';

router.get('/', (req, res) => {
    res.send("welcom to the dalwadi's world")
})

router.post('/sign-up', (req, res) => {

    const { username, useremail, password } = req.body.userData;
    const image = req.body.userfaceUrl
    const adduser = registeredUser({
        userName: username,
        email: useremail,
        password: password,
        image: image
    })
    adduser.save()
})

router.post('/sign-in', async (req, res) => {
    try {
        const faceDescriptor = req.body;
        const user = await registeredUser.find({});
        // console.log(user[0].image);
        if (faceDescriptor && user && user.image &&
            Array.isArray(faceDescriptor) && Array.isArray(user.image) &&
            faceDescriptor.length > 0 && user.image.length > 0 &&
            faceDescriptor.length === user.image.length) {
            // Calculate Euclidean distance
            const distance = faceapi.euclideanDistance(faceDescriptor, user.image);

            // Adjust threshold as needed
            if (distance < 0.6) {
                res.status(200).json({ success: true });
            } else {
                res.status(200).json({ success: false });
            }
        } else {
            // Invalid input data
            console.error('Invalid face descriptors');
            res.status(400).json({ message: 'Invalid face descriptors' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Failed to process login' });
    }
})
export default router