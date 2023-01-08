import mongoose, { Mongoose } from "mongoose"
import dotenv from "dotenv";
import express from "express";
// import { Router } from "express";
// import MoviesDB from "./config/database";
// import movieRouter from "./routes/Movie-route";
// import router from "./routes/user-routes.js";
import cors from "cors";
// import dotenv from "dotenv"

const PORT=5000

const app = express();
app.use(cors());
app.use(express.json());
// app.use("/api/user", router);
// app.use("/api/movie", movieRouter);
// dotenv.config()

app.get("/honey",(req,res)=>{
  res.send("hello world")
})




// for showing data in termial
// app.use(function (req, res, next) {
//   console.log(`${req.method}-${req.url}-${req.ip}-${new Date()}`);
//   next();
// });


// app.listen(PORT, () => {
  //   console.log("this server is running on port 5000");
  // });
  
  
  dotenv.config()

  const MoviesDB=()=>{
    //  mongoose.connect("mongodb://localhost:27017/moviesapp2022")
    mongoose.connect(`mongodb+srv://aakash:as1997@movies-cluster.lnkqfix.mongodb.net/test`)
    .then(()=>{
        console.log("Server is connected to mongoDB atlas")
    })
    .catch((err)=>{
      console.log(err.message)
    })
    
}




MoviesDB();