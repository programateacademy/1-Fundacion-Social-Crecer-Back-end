const mongoose = require("mongoose");

// user schema data
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    docnum: {
        type: Number,
        required: true
    },
    isLocked: {
        type: Boolean,
        default: false
    },
    failedLoginAttempts: {
        type: Number,
        default: 0
    },
    unity: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    tempCode: {
        type: String,
        default: null
    },
    codeTimestamp: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('User', UserSchema);