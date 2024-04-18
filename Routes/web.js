import express from 'express';
const router = express.Router();
import registeredUser from "../Models/Registration.js";

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

export default router