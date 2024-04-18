import express from 'express';
const router = express.Router();
import registeredUser from "../Models/Registration.js";

router.get('/', (req, res) => {
    res.send("welcom to the dalwadi's world")
})

router.post('/sign-up', (req, res) => {

    const { userName, email, password, image } = req.body;

    const adduser = registeredUser({
        userName: userName,
        email: email,
        password: password,
        image: image
    })
    adduser.save()
})

export default router