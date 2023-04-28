const { model, Schema } = require('mongoose');

// Schema for Users
const userSchema = new Schema({
    fullname: String,
    email: String,
    password: String,
    accessToken: String
});

module.exports = model('User', userSchema, 'users');
