const Mongoose = require ('mongoose')
const LinkMongo = "mongodb+srv://tian:12345@learnmongo.xqq9r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connectDB = async () =>{
    try {
        const Conn = await Mongoose.connect(
            LinkMongo,
            {
                useNewUrlParser : true,
                useFindAndModify : true,
                useFindAndModify : false,
                useCreateIndex : true,
            }
        )
        console.log(`Success TO Connect Mongo DB ${Conn.connection.host}`)

    }catch{
        console.log(error)
        process.exit(i)

    }

}

module.exports = connectDB