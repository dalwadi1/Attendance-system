import express from 'express'
import mongoose, { model } from "mongoose";

const register = new mongoose.Schema({

    userName: {
        type: String,

    },
    email: {
        type: String,

    },
    password: {
        type: String,

    },
    image: {
        type: String,

    },
})

const registeredUsers = mongoose.model('Register', register)

export default registeredUsers;