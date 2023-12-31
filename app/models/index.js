const mongoose = require('mongoose');
const userSchema = require('./user.model');

const UserModel = userSchema(mongoose);
module.exports = UserModel;
