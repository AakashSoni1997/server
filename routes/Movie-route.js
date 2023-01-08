// import express from "express";
const express=require("express")
const { addMovie, deleteById, getAllMovie, getById, getUserById, updateMovie } =require("../app/controller/Movie-controller");

const movieRouter=express.Router();

 movieRouter.get("/",getAllMovie);
 movieRouter.post("/add",addMovie);
 movieRouter.put("/update/:id",updateMovie);
 movieRouter.get("/:id",getById);
 movieRouter.delete("/:id", deleteById);
 movieRouter.get("/user/:id",getUserById)

module.exports = movieRouter