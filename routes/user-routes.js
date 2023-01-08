const express =require("express")
const { getAllUsers, login, signup } =require("../app/controller/user-controller")

const router=express.Router()   


router.get("/", getAllUsers)
router.post("/signup",signup)
router.post("/login",login)

module.exports= router