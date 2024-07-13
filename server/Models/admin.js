import mongoose, { Types } from "mongoose";

const adminSchema = mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true,
    }

}, {timestamps: true})

const admin = mongoose.model("admin", adminSchema)

export default admin