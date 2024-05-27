import mongoose from "mongoose";

const register = new mongoose.Schema({

    userName: {
        type: String,

    },
    type: {
        type: String,
        default: 'user'
    },
    email: {
        type: String,

    },
    token: {
        type: 'String'
    },
    faceDescriptor: {
        type: Array,
        required: true
    },
})

const registeredUsers = mongoose.model('Register', register)

export default registeredUsers;