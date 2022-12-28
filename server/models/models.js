const mongoose = require('mongoose')

const FactSchema = new mongoose.Schema({
    fact : {
        type: String
    }
}, {timestamps: true})

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        minlength: [3, "Username must be 3 or more characters long"]

    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [3, "Password must be 3 or more characters long"]
    },
    facts: [FactSchema]
}, {timestamps: true})

module.exports.Fact = mongoose.model('fact', FactSchema)
module.exports.User = mongoose.model('user', UserSchema)