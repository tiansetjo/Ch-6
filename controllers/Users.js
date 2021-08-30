const Express = require ("express")
const Cryptr = require('cryptr')
const newCryptr = new Cryptr ('secret')
// models
const UsersModel = require ('../model/MongoDB/User')
const connectDB = require ('../model/MongoDB/connection')
connectDB();

const Login  = (req,res) => {
    let dataUser = req.body
    UsersModel.findOne({
        'username' : dataUser.username,
    }).then(response => {
        if (!response) {
            console.log(response)
            console.log(`tidak ada data user ${dataUser.username}`)
            res.send (`tidak ada data user ${dataUser.username}`)
        } else {
            let decryptPassword = newCryptr.decrypt(response.password)
            if (decryptPassword != dataUser.password) {
            res.status(401).send('failed to get data user')
             } else {
            let PassingDataUser = {
                uid : response._id,
                username :response.username,
                fullname : response.fullname,
                age : response.age,
                address : response.address,
                email : response.email,
            }
            res.status (200).send({
                message : "Succes to Login",
                result : PassingDataUser
            })
        }
    }
        console.log(response)
        res.send (response)
    }).catch (err => {
        console.log(response)
        res.send ('Failed to get Data User')
    })
}


const Register  = (req,res) => {
    let dataUser = req.body
    let newPassword = newCryptr.encrypt(dataUser.password)

const User = new UsersModel ({
    username : dataUser.username, //bisa di buat' sebaris
    password :newPassword,
    fullname :dataUser.fullname,
    age : dataUser.age,
    address: dataUser.address,
    email: dataUser.email,
});

    User.save(User).then(response =>{
        res.send('Success To Create Data Users')
    }) .catch (error =>{
        console.log(error)
        res.send('failed to Create Data users')
    })
}
exports.Login = Login

exports.Register = Register

