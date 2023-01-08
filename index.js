import express from "express";
import { Router } from "express";
import MoviesDB from "./config/database";
import movieRouter from "./routes/Movie-route";
import router from "./routes/user-routes.js";
import cors from "cors";
import dotenv from "dotenv"

const PORT=5000

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/movie", movieRouter);
dotenv.config()
MoviesDB();

app.get("/honey",(req,res)=>{
  res.send("hello world")
})



// console.log(process.env.PORT,"NEW ENV FILE")
// const port = 5000;

// for showing data in termial
app.use(function (req, res, next) {
  console.log(`${req.method}-${req.url}-${req.ip}-${new Date()}`);
  next();
});


app.listen(PORT, () => {
  console.log("this server is running on port 5000");
});
// https://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@github.com/AakashSoni1997/server.git
// https://moviesserverimdb.herokuapp.com/