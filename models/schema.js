const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userInfo = new Schema({
    email: String,
    password: String
});

module.exports = mongoose.model('user', userInfo, 'users');