const Mongoose = require('mongoose')

var Schema = new Mongoose.Schema({
    username : {type : String, require : true,}, //bisa di buat sebaris
    password :{
        type : String,
        require : true,
    },
    fullname :{type : String,},
    age :{type : String,},
    address:{type : String,},
    email:{Type : String,}
})

const Users = Mongoose.model('user', Schema)
module.exports = Users