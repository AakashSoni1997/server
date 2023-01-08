const mongoose= require("mongoose")
const dotenv=require("dotenv")


dotenv.config()



  const MoviesDB=()=>{
    //  mongoose.connect("mongodb://localhost:27017/moviesapp2022")
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Server is connected to mongoDB atlas")
    })
    .catch((err)=>{
        console.log(err.message)
    })

}


module.exports= MoviesDB
