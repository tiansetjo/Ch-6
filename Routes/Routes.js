// library
const Express = require ("express")
const Routes  = Express.Router()

//components controllers

const UsersControllers = require('../controllers/Users');

Routes.get('/',(req,res)=>{
    res.send('ini index pages')
})
Routes.get('/Products', (req,res)=>{
    res.send ('ini Products page')
})

Routes.post('/login', UsersControllers.Login)
Routes.post('/register', UsersControllers.Register)


module.exports = Routes 