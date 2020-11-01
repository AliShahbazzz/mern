const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
})

module.exports = User = mongoose.model('User', UserSchema)