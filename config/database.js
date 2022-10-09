import mongoose, { Mongoose } from "mongoose"
import dotenv from "dotenv";

dotenv.config()

  const MoviesDB=()=>{
    // mongoose.connect("mongodb://localhost:27017/moviesapp2022")
    mongoose.connect(`${process.env.MONGO_URL}`)
    .then(()=>{
        console.log("Server is connected to mongoDB atlas")
    })
    .catch((err)=>{
        console.log(err.message)
    })

}


export default MoviesDB
