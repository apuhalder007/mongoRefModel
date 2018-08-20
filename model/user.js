const mong = require("mongoose");
const userSche = new mong.Schema({
    username : String,
    email: String,
    password : String
});

const userModel = mong.model('users3', userSche);

module.exports = userModel;