import express from 'express';
const router = express.Router();

console.log("dalwadi");
router.get('/', (req, res) => {
    res.send("welcom to the dalwadi's world")
})

export { router } 