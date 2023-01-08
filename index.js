const express=require("express")
const Router=require("express")
const MoviesDB=require("./config/database")
const movieRouter=require("./routes/Movie-route")
const router=require("./routes/user-routes.js")
const cors=require("cors")
const PORT=5000
const dotenv=require("dotenv")

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/movie", movieRouter);
dotenv.config()
MoviesDB()

app.get("/honey",(req,res)=>{
  res.send("hello world")
})




// for showing data in termial
// app.use(function (req, res, next) {
//   console.log(`${req.method}-${req.url}-${req.ip}-${new Date()}`);
//   next();
// });


app.listen(PORT, () => {
    console.log("this server is running on port 5000");
  });
  
  



