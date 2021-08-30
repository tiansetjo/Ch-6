const Express = require("express")
const app = Express()
const port = 7000
const Morgan = require ("morgan")
const DotEnv = require ("dotenv")
const mongodb = require('mongodb')
const {mongo} = require ('mongoose')
const mysql= require('mysql')
const BodyParser = require ('body-parser')

app.use(BodyParser.urlencoded({extended : true}))
app.use(BodyParser.json())
app.use(Morgan('dev'))

app.use(Express.static("public"));
app.use("/css", Express.static(__dirname+"public/css"))
app.use("/js", Express.static(__dirname+"public/js"))
app.use("/img", Express.static(__dirname+"public/img"))

//set views
app.set('views', './views')
app.set("view engine", "ejs")

app.listen (port,() => console.log (`Port is running port ${port}`))

const MongoDBURL ="mongodb+srv://tian:12345@learnmongo.xqq9r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const MongoCLient = mongodb.MongoClient;

const Routes = require('./routes/Routes')
const userRoutes = require("body-parser")
app.use(Routes)

app.use('/users', userRoutes)