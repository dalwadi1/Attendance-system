import Auth from "../Models/Registration";


router.get('/getusers', (req, res) => {

    const users = Auth.find({})

    res.json({
        users: users
    })
})